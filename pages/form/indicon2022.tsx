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
import getIndiconPrice from '../../utils/getIndiconPrice';
import { getPaperPrice, getPaperSinglePrice } from '../../utils/getPaperPrice';
import {
  getExtraPagesPrice,
  getNumOfAdditionalPages,
  getSingleAdditionalPagePrice,
} from '../../utils/getExtraPagesPrice';
import buildForm from '../../utils/buildForm';
import Head from 'next/head';
import displayPaytm from '../../utils/displayPaytm';
import PhoneSelector from '../../UI-Components/PhoneSelector';
import FormSelect from '../../UI-Components/FormSelect';
import FormIEEE from '../../UI-Components/FormIEEE';
import getCountryList from '../../utils/getCountryList';
import * as yup from 'yup';

const Form: NextPage = () => {
  const router = useRouter();
  const [authorPrice, setAuthorPrice] = useState(9000);
  const [addPapers, setAddPapers] = useState(0);
  const [pages, setPages] = useState(0);
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
    extraPage1: '',
    paperId2: '',
    extraPage2: '',
    paperId3: '',
    extraPage3: '',
    passport: '',
  });
  // const [initialVal, setIntialVal] = useState({
  //   name: 'Abhijith',
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
  //   category: '',
  //   paperId1: '',
  //   extraPage1: '',
  //   paperId2: '',
  //   extraPage2: '',
  //   paperId3: '',
  //   extraPage3: '',
  //   papers: '1',
  // });

  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
    ieeeMember: yup.string().required(),
    validIEEE: yup.string().when('ieeeMember', {
      is: 'Yes',
      then: yup.string().required(),
    }),
    address: yup.string().required(),
    gender: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    food: yup.string().required(),
    pincode: yup.string().required(),
    institute: yup.string().required(),
    designation: yup.string().required(),
    category: yup.string().required(),
    paperId1: yup.string().required(),
    extraPage1: yup.string().required('Required'),
    paperId2: yup.string().when('papers', {
      is: (papers: any) => Number(papers) >= 2,
      then: yup.string().required(),
    }),
    extraPage2: yup.string().when('papers', {
      is: (papers: any) => Number(papers) >= 2,
      then: yup.string().required(),
    }),
    paperId3: yup.string().when('papers', {
      is: (papers: any) => Number(papers) >= 3,
      then: yup.string().required(),
    }),
    extraPage3: yup.string().when('papers', {
      is: (papers: any) => Number(papers) >= 3,
      then: yup.string().required('Required'),
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
        console.log('Hallo');
        if (Number(values.papers) === 1) {
          setFieldValue('extraPage2', '');
          setFieldValue('extraPage3', '');
        }
        if (Number(values.papers) === 0) {
          setFieldValue('extraPage3', '');
        }
        setAuthorPrice(getIndiconPrice(values));
        setAddPapers(getPaperPrice(values));
        setPages(getExtraPagesPrice(values));
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

  async function displayRazorpay(data: any, values: any) {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: data.key,
      currency: data.currency,
      amount: String(data.amount),
      order_id: data.id,
      name: 'Indicon 2022',
      description: 'Thank you for registering',

      handler: async (response: any) => {
        try {
          await axios.post(
            `/api/pay/razorpay/verify?formId=indicon2022&orderId=${response.razorpay_order_id}`,
            response
          );
          router.push(`/confirmation/${response.razorpay_order_id}`);
        } catch (err: any) {
          setError(true);
          setErrorMsg(
            err.response !== undefined ? err.response.data.error : err
          );
          setLoading(false);
        }
      },
      prefill: {
        name: `${values.name}`,
        email: values.email,
        contact: `${values.phone}`,
      },
    };
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
    paymentObject.on('payment.failed', async (response: any) => {
      try {
        await axios.post(
          `/api/pay/razorpay/failed?formId=indicon2022`,
          response.error
        );
        router.push(`/confirmation/${response.error.metadata.order_id}`);
        paymentObject.close();
      } catch (err: any) {
        setError(true);
        setErrorMsg(err.response !== undefined ? err.response.data.error : err);
        setLoading(false);
      }
    });
  }

  const handleUpload = async (values: any) => {
    setIntialVal(values);
    setLoading(true);
    try {
      var data = values;
      data.membershipType = values.ieeeMember
        ? 'IEEE Member'
        : 'Non IEEE Member';
      data.amount = JSON.stringify({
        currency: values.category.includes('Foreign') ? 'USD' : 'INR',
        amount: authorPrice + addPapers + pages,
      });

      const formData = buildForm(data);

      if (values.category.includes('Foreign')) {
        const res = await axios.post(
          '/api/pay/razorpay?formId=indicon2022',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        displayRazorpay(res.data, values);
      } else {
        const res = await axios.post(
          '/api/pay/paytm?formId=indicon2022',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        var details = {
          action:
            process.env.NODE_ENV === 'production'
              ? 'https://securegw.paytm.in/order/process'
              : 'https://securegw-stage.paytm.in/order/process',
          params: res.data,
        };
        displayPaytm(details);
      }
    } catch (err: any) {
      setError(true);
      setErrorMsg(err.response !== undefined ? err.response.data.error : err);
      setLoading(false);
    }
  };

  const catgory =
    process.env.NODE_ENV === 'production'
      ? [
          'Indian Author (Academia)',
          'Indian Author (Industry)',
          'Indian Student Author',
          'Indian Non-Author Attendee',
          'Foreign Author',
          'Foreign Student Author',
        ]
      : [
          'Indian Author (Academia)',
          'Indian Author (Industry)',
          'Indian Student Author',
          'Indian Non-Author Attendee',
          'Indian Test Category',
          'Foreign Author',
          'Foreign Student Author',
          'Foreign Test Category',
        ];
  return (
    <div className={styles.form}>
      <Head>
        <title>Indicon 2022</title>
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
            <h1 className={styles.formTitle}>INDICON 2022</h1>
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
                  {/* <FormInput
                    label="Enter membership ID"
                    placeholder="Enter your IEEE Membership ID "
                    value={values.membershipId}
                    onChange={(e: any) =>
                      setFieldValue('membershipId', e.target.value)
                    }
                    errors={
                      getIn(errors, 'membershipId') !== undefined
                        ? getIn(errors, 'membershipId')
                        : ''
                    }
                  /> */}
                  <FormIEEE
                    label="Enter membership ID"
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
                    options={['1', '2', '3']}
                    value={values.papers}
                    onChange={(e: any) => setFieldValue('papers', e)}
                    errors={
                      getIn(errors, 'papers') !== undefined
                        ? getIn(errors, 'papers')
                        : ''
                    }
                  />
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
                  <FormOptions
                    label="Whether the paper 1 has exceed the 6 page limit ? if yes by how many extra pages ?*"
                    options={['Not applicable', '1', '2']}
                    value={values.extraPage1}
                    onChange={(e: any) => setFieldValue('extraPage1', e)}
                    errors={
                      getIn(errors, 'extraPage1') !== undefined
                        ? getIn(errors, 'extraPage1')
                        : ''
                    }
                  />

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
                      <FormOptions
                        label="Whether the paper 2 has exceed the 6 page limit ? if yes by how many extra pages ?*"
                        options={['Not applicable', '1', '2']}
                        value={values.extraPage2}
                        onChange={(e: any) => setFieldValue('extraPage2', e)}
                        errors={
                          getIn(errors, 'extraPage2') !== undefined
                            ? getIn(errors, 'extraPage2')
                            : ''
                        }
                      />
                    </>
                  ) : null}
                  {Number(values.papers) >= 3 ? (
                    <>
                      <FormInput
                        label="Paper ID 3*"
                        placeholder="Enter your paper id 3"
                        value={values.paperId3}
                        onChange={(e: any) =>
                          setFieldValue('paperId3', e.target.value)
                        }
                        errors={
                          getIn(errors, 'paperId3') !== undefined
                            ? getIn(errors, 'paperId3')
                            : ''
                        }
                      />
                      <FormOptions
                        label="Whether the paper 3 has exceed the 6 page limit ? if yes by how many extra pages ?*"
                        options={['Not applicable', '1', '2']}
                        value={values.extraPage3}
                        onChange={(e: any) => setFieldValue('extraPage3', e)}
                        errors={
                          getIn(errors, 'extraPage3') !== undefined
                            ? getIn(errors, 'extraPage3')
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
                    Amount based on chosen catgory
                  </h4>
                  <h5 className={styles.singlePrice}>
                    {values.category.includes('Foreign') ? '$ ' : 'Rs '}
                    {authorPrice}
                  </h5>
                  <h4 className={styles.breakDownLabel}>
                    Amount based on chosen additional papers
                  </h4>
                  <h5 className={styles.singlePrice}>
                    {`${getPaperSinglePrice(values)} * ${
                      Number(values.papers) - 1
                    } = `}
                    {values.category.includes('Foreign') ? '$ ' : 'Rs '}
                    {addPapers}
                  </h5>
                  <h4 className={styles.breakDownLabel}>
                    Amount based on additional pages for each paper
                  </h4>
                  <h5 className={styles.singlePrice}>
                    {`${getSingleAdditionalPagePrice(values)} * ${getNumOfAdditionalPages(values)} = `}
                    {values.category.includes('Foreign') ? '$ ' : 'Rs '}
                    {pages}
                  </h5>
                  <h4 className={styles.priceLabel}>Amount to be paid</h4>
                  <h5 className={styles.price}>
                    {values.category.includes('Foreign') ? '$ ' : 'Rs '}
                    {authorPrice + addPapers + pages}
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
