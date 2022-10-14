import type { NextPage } from 'next';
import styles from '../../styles/Form.module.css';
import FormInput from '../../UI-Components/FormInput';
import { Formik, getIn, FormikProps } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import Error from '../../UI-Components/error';
import Loader from '../../UI-Components/loader';
import buildForm from '../../utils/buildForm';
import Head from 'next/head';
import displayPaytm from '../../utils/displayPaytm';
import * as yup from 'yup';
import JSONPretty from 'react-json-pretty';

const Form: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [response, setResponses] = useState({});

  const [initialVal, setIntialVal] = useState({
    orderId: '',
  });

  let schema = yup.object().shape({
    orderId: yup.string().required(),
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
      const res = await axios.get(
        `/api/pay/paytm/orderStatus?&orderId=${values.orderId}`
      );
      setResponses(res.data.responseObject
        );
      setLoading(false);
      // }
    } catch (err: any) {
      handleAxiosError(err);
    }
  };

  return (
    <div className={styles.form}>
      <Head>
        <title>Amount Transfer</title>
      </Head>
      {loading ? (
        <>
          <Loader msg="Don't refresh this page. Redirecting to payment processing service ..." />
        </>
      ) : (
        <div className={styles.formContainer}>
          {/* <img className={styles.formBanner} src="/indicon2.png" /> */}
          <div className={styles.formDetails}>
            {/* <p className={styles.subTitle}>REGISTRATION FORM</p> */}
            <h1 className={styles.formTitle}>Payment Status</h1>
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
                    label="orderId *"
                    placeholder="Enter your orderId"
                    value={values.orderId}
                    onChange={(e: any) =>
                      setFieldValue('orderId', e.target.value)
                    }
                    errors={
                      getIn(errors, 'orderId') !== undefined
                        ? getIn(errors, 'orderId')
                        : ''
                    }
                  />
                <JSONPretty id="json-pretty" data={response}></JSONPretty>
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
