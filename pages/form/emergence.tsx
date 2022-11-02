import type { NextPage } from 'next';
import styles from '../../styles/Form.module.css';
import FormInput from '../../UI-Components/FormInput';
import { Formik, getIn, FormikProps } from 'formik';
import axios from 'axios';
import FormOptions from '../../UI-Components/FormOptions';
import { useState } from 'react';
import Error from '../../UI-Components/error';
import Loader from '../../UI-Components/loader';
import {
  getEmergencePrice,
  getEmergenceTotalPrice,
} from '../../utils/getEmergencePrice';
import districtList from '../../utils/getDistrictList';
import buildForm from '../../utils/buildForm';
import Head from 'next/head';
import displayPaytm from '../../utils/displayPaytm';
import PhoneSelector from '../../UI-Components/PhoneSelector';
import FormSelect from '../../UI-Components/FormSelect';
import FormIEEE from '../../UI-Components/FormIEEE';
import * as yup from 'yup';

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
    gender: '',
    district: '',
    phone: '',
    institute: '',
    ieeeMember: '',
    validIEEE: '',
    workshop: '',
    iv: '',
    food: '',
    accomodation: '',
    ieee: '',
    ias: 'false',
    category: '',
    promocode: '',
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
  //   workshop: 'Project Development Workshop',
  //   iv: 'ALIND Switchgear Indsutries, Mannar',
  //   food: 'Veg',
  //   accomodation: 'Yes',
  //   ieee: '',
  //   ias: 'false',
  // });
  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    gender: yup.string().required(),
    district: yup.string().required(),
    phone: yup.string().required(),
    institute: yup.string().required(),
    ieeeMember: yup.string().required(),
    validIEEE: yup.string().when('ieeeMember', {
      is: 'Yes',
      then: yup.string().required('Verify membership ID'),
    }),
    workshop: yup.string().required(),
    iv: yup.string().required(),
    food: yup.string().required(),
    ias: yup.string(),
    ieee: yup.string(),
    accomodation: yup.string().required(),
    category: yup.string().required(),
    promocode: yup.string(),
  });
  const getCategory = (values: any) => {
    if (values.ias === 'true') {
      return new Date().toISOString() < props.earlybird
        ? ['IAS Member Rs 450']
        : ['IAS Member Rs 600'];
    } else if (values.validIEEE === 'true') {
      return new Date().toISOString() < props.earlybird
        ? ['IEEE Member Rs 550']
        : ['IEEE Member Rs 700'];
    } else {
      return new Date().toISOString() < props.earlybird
        ? ['Non-IEEE Member Rs 700']
        : ['Non-IEEE Member Rs 850'];
    }
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
        amount: getEmergenceTotalPrice(
          getEmergencePrice(values, props.earlybird)
        ),
        fee: (
          getEmergenceTotalPrice(getEmergencePrice(values, props.earlybird)) -
          getEmergencePrice(values, props.earlybird)
        ).toFixed(2),
        ownerAmt: getEmergencePrice(values, props.earlybird),
      });

      const formData = buildForm(data);

      const res = await axios.post(
        '/api/pay/paytm?formId=emergence',
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

  return (
    <div className={styles.form}>
      <Head>
        <title>EMERGENCE 2.0</title>
        {/* <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link> */}
      </Head>
      {loading ? (
        <>
          <Loader msg="Don't refresh this page. Redirecting to payment processing service ..." />
        </>
      ) : new Date().toISOString() < props.expiryDate ? (
        <div className={styles.formContainer}>
          <img className={styles.formBanner} src="/emergence.webp" />
          <div className={styles.formDetails}>
            <p className={styles.subTitle}>REGISTRATION FORM</p>
            <h1 className={styles.formTitle}>EMERGENCE 2.0</h1>
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
                    label="District *"
                    options={districtList}
                    value={{ label: values.district, value: values.district }}
                    onChange={(e: any) => setFieldValue('district', e.value)}
                    errors={
                      getIn(errors, 'district') !== undefined
                        ? getIn(errors, 'district')
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
                    label="Workshop Preference *"
                    options={['Rapid Prototyping']}
                    value={values.workshop}
                    onChange={(e: any) => setFieldValue('workshop', e)}
                    errors={
                      getIn(errors, 'workshop') !== undefined
                        ? getIn(errors, 'workshop')
                        : ''
                    }
                  />
                  <p>
                    Introduction to PVsyst (Seat filled) <br></br>
                    IOT Candle Workshop (Seat filled)
                    <br></br>
                  </p>
                  <FormOptions
                    label="IV Preference *"
                    options={[
                      'ALIND Switchgear Indsutries, Mannar',
                      'TRACO Cable Company, Thiruvalla',
                    ]}
                    value={values.iv}
                    onChange={(e: any) => setFieldValue('iv', e)}
                    errors={
                      getIn(errors, 'iv') !== undefined
                        ? getIn(errors, 'iv')
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
                  <FormIEEE
                    label="If yes, enter your membership ID"
                    placeholder="Enter your IEEE Membership ID "
                    value={values.membershipId}
                    onChange={(e: any) =>
                      setFieldValue('membershipId', e.target.value)
                    }
                    onChangeValid={(e: any, SocietyList: any) => {
                      setFieldValue('validIEEE', e);
                      setFieldValue(
                        'ias',
                        SocietyList.includes('MEMIA034') ? 'true' : 'false'
                      );
                      setFieldValue('ieee', SocietyList);
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
                  <FormInput
                    label="Promo code *"
                    placeholder="Enter promo code"
                    value={values.promocode}
                    onChange={(e: any) =>
                      setFieldValue('promocode', e.target.value)
                    }
                    errors={
                      getIn(errors, 'promocode') !== undefined
                        ? getIn(errors, 'promocode')
                        : ''
                    }
                  />
                  <h4 className={styles.breakDownLabel}>
                    Amount based on chosen catgory
                  </h4>
                  <h5 className={styles.singlePrice}>
                    {/* {values.category.includes('Foreign') ? '$ ' : 'Rs '} */}
                    {getEmergencePrice(values, props.earlybird)}
                  </h5>
                  <h4 className={styles.priceLabel}>
                    Total amount (
                    <i> {'2.2%'} convenience fee and 18% GST included</i>)
                  </h4>
                  <h5 className={styles.price}>
                    {`Rs `}
                    {getEmergenceTotalPrice(
                      getEmergencePrice(values, props.earlybird)
                    )}
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
        ? 'https://mint-forms.ieee-mint.org/api/form/formDetails?formId=emergence'
        : 'http://localhost:3000/api/form/formDetails?formId=emergence'
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
