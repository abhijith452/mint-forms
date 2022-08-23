import type { NextPage } from 'next';
import styles from '../../styles/Form.module.css';
import FormInput from '../../UI-Components/FormInput';
import { Formik, getIn, FormikProps } from 'formik';
import generateFormIntialValues from '../../utils/generateFormIntialValues.js';

type typeStructure = {
  componentId: string;
  type: string;
  label: string;
  required: boolean;
  validate: string;
};
interface typeFormInfo {
  title: string;
  description: string;
  subTitle: string;
  banner: string;
  structure: Array<typeStructure[]>;
}

const Form: NextPage = () => {
  const formInfo: typeFormInfo = {
    title: '',
    description: '',
    subTitle: '',
    banner: '',
    structure: [
      [
        {
          componentId: 'G363944IPGU',
          type: 'input',
          label: 'Enter your name',
          required: true,
          validate: 'string',
        },
      ],
    ],
  };

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <img className={styles.formBanner} src="/banner.jpeg" />
        <div className={styles.formDetails}>
          <p className={styles.subTitle}>REGISTRATION FORM</p>
          <h1 className={styles.formTitle}>IEEE Job Fair</h1>
          <p className={styles.formDescription}>
            To ride a vehicle I worked on back home in New Zealand has always
            been a dream, to share it with so many like minded people at Ducati
            Owners Club NZ is even better. Credit to Aaron Staples for the great
            shots.
          </p>
        </div>
        <div className={styles.formContent}>
          <Formik
            initialValues={generateFormIntialValues(formInfo.structure)}
            onSubmit={() => console.log(generateFormIntialValues(formInfo.structure))}
          >
            {({
              values,
              errors,
              handleSubmit,
              setFieldValue,
            }: FormikProps<any>) => (
              <div>
                {formInfo.structure[0].map((item, key) => (
                  <div key={key}>
                    {item.type === 'input' ? (
                      <FormInput
                        label={item.label}
                        placeholder=""
                        name={item.componentId}
                        value={values[item.componentId]}
                        onChange={(e: any) =>
                          setFieldValue(item.componentId, e.target.value)
                        }
                        errors={
                          getIn(errors, item.componentId) !== undefined
                            ? getIn(errors, item.componentId) !== undefined
                            : ''
                        }
                      />
                    ) : null}
                  </div>
                ))}
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
