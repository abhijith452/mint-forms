import type { NextPage } from 'next';
import Head from 'next/head';
import ToggleButton from '../UI-Components/toggleButton';
import FormInput from '../UI-Components/FormInput';
import styles from '../styles/Create.module.css';
import FormsAdminLayout from '../layout/FormsAdminLayout';
import Select from 'react-select';

const Create: NextPage = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <FormsAdminLayout>
      <div className={styles.container}>
        <input className={styles.title} defaultValue={'Untitled Form'} />
        <div>
          <div className={styles.inputField}>
            <div className={styles.inputField_con}>
              <input
                className={styles.inputField_ques}
                defaultValue="Question"
              />
              <Select options={options} />
            </div>
            <FormInput
              label=""
              placeholder="Enter your answers"
              onChange={() => console.log()}
              value="HI"
              name="DFDSFSD"
              errors="DASFA"
            />
            <div className={styles.inputField_con}>
              <ToggleButton
                state={true}
                onChange={() => console.log()}
                label="Required"
              />
              <ToggleButton
                state={true}
                onChange={() => console.log()}
                label="Long answer"
              />
            </div>
          </div>
          <button>Add new</button>
        </div>
        {/* <h6 className={styles.title}>Untitled Form</h6> */}
      </div>
    </FormsAdminLayout>
  );
};

export default Create;
