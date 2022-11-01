import axios from 'axios';
import { Formik, FormikProps, getIn } from 'formik';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import * as yup from 'yup';
import styles from '../../styles/Form.module.css';
import Error from '../../UI-Components/error';
import FormIEEE from '../../UI-Components/FormIEEE';
import FormInput from '../../UI-Components/FormInput';
import FormOptions from '../../UI-Components/FormOptions';
import Loader from '../../UI-Components/loader';
import PhoneSelector from '../../UI-Components/PhoneSelector';
import buildForm from '../../utils/buildForm';
import displayPaytm from '../../utils/displayPaytm';
import {
  getExordiumPrice,
  getExordiumTotalPrice,
} from '../../utils/getExordiumPrice';

interface types {
  expiryDate: string;
  responses: any;
  earlybird: any;
}

const Form: NextPage<types> = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const [initialVal, setIntialVal] = useState({
    name: '',
    email: '',
    phone: '',
    institute: '',
    ieeeMember: '',
    validIEEE: '',
    food: '',
    accomodation: '',
    department: '',
    departmentOther: '',
    year: '',
  });
  // const [initialVal, setIntialVal] = useState({
  //   name: 'test',
  //   email: 'abhijithkannan452@gmail.com',
  //   gender: 'Male',
  //   district: 'India',
  //   phone: '+917025263554',
  //   institute: 'CEK',
  //   ieeeMember: 'No',
  //   validIEEE: '',
  //   yearofstudy: 'Project Development yearofstudy',
  //   iv: 'ALIND Switchgear Indsutries, Mannar',
  //   food: 'Veg',
  //   accomodation: 'Yes',
  //   ieee: '',
  //   ias: 'false',
  // });
  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    department: yup.string().required(),
    departmentOther: yup.string().when('department', {
      is: 'Others',
      then: yup.string().required('Specify department'),
    }),
    yearofstudy: yup.string().required(),
    phone: yup.string().required(),
    institute: yup.string().required(),
    ieeeMember: yup.string().required(),
    validIEEE: yup.string().when('ieeeMember', {
      is: 'Yes',
      then: yup.string().required('Verify membership ID'),
    }),
    food: yup.string().required(),
    accomodation: yup.string().required(),
  });
  const getCategory = (values: any) => {
    return values.validIEEE === 'true'
      ? ['IEEE Member Rs 649']
      : ['Non-IEEE Member Rs 799'];
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
      data.amount = JSON.stringify({
        currency: 'INR',
        amount: getExordiumTotalPrice(getExordiumPrice(values)),
        fee: (
          getExordiumTotalPrice(getExordiumPrice(values)) -
          getExordiumPrice(values)
        ).toFixed(2),
        ownerAmt: getExordiumPrice(values),
      });

      const formData = buildForm(data);

      const res = await axios.post('/api/pay/paytm?formId=exordium', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      displayPaytm(res.data);
    } catch (err: any) {
      handleAxiosError(err);
    }
  };

  return (
    <div className={styles.form}>
      <Head>
        <title>EXORDIUM 2.0</title>
        {/* <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link> */}
      </Head>
      {loading ? (
        <>
          <Loader msg="Don't refresh this page. Redirecting to payment processing service ..." />
        </>
      ) : new Date().toISOString() < props.expiryDate ? (
        <div className={styles.formContainer}>
          <img className={styles.formBanner} src="/form banners/exordium.png" />
          <div className={styles.formDetails}>
            <p className={styles.subTitle}>REGISTRATION FORM</p>
            <h1 className={styles.formTitle}>EXORDIUM 2.0</h1>
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
                  <FormOptions
                    label="Department*"
                    options={['ECE', 'EEE', 'IT', 'Mech', 'Civil', 'Others']}
                    value={values.department}
                    onChange={(e: any) => setFieldValue('department', e)}
                    errors={
                      getIn(errors, 'department') !== undefined
                        ? getIn(errors, 'department')
                        : ''
                    }
                  />
                  {values.department === 'Others' && (
                    <FormInput
                      label="Specify department *"
                      placeholder="Enter your department"
                      value={values.departmentOther}
                      onChange={(e: any) =>
                        setFieldValue('departmentOther', e.target.value)
                      }
                      errors={
                        getIn(errors, 'departmentOther') !== undefined
                          ? getIn(errors, 'departmentOther')
                          : ''
                      }
                    />
                  )}

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

                  <FormOptions
                    label="Year of Study *"
                    options={[
                      '1',
                      '2',
                      '3',
                      '4',

                      // 'IOT Candle yearofstudy (Seat filled)',
                    ]}
                    value={values.yearofstudy}
                    onChange={(e: any) => setFieldValue('yearofstudy', e)}
                    errors={
                      getIn(errors, 'yearofstudy') !== undefined
                        ? getIn(errors, 'yearofstudy')
                        : ''
                    }
                  />

                  <FormOptions
                    label="Do you want accomodation ? *"
                    options={['Yes', 'No']}
                    value={values.accomodation}
                    onChange={(e: any) => setFieldValue('accomodation', e)}
                    errors={
                      getIn(errors, 'accomodation') !== undefined
                        ? getIn(errors, 'accomodation')
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

                  {values.ieeeMember === 'Yes' ? (
                    <FormIEEE
                      label="If yes, enter your membership ID"
                      placeholder="Enter your IEEE Membership ID "
                      value={values.membershipId}
                      onChange={(e: any) =>
                        setFieldValue('membershipId', e.target.value)
                      }
                      onChangeValid={(e: any) => {
                        setFieldValue('validIEEE', e);
                      }}
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
                  ) : null}

                  <FormOptions
                    label="Category *"
                    options={getCategory(values)}
                    value={values.category}
                    onChange={(e: any) => setFieldValue('category', e)}
                    errors={
                      getIn(errors, 'category') !== undefined
                        ? getIn(errors, 'category')
                        : ''
                    }
                  />
                  <h4 className={styles.breakDownLabel}>
                    Amount based on chosen catgory
                  </h4>
                  <h5 className={styles.singlePrice}>
                    {/* {values.category.includes('Foreign') ? '$ ' : 'Rs '} */}
                    {getExordiumPrice(values)}
                  </h5>
                  <h4 className={styles.priceLabel}>
                    Total amount (
                    <i> {'2.2%'} convenience fee and 18% GST included</i>)
                  </h4>
                  <h5 className={styles.price}>
                    {`Rs `}
                    {getExordiumTotalPrice(getExordiumPrice(values))}
                    {/* {getPedesTotalPrice(values, getPedesPrice(values))} */}
                  </h5>
                  <br />
                  {/* {JSON.stringify(values, null, 2)}
                  {JSON.stringify(errors, null, 2)} */}
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
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '250px', marginBottom: '20px' }}
            src="/closed.jpg"
          />
          <p style={{ fontSize: '20px' }}>
            Thank you for your interest. Apparently, the registrations are
            closed for now.
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;

export async function getServerSideProps() {
  try {
    const price = await axios.get(
      process.env.NODE_ENV !== 'development'
        ? 'https://mint-forms.ieee-mint.org/api/form/formDetails?formId=exordium'
        : 'http://localhost:3000/api/form/formDetails?formId=exordium'
    );

    return {
      props: price.data,
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        pricing: {},
      },
    };
  }
}
