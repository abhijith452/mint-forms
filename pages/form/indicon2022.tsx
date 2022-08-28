import type { NextPage } from 'next';
import styles from '../../styles/Form.module.css';
import FormInput from '../../UI-Components/FormInput';
import {
  Formik,
  useFormikContext,
  getIn,
  FormikProps,
  FieldArray,
} from 'formik';
import FormOptions from '../../UI-Components/FormOptions';
import { useEffect, useState } from 'react';

const Form: NextPage = () => {
  const [authorPrice, setAuthorPrice] = useState(9000);
  const [coAuthorPrice, setCoAuthorPrice] = useState(0);

  var initialVal = {
    name: '',
    email: '',
    phone: '',
    ieeeMember: 'No',
    institute: '',
    designation: '',
    category: '',
    papers: '',
    coauthors: [
      {
        name: '',
        email: '',
        phone: '',
        ieeeMember: 'No',
        institute: '',
        designation: '',
      },
    ],
  };

  const PriceUpdater: Function = () => {
    const { values } = useFormikContext<any>();

    var pricingEarlyBird = {
      indianAuthorAcadamic: [9000, 10500],
      indianAuthorIndustry: [10000, 11500],
      indianAuthorStudent: [7500, 8500],
      foreignAuthor: [250, 300],
      foreignStudentAuthor: [200, 250],
    };
    var pricingStandard = {
      indianAuthorAcadamic: [10000, 11500],
      indianAuthorIndustry: [11000, 12500],
      indianAuthorStudent: [8500, 9500],
      foreignAuthor: [300, 350],
      foreignStudentAuthor: [250, 300],
    };

    useEffect(() => {
      var pricingData =
        new Date().toISOString() > '2022-10-15T18:29:59.059Z'
          ? pricingStandard
          : pricingEarlyBird;

      if (
        values.category === 'Indian Author (Academia)' &&
        values.ieeeMember === 'Yes'
      ) {
        setAuthorPrice(pricingData.indianAuthorAcadamic[0]);
      }
      if (
        values.category === 'Indian Author (Academia)' &&
        values.ieeeMember === 'No'
      ) {
        setAuthorPrice(pricingData.indianAuthorAcadamic[1]);
      }

      if (
        values.category === 'Indian Author (Industry)' &&
        values.ieeeMember === 'Yes'
      ) {
        setAuthorPrice(pricingData.indianAuthorIndustry[0]);
      }
      if (
        values.category === 'Indian Author (Industry)' &&
        values.ieeeMember === 'No'
      ) {
        setAuthorPrice(pricingData.indianAuthorIndustry[1]);
      }

      if (
        values.category === 'Indian Student Author' &&
        values.ieeeMember === 'Yes'
      ) {
        setAuthorPrice(pricingData.indianAuthorStudent[0]);
      }
      if (
        values.category === 'Indian Student Author' &&
        values.ieeeMember === 'No'
      ) {
        setAuthorPrice(pricingData.indianAuthorStudent[1]);
      }

      if (values.category === 'Foreign Author' && values.ieeeMember === 'Yes') {
        setAuthorPrice(pricingData.foreignAuthor[0]);
      }
      if (values.category === 'Foreign Author' && values.ieeeMember === 'No') {
        setAuthorPrice(pricingData.foreignAuthor[1]);
      }

      if (
        values.category === 'Foreign Student Author' &&
        values.ieeeMember === 'Yes'
      ) {
        setAuthorPrice(pricingData.foreignStudentAuthor[0]);
      }
      if (
        values.category === 'Foreign Student Author' &&
        values.ieeeMember === 'No'
      ) {
        setAuthorPrice(pricingData.foreignStudentAuthor[1]);
      }
      var coPrice = 0;
      values.coauthors.forEach((element: any) => {
        console.log("Hi work")
        if (values.category.includes('Indian')) {
         
          if (element.ieeeMember === 'Yes') {
            coPrice += 6000;
          } else if (element.ieeeMember === 'No') {
            coPrice += 7000;
          }
        }

        if (values.category.includes('Foreign')) {
          if (element.ieeeMember === 'Yes') {
            coPrice += 6000;
          } else if (element.ieeeMember === 'No') {
            coPrice += 7000;
          }
        }
      });
      setCoAuthorPrice(coPrice);
    }, [values]);
  };

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <img className={styles.formBanner} src="/indicon.png" />
        <div className={styles.formDetails}>
          <p className={styles.subTitle}>REGISTRATION FORM</p>
          <h1 className={styles.formTitle}>INDICON 2022</h1>
          <p className={styles.formDescription}>
            To ride a vehicle I worked on back home in New Zealand has always
            been a dream, to share it with so many like minded people at Ducati
            Owners Club NZ is even better. Credit to Aaron Staples for the great
            shots.
          </p>
        </div>
        <div className={styles.formContent}>
          <Formik
            initialValues={initialVal}
            onSubmit={() => console.log('gener')}
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
                      ? getIn(errors, 'name') !== undefined
                      : ''
                  }
                />
                <FormInput
                  label="Email *"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={(e: any) => setFieldValue('email', e.target.value)}
                  errors={
                    getIn(errors, 'email') !== undefined
                      ? getIn(errors, 'email') !== undefined
                      : ''
                  }
                />
                <FormInput
                  label="Phone *"
                  placeholder="Enter your phone number"
                  value={values.phone}
                  onChange={(e: any) => setFieldValue('phone', e.target.value)}
                  errors={
                    getIn(errors, 'phone') !== undefined
                      ? getIn(errors, 'phone') !== undefined
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
                      ? getIn(errors, 'institute') !== undefined
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
                      ? getIn(errors, 'designation') !== undefined
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
                      ? getIn(errors, 'ieeeMember') !== undefined
                      : ''
                  }
                />
                <FormOptions
                  label="Category *"
                  options={[
                    'Indian Author (Academia)',
                    'Indian Author (Industry)',
                    'Indian Student Author',
                    'Foreign Author',
                    'Foreign Student Author',
                  ]}
                  value={values.category}
                  onChange={(e: any) => setFieldValue('category', e)}
                  errors={
                    getIn(errors, 'category') !== undefined
                      ? getIn(errors, 'category') !== undefined
                      : ''
                  }
                />

                <FieldArray name="coauthors">
                  {({ push, remove }) => (
                    <>
                      {values.coauthors.map((item: any, key: number) => (
                        <div key={key}>
                          <FormInput
                            label={'Name of coauthor*'}
                            placeholder="Enter the name of coauthor"
                            value={values.coauthors[key].name}
                            onChange={(e: any) =>
                              setFieldValue(
                                `coauthors.${key}.name`,
                                e.target.value
                              )
                            }
                            errors={
                              getIn(errors, `coauthors.${key}.name`) !==
                              undefined
                                ? getIn(errors, `coauthors.${key}.name`) !==
                                  undefined
                                : ''
                            }
                          />
                          <FormInput
                            label={'Email of coauthor*'}
                            placeholder="Enter the email of coauthor"
                            value={values.coauthors[key].email}
                            onChange={(e: any) =>
                              setFieldValue(
                                `coauthors.${key}.email`,
                                e.target.value
                              )
                            }
                            errors={
                              getIn(errors, `coauthors.${key}.email`) !==
                              undefined
                                ? getIn(errors, `coauthors.${key}.email`) !==
                                  undefined
                                : ''
                            }
                          />
                          <FormInput
                            label={'Phone number of coauthor*'}
                            placeholder="Enter the Phone number of coauthor"
                            value={values.coauthors[key].phone}
                            onChange={(e: any) =>
                              setFieldValue(
                                `coauthors.${key}.phone`,
                                e.target.value
                              )
                            }
                            errors={
                              getIn(errors, `coauthors.${key}.phone`) !==
                              undefined
                                ? getIn(errors, `coauthors.${key}.phone`) !==
                                  undefined
                                : ''
                            }
                          />
                          <FormInput
                            label={'Institute of coauthor*'}
                            placeholder="Enter the institute of coauthor"
                            value={values.coauthors[key].institute}
                            onChange={(e: any) =>
                              setFieldValue(
                                `coauthors.${key}.institute`,
                                e.target.value
                              )
                            }
                            errors={
                              getIn(errors, `coauthors.${key}.institute`) !==
                              undefined
                                ? getIn(
                                    errors,
                                    `coauthors.${key}.institute`
                                  ) !== undefined
                                : ''
                            }
                          />
                          <FormInput
                            label={'Designation of coauthor*'}
                            placeholder="Enter your name of coauthor"
                            value={values.coauthors[key].designation}
                            onChange={(e: any) =>
                              setFieldValue(
                                `coauthors.${key}.designation`,
                                e.target.value
                              )
                            }
                            errors={
                              getIn(errors, `coauthors.${key}.designation`) !==
                              undefined
                                ? getIn(
                                    errors,
                                    `coauthors.${key}.designation`
                                  ) !== undefined
                                : ''
                            }
                          />
                          <button
                            className={styles.button2}
                            onClick={() => remove(key)}
                          >
                            - Remove
                          </button>
                        </div>
                      ))}
                      <button
                        className={styles.button2}
                        onClick={() =>
                          push({
                            name: '',
                            email: '',
                            phone: '',
                            institute: '',
                            ieeeMember: 'No',
                            designation: '',
                          })
                        }
                      >
                        + Add coauthor
                      </button>
                    </>
                  )}
                </FieldArray>
                <PriceUpdater />
                <h4 className={styles.priceLabel}>Amount to be paid</h4>
                <h5 className={styles.price}>
                  {values.category === 'Foreign Author' ||
                  values.category === 'Foreign Student Author'
                    ? '$ '
                    : 'Rs '}
                  {authorPrice+coAuthorPrice}
                </h5>
                <br />
                {JSON.stringify(values, null, 2)}
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
              submit will be sent to the form owner. IEEE Kerala Section is not
              responsible for the privacy or security practices of its
              customers, including those of this form owner. Never give out your
              password.
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
    </div>
  );
};

export default Form;
