import type { NextPage } from 'next';
import styles from '../../styles/Form.module.css';
import FormInput from '../../UI-Components/FormInput';
import { Formik, useFormikContext, getIn, FormikProps } from 'formik';
import axios from 'axios';
import FormOptions from '../../UI-Components/FormOptions';
import { useEffect, useState, useRef } from 'react';
import loadScript from '../../utils/razorpayScript';
import { useRouter } from 'next/router';
import Error from '../../UI-Components/error';
import Loader from '../../UI-Components/loader';
import buildForm from '../../utils/buildForm';
import Head from 'next/head';
import displayPaytm from '../../utils/displayPaytm';
import PhoneSelector from '../../UI-Components/PhoneSelector';
import FormSelect from '../../UI-Components/FormSelect';
import FormIEEE from '../../UI-Components/FormIEEE';
import getCountryList from '../../utils/getCountryList';
import { getPedesPrice, getPedesTotalPrice } from '../../utils/getPedesPrice';
import * as yup from 'yup';

const Form: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const [initialVal, setIntialVal] = useState({
    name: '',
    email: '',
    phone: '',
    ieeeMember: '',
    membershipId: '',
    validIEEE: '',
    citizen: '',
    address: '',
    gender: '',
    country: '',
    state: '',
    pincode: '',
    food: '',
    institute: '',
    designation: '',
    category: '',
    papers: '1',
    paperId1: '',
    paperId2: '',
  });
  // const [initialVal, setIntialVal] = useState({
  //   name: 'Test ',
  //   email: 'abhijithkannan452@gmail.com',
  //   phone: '+917025263554',
  //   ieeeMember: 'No',
  //   validIEEE: '',
  //   institute: 'CEK',
  //   designation: 'CEK',
  //   address: 'XYZ Houser',
  //   gender: 'Male',
  //   country: 'India',
  //   state: 'Kerala',
  //   pincode: '686019',
  //   food: 'Veg',
  //   citizen: 'Indian',
  //   category: 'IEEE Student Member',
  //   paperId1: 'asdas',
  //   paperId2: '',
  //   papers: '1',
  // });

  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
    ieeeMember: yup.string().required(),
    validIEEE: yup.string().when('ieeeMember', {
      is: 'Yes',
      then: yup.string().required('Verify membership ID'),
    }),
    citizen: yup.string().required(),
    address: yup.string().required(),
    gender: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    food: yup.string().required(),
    pincode: yup.string().required(),
    institute: yup.string().required(),
    designation: yup.string().required(),
    category: yup.string().required(),
    paperId1: yup.string().when('papers', {
      is: (papers: any) => Number(papers) > 0,
      then: yup.string().required(),
    }),
    paperId2: yup.string().when('papers', {
      is: (papers: any) => Number(papers) >= 2,
      then: yup.string().required(),
    }),
    papers: yup.string().required(),
    membershipId: yup.string().when('ieeeMember', {
      is: 'Yes',
      then: yup.string().required(),
    }),
    passport: yup.string().when('category', {
      is: (category: any) =>
        category !== undefined && category.includes('Foreign'),
      then: yup.string().required(),
    }),
  });

  const PriceUpdater: Function = () => {
    const { values, setFieldValue } = useFormikContext<any>();
    const didMount = useRef(false);
    useEffect(() => {
      if (didMount.current) {
        if (Number(values.papers) === 1) {
          setFieldValue('paperId2', '');
        }
      } else {
        didMount.current = true;
      }
    }, [
      values.papers,
      values.ieeeMember,
      values.category,
      values.extraPage1,
      values.extraPage2,
      values.extraPage3,
    ]);
  };

  const handleAxiosError = (err: any) => {
    setError(true);
    setErrorMsg(err.response !== undefined ? err.response.data.error : err);
    setLoading(false);
  };

  const handleUpload = async (values: any) => {
    setIntialVal(values);
    setLoading(true);
    try {
      var data = values;
      data.membershipType = values.ieeeMember
        ? 'IEEE Member'
        : 'Non IEEE Member';
      data.amount = JSON.stringify({
        currency: values.citizen === 'Foreign' ? 'USD' : 'INR',
        amount: getPedesTotalPrice(values, getPedesPrice(values)),
      });

      const formData = buildForm(data);

      const res = await axios.post(
        '/api/pay/paytm?formId=pedes2022',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      displayPaytm(res.data);
    } catch (err: any) {
      handleAxiosError(err);
    }
  };

  const catgory = [
    'IEEE Student Member',
    'Non-IEEE Student Member',
    'IEEE Member',
    'Non-IEEE member',
    'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus',
  ];

  return (
    <div className={styles.form}>
      <Head>
        <title>PEDES 2022</title>
      </Head>
      {loading ? (
        <>
          <Loader msg="Don't refresh this page. Redirecting to payment processing service ..." />
        </>
      ) : (
        <div className={styles.formContainer}>
          <img className={styles.formBanner} src="/indicon2.png" />
          <div className={styles.formDetails}>
            <p className={styles.subTitle}>REGISTRATION FORM</p>
            <h1 className={styles.formTitle}>PEDES 2022</h1>
            {/* <p className={styles.formDescription}>
              To ride a vehicle I worked on back home in New Zealand has always
              been a dream, to share it with so many like minded people at
              Ducati Owners Club NZ is even better. Credit to Aaron Staples for
              the great shots.
            </p> */}
          </div>
          {error ? <Error setError={setError} msg={errorMsg} /> : null}

          <div className={styles.formContent}>
            <Formik
              initialValues={initialVal}
              validationSchema={schema}
              onSubmit={(values) => handleUpload(values)}
            >
              {({
                values,
                errors,
                handleSubmit,
                setFieldValue,
              }: FormikProps<any>) => (
                <div>
                  <FormInput
                    label="Full name *"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={(e: any) => setFieldValue('name', e.target.value)}
                    errors={
                      getIn(errors, 'name') !== undefined
                        ? getIn(errors, 'name')
                        : ''
                    }
                  />
                  <FormInput
                    label="Email *"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={(e: any) =>
                      setFieldValue('email', e.target.value)
                    }
                    errors={
                      getIn(errors, 'email') !== undefined
                        ? getIn(errors, 'email')
                        : ''
                    }
                  />

                  <PhoneSelector
                    label="Phone *"
                    placeholder="Enter your phone number"
                    value={values.phone}
                    onChange={(e: any) => setFieldValue('phone', e)}
                    errors={
                      getIn(errors, 'phone') !== undefined
                        ? getIn(errors, 'phone')
                        : ''
                    }
                  />
                  <FormOptions
                    label="Gender*"
                    options={['Male', 'Female']}
                    value={values.gender}
                    onChange={(e: any) => setFieldValue('gender', e)}
                    errors={
                      getIn(errors, 'gender') !== undefined
                        ? getIn(errors, 'gender')
                        : ''
                    }
                  />
                  <FormInput
                    label="Permanent address *"
                    placeholder="Enter your permanent address"
                    value={values.address}
                    onChange={(e: any) =>
                      setFieldValue('address', e.target.value)
                    }
                    errors={
                      getIn(errors, 'address') !== undefined
                        ? getIn(errors, 'address')
                        : ''
                    }
                  />
                  <FormSelect
                    label="Country *"
                    options={getCountryList}
                    value={{ label: values.country, value: values.country }}
                    onChange={(e: any) => setFieldValue('country', e.value)}
                    errors={
                      getIn(errors, 'country') !== undefined
                        ? getIn(errors, 'country')
                        : ''
                    }
                  />
                  <FormInput
                    label="State/Province *"
                    placeholder="Enter your state or province"
                    value={values.state}
                    onChange={(e: any) =>
                      setFieldValue('state', e.target.value)
                    }
                    errors={
                      getIn(errors, 'state') !== undefined
                        ? getIn(errors, 'state')
                        : ''
                    }
                  />
                  <FormInput
                    label="Pincode *"
                    placeholder="Enter your pincode"
                    value={values.pincode}
                    onChange={(e: any) =>
                      setFieldValue('pincode', e.target.value)
                    }
                    errors={
                      getIn(errors, 'pincode') !== undefined
                        ? getIn(errors, 'pincode')
                        : ''
                    }
                  />
                  <FormInput
                    label="Institute *"
                    placeholder="Enter your institution"
                    value={values.institute}
                    onChange={(e: any) =>
                      setFieldValue('institute', e.target.value)
                    }
                    errors={
                      getIn(errors, 'institute') !== undefined
                        ? getIn(errors, 'institute')
                        : ''
                    }
                  />
                  <FormInput
                    label="Designation *"
                    placeholder="Enter your phone number"
                    value={values.designation}
                    onChange={(e: any) =>
                      setFieldValue('designation', e.target.value)
                    }
                    errors={
                      getIn(errors, 'designation') !== undefined
                        ? getIn(errors, 'designation')
                        : ''
                    }
                  />
                  <FormOptions
                    label="Are you an IEEE Member*"
                    options={['Yes', 'No']}
                    value={values.ieeeMember}
                    onChange={(e: any) => setFieldValue('ieeeMember', e)}
                    errors={
                      getIn(errors, 'ieeeMember') !== undefined
                        ? getIn(errors, 'ieeeMember')
                        : ''
                    }
                  />
                  <FormIEEE
                    label="If yes, enter your membership ID"
                    placeholder="Enter your IEEE Membership ID "
                    value={values.membershipId}
                    onChange={(e: any) =>
                      setFieldValue('membershipId', e.target.value)
                    }
                    onChangeValid={(e: any) => setFieldValue('validIEEE', e)}
                    errors={
                      getIn(errors, 'membershipId') !== undefined
                        ? getIn(errors, 'membershipId')
                        : ''
                    }
                    vaildError={
                      getIn(errors, 'validIEEE') !== undefined
                        ? getIn(errors, 'validIEEE')
                        : ''
                    }
                  />
                  <FormOptions
                    label="Citizenship*"
                    options={['Indian', 'Foreign']}
                    value={values.citizen}
                    onChange={(e: any) => setFieldValue('citizen', e)}
                    errors={
                      getIn(errors, 'citizen') !== undefined
                        ? getIn(errors, 'citizen')
                        : ''
                    }
                  />
                  <FormOptions
                    label="Food preference *"
                    options={['Veg', 'Non Veg']}
                    value={values.food}
                    onChange={(e: any) => setFieldValue('food', e)}
                    errors={
                      getIn(errors, 'food') !== undefined
                        ? getIn(errors, 'food')
                        : ''
                    }
                  />

                  <FormOptions
                    label="Number of papers*"
                    options={['1', '2']}
                    value={values.papers}
                    onChange={(e: any) => setFieldValue('papers', e)}
                    errors={
                      getIn(errors, 'papers') !== undefined
                        ? getIn(errors, 'papers')
                        : ''
                    }
                  />
                  {Number(values.papers) > 0 ? (
                    <>
                      <FormInput
                        label="Paper ID 1*"
                        placeholder="Enter your paper id 1"
                        value={values.paperId1}
                        onChange={(e: any) =>
                          setFieldValue('paperId1', e.target.value)
                        }
                        errors={
                          getIn(errors, 'paperId1') !== undefined
                            ? getIn(errors, 'paperId1')
                            : ''
                        }
                      />
                    </>
                  ) : null}
                  {Number(values.papers) >= 2 ? (
                    <>
                      <FormInput
                        label="Paper ID 2*"
                        placeholder="Enter your paper id 2"
                        value={values.paperId2}
                        onChange={(e: any) =>
                          setFieldValue('paperId2', e.target.value)
                        }
                        errors={
                          getIn(errors, 'paperId2') !== undefined
                            ? getIn(errors, 'paperId2')
                            : ''
                        }
                      />
                    </>
                  ) : null}

                  <FormOptions
                    label="Category *"
                    options={catgory}
                    value={values.category}
                    onChange={(e: any) => setFieldValue('category', e)}
                    errors={
                      getIn(errors, 'category') !== undefined
                        ? getIn(errors, 'category')
                        : ''
                    }
                  />
                  {values.category !== undefined &&
                  values.category.includes('Foreign') ? (
                    <FormInput
                      label="Passport number *"
                      placeholder="Enter your passport number"
                      value={values.passport}
                      onChange={(e: any) =>
                        setFieldValue('passport', e.target.value)
                      }
                      errors={
                        getIn(errors, 'passport') !== undefined
                          ? getIn(errors, 'passport')
                          : ''
                      }
                    />
                  ) : null}

                  <PriceUpdater />

                  <h4 className={styles.breakDownLabel}>
                    Amount to be paid (including GST)
                  </h4>
                  <h5 className={styles.singlePrice}>
                    {values.citizen === 'Foreign' ? '$ ' : 'Rs '}
                    {getPedesPrice(values)}
                  </h5>
                  <h4 className={styles.priceLabel}>
                    Total amount (
                    <i>
                      {' '}
                      {values.citizen === 'Foreign' ? '3.2%' : '2.2%'}{' '}
                      convenience fee included
                    </i>
                    )
                  </h4>
                  <h5 className={styles.price}>
                    {values.citizen === 'Foreign' ? '$ ' : 'Rs '}
                    {getPedesTotalPrice(values, getPedesPrice(values))}
                  </h5>
                  <br />
                  {/* {JSON.stringify(errors, null, 2)} */}
                  <button
                    className={styles.button}
                    type="submit"
                    onClick={() => handleSubmit()}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </Formik>

            <footer className={styles.footer}>
              <p>
                This content is created by the owner of the form. The data you
                submit will be sent to the form owner. IEEE Kerala Section is
                not responsible for the privacy or security practices of its
                customers, including those of this form owner. Never give out
                your password.
              </p>
              <br />
              Powered by IKS Mint Forms |{' '}
              <a style={{ color: 'blue' }} href="https://ieee-mint.org/privacy">
                Privacy and cookies
              </a>{' '}
              |{' '}
              <a style={{ color: 'blue' }} href="https://ieee-mint.org/terms">
                Terms of use
              </a>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
