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
import { config } from 'dotenv';
const {
  CheckoutProvider,
  Checkout,
  injectCheckout,
} = require('paytm-blink-checkout-react');

const Form: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const [initialVal, setIntialVal] = useState({
    amount: '100',
    accountId: 'TZIemPYk892862475294',
    partnerId: 'jacob01',
    splitAmnt: '80',
  });
  const [config, setConfig] = useState({});

  let schema = yup.object().shape({
    amount: yup.string().required(),
    accountId: yup.string().required(),
    partnerId: yup.string().required(),
    splitAmnt: yup.string().required(),
  });

  const handleAxiosError = (err: any) => {
    setError(true);
    setErrorMsg(err.response !== undefined ? err.response.data.error : err);
    setLoading(false);
  };

  const handleUpload = async (values: any) => {
    setIntialVal(values);
    // setLoading(true);
    try {
      var data = values;
      data.amount = JSON.stringify({
        currency: 'INR',
        amount: values.amount,
        ownerAmt: values.splitAmnt,
      });

      const formData = buildForm(data);

      const res = await axios.post(
        '/api/pay/paytm/transfer?formId=transfer',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      // mid: process.env.Merchant_Id,
      // orderId: paytmParams.body.orderId,
      // CHECKSUMHASH: res.data.head.signature,
      // txnToken: res.data.body.txnToken,
      // TXN_AMOUNT: txnInfo.amount,
      // WEBSITE: 'WEBSTAGING',
      // displayPaytm(res.data);
      setLoading(false);
      setConfig({
        root: '',
        flow: 'DEFAULT',
        data: {
          orderId: res.data.orderId /* update order id */,
          token:  res.data.txnToken /* update token value */,
          tokenType: 'TXN_TOKEN',
          amount: res.data.TXN_AMOUNT /* update amount */,
        },
        merchant:{
          mid:res.data.mid,
          logo: "/header.png"
        },
        "handler": {
          "notifyMerchant": function(eventName:any,data:any){
          console.log("notifyMerchant handler function called");
          console.log("eventName => ",eventName);
          console.log("data => ",data);
          }
          }
      });
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
            <p className={styles.subTitle}>REGISTRATION FORM</p>
            <h1 className={styles.formTitle}>Amount Transfer</h1>
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
                    label="Amount *"
                    placeholder="Enter your total amount"
                    value={values.amount}
                    onChange={(e: any) =>
                      setFieldValue('amount', e.target.value)
                    }
                    errors={
                      getIn(errors, 'amount') !== undefined
                        ? getIn(errors, 'amount')
                        : ''
                    }
                  />

                  <FormInput
                    label="Account ID *"
                    placeholder="Enter your Account ID "
                    value={values.accountId}
                    onChange={(e: any) =>
                      setFieldValue('accountId', e.target.value)
                    }
                    errors={
                      getIn(errors, 'accountId') !== undefined
                        ? getIn(errors, 'accountId')
                        : ''
                    }
                  />
                  <FormInput
                    label="Partner ID *"
                    placeholder="Enter your Account ID "
                    value={values.partnerId}
                    onChange={(e: any) =>
                      setFieldValue('partnerId', e.target.value)
                    }
                    errors={
                      getIn(errors, 'partnerId') !== undefined
                        ? getIn(errors, 'partnerId')
                        : ''
                    }
                  />
                  <FormInput
                    label="Amount to be send to split account *"
                    placeholder="Enter your Account ID "
                    value={values.splitAmnt}
                    onChange={(e: any) =>
                      setFieldValue('splitAmnt', e.target.value)
                    }
                    errors={
                      getIn(errors, 'splitAmnt') !== undefined
                        ? getIn(errors, 'splitAmnt')
                        : ''
                    }
                  />
                  {/* <FormOptions
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
                  /> */}
                
                  <CheckoutProvider config={config}>
                      <Checkout />
                    </CheckoutProvider>
                  
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
