import type { NextPage } from 'next';
import styles from '../../styles/Form.module.css';
import FormInput from '../../UI-Components/FormInput';
import FormTextArea from '../../UI-Components/FormTextArea';
import { Formik, getIn, FormikProps } from 'formik';
import axios from 'axios';
import FormOptions from '../../UI-Components/FormOptions';
import { useState } from 'react';
import Error from '../../UI-Components/error';
import Loader from '../../UI-Components/loader';
import buildForm from '../../utils/buildForm';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PhoneSelector from '../../UI-Components/PhoneSelector';
import FormSelect from '../../UI-Components/FormSelect';
import FormIEEE from '../../UI-Components/FormIEEE';
import getStateList from '../../utils/getStateList';
import * as yup from 'yup';

interface types {
  expiryDate: string;
}

const Form: NextPage<types> = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [initialVal, setIntialVal] = useState({
    email: '',
    section: '',
    college: '',
    events: '',
    platform: '',
    other: '',
    budget: '',
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
  //   paperId1: 'asdas',
  //   extraPage1: 'Not applicable',
  //   paperId2: '',
  //   extraPage2: '',
  //   papers: '1',
  //   specialSession: 'SS08'
  // });

  let schema = yup.object().shape({
    email: yup.string().required().email(),
    section: yup.string().required(),
    college: yup.string().required(),
    events: yup.string().required(),
    platform: yup.string().required(),
    other: yup.string().when('platform', {
      is: 'Other',
      then: yup.string().required(),
    }),
    budget: yup.string().required(),
  });

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

      const formData = buildForm(data);
      const res = await axios.post(
        '/api/form/addresponse?formId=casestudy',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      router.push(`/confirmation/${res.data.orderId}`);
    } catch (err: any) {
      handleAxiosError(err);
    }
  };

  return (
    <div className={styles.form}>
      <Head>
        <title>Case Study</title>
      </Head>
      {loading ? (
        <>
          <Loader msg="Don't refresh this page. Redirecting to payment processing service ..." />
        </>
      ) : new Date().toISOString() < props.expiryDate ? (
        <div className={styles.formContainer}>
          {/* <img className={styles.formBanner} src="/upskill.jpg" /> */}
          <div className={styles.formDetails}>
            <p className={styles.subTitle}></p>
            <h1 className={styles.formTitle}>Case Study</h1>
            <p className={styles.formDescription}>
              Please fill out this form by honestly answering to each of the
              questions below. No information gathered through this form will be
              disclosed to third parties.
            </p>
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
                  <FormInput
                    label="Which section does your college belong to ?*"
                    placeholder=""
                    value={values.section}
                    onChange={(e: any) =>
                      setFieldValue('section', e.target.value)
                    }
                    errors={
                      getIn(errors, 'section') !== undefined
                        ? getIn(errors, 'section')
                        : ''
                    }
                  />
                  <FormInput
                    label="Name of your college *"
                    placeholder=""
                    value={values.college}
                    onChange={(e: any) =>
                      setFieldValue('college', e.target.value)
                    }
                    errors={
                      getIn(errors, 'college') !== undefined
                        ? getIn(errors, 'college')
                        : ''
                    }
                  />
                  <FormInput
                    label="Number of IEEE events conducted by your college per month *"
                    placeholder=""
                    value={values.events}
                    onChange={(e: any) =>
                      setFieldValue('events', e.target.value)
                    }
                    errors={
                      getIn(errors, 'events') !== undefined
                        ? getIn(errors, 'events')
                        : ''
                    }
                  />
                  <FormOptions
                    label="Platform used for the registration of an event *"
                    options={['Google forms', 'YepDesk', 'Other']}
                    value={values.platform}
                    onChange={(e: any) => setFieldValue('platform', e)}
                    errors={
                      getIn(errors, 'platform') !== undefined
                        ? getIn(errors, 'platform')
                        : ''
                    }
                  />
                  {values.platform === 'Other' ? (
                    <FormInput
                      label="Specify the platform *"
                      placeholder=""
                      value={values.other}
                      onChange={(e: any) =>
                        setFieldValue('other', e.target.value)
                      }
                      errors={
                        getIn(errors, 'other') !== undefined
                          ? getIn(errors, 'other')
                          : ''
                      }
                    />
                  ) : null}
                  <FormInput
                    label="How is event budgetary allocation handled? *"
                    placeholder=""
                    value={values.budget}
                    onChange={(e: any) =>
                      setFieldValue('budget', e.target.value)
                    }
                    errors={
                      getIn(errors, 'budget') !== undefined
                        ? getIn(errors, 'budget')
                        : ''
                    }
                  />
                  {/* {JSON.stringify(values, null, 2)} */}
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
        ? 'https://mint-forms.ieee-mint.org/api/form/formDetails?formId=casestudy'
        : 'http://localhost:3000/api/form/formDetails?formId=casestudy'
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
