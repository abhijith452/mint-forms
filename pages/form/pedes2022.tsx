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
import {
  getPedesPrice,
  getExtraPagesPrice2,
  getPedesTotalPrice,
  getFee,
} from '../../utils/getPedesPrice';
import * as yup from 'yup';
import getTotalPrice from '../../utils/getTotalPrice';

const Form: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [pages, setPages] = useState(0);
  const [initialVal, setIntialVal] = useState({
    name: '',
    email: '',
    phone: '',
    ieeeMember: '',
    membershipId: '',
    validIEEE: '',
    citizen: '',
    address: '',
    country: '',
    state: '',
    pincode: '',
    institute: '',
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
  //   citizen: 'Indian',
  //   category: 'Non-Author Attendee',
  //   paperId1: 'asdas',
  //   extraPage1: 'Not applicable',
  //   paperId2: '',
  //   extraPage2: '',
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
    country: yup.string().required(),
    state: yup.string().required(),
    pincode: yup.string().required(),
    institute: yup.string().required(),
    category: yup.string().required(),
    paperId1: yup.string().when('papers', {
      is: (papers: any) => Number(papers) > 0,
      then: yup.string().required(),
    }),
    extraPage1: yup.string().when('papers', {
      is: (papers: any) => Number(papers) > 0,
      then: yup.string().required('Required'),
    }),
    paperId2: yup.string().when('papers', {
      is: (papers: any) => Number(papers) >= 2,
      then: yup.string().required(),
    }),
    extraPage2: yup.string().when('papers', {
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
        if (values.papers === 'Not applicable') {
          setFieldValue('paperId1', '');
          setFieldValue('paperId2', '');
          setFieldValue('extraPage1', '');
          setFieldValue('extraPage2', '');
        }
        if (Number(values.papers) === 1) {
          setFieldValue('paperId2', '');
          setFieldValue('extraPage2', '');
        }
        setPages(getExtraPagesPrice2(values));
      } else {
        didMount.current = true;
      }
    }, [
      values.papers,
      values.ieeeMember,
      values.category,
      values.extraPage1,
      values.extraPage2,
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
        fee: (
          getPedesTotalPrice(getPedesPrice(values) + pages, values) -
          (getPedesPrice(values) + pages) * 1.18
        ).toFixed(2),
        ownerAmt: ((getPedesPrice(values) + pages) * 1.18).toFixed(2),
        amount: getPedesTotalPrice(getPedesPrice(values) + pages, values),
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
    'Non-Author Attendee',
    'Author (Academia/Industry)',
    'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus',
  ];
  const catgory2 = ['Non-Author Attendee', 'Author (Academia/Industry)'];
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
