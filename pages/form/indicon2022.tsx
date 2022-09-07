import type { NextPage } from 'next';
import styles from '../../styles/Form.module.css';
import FormInput from '../../UI-Components/FormInput';
import { Formik, useFormikContext, getIn, FormikProps } from 'formik';
import axios from 'axios';
import FormOptions from '../../UI-Components/FormOptions';
import { useEffect, useState } from 'react';
import loadScript from '../../utils/razorpayScript';
import { useRouter } from 'next/router';
import Error from '../../UI-Components/error';
import Loader from '../../UI-Components/loader';
import getIndiconPrice from '../../utils/getIndiconPrice';
import getPaperPrice from '../../utils/getPaperPrice';
import buildForm from '../../utils/buildForm';
import Head from 'next/head';
import displayPaytm from '../../utils/displayPaytm';
import PhoneSelector from '../../UI-Components/PhoneSelector';
import * as yup from 'yup';

const Form: NextPage = () => {
  const router = useRouter();
  const [authorPrice, setAuthorPrice] = useState(9000);
  const [addPapers, setAddPapers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  // const [initialVal, setIntialVal] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   ieeeMember: '',
  //   institute: '',
  //   designation: '',
  //   category: '',
  //   paperId: '',
  //   papers: '1',
  //   membershipId: '',
  // });
  const [initialVal, setIntialVal] = useState({
    name: 'Abhijith',
    email: 'a@gmail.com',
    phone: '+917025263554',
    ieeeMember: 'No',
    institute: 'CEK',
    designation: 'CEK',
    category: '',
    paperId: 'ASDFASDFA',
    papers: '1',
  });

  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
    ieeeMember: yup.string().required(),
    institute: yup.string().required(),
    designation: yup.string().required(),
    category: yup.string().required(),
    paperId: yup.string().required(),
    papers: yup.string().required(),
    membershipId: yup.string(),
  });

  const PriceUpdater: Function = () => {
    const { values } = useFormikContext<any>();

    useEffect(() => {
      setAuthorPrice(getIndiconPrice(values));
      setAddPapers(getPaperPrice(values));
    }, [values]);
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
        amount: authorPrice + addPapers,
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
          <img className={styles.formBanner} src="/indicon.png" />
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
                    onChange={(e: any) =>
                      setFieldValue('phone', e)
                    }
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
                  <FormInput
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
                  />
                  <FormInput
                    label="Paper ID *"
                    placeholder="Enter your paper id "
                    value={values.paperId}
                    onChange={(e: any) =>
                      setFieldValue('paperId', e.target.value)
                    }
                    errors={
                      getIn(errors, 'paperId') !== undefined
                        ? getIn(errors, 'paperId')
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
                  <FormOptions
                    label="Category *"
                    options={[
                      'Indian Author (Academia)',
                      'Indian Author (Industry)',
                      'Indian Student Author',
                      'Indian Non-Author Attendee',
                      'Indian Test Category',
                      'Foreign Author',
                      'Foreign Student Author',
                      'Foreign Test Category',
                    ]}
                    value={values.category}
                    onChange={(e: any) => setFieldValue('category', e)}
                    errors={
                      getIn(errors, 'category') !== undefined
                        ? getIn(errors, 'category')
                        : ''
                    }
                  />

                  <PriceUpdater />
                  <h4 className={styles.priceLabel}>Amount to be paid</h4>
                  <h5 className={styles.price}>
                    {values.category.includes('Foreign') ? '$ ' : 'Rs '}
                    {authorPrice + addPapers}
                  </h5>
                  <br />
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
      )}
    </div>
  );
};

export default Form;
