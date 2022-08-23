import type { NextPage } from 'next';
import ToggleButton from '../UI-Components/toggleButton';
import FormInput from '../UI-Components/FormInput';
import styles from '../styles/Create.module.css';
import FormsAdminLayout from '../layout/FormsAdminLayout';
import FormRadioButton from '../UI-Components/RadioButton';
import FormTextArea from '../UI-Components/FormTextArea';
import Select from 'react-select';
import { useState } from 'react';

interface dataType{
  type: string;
}

interface FormItemProps {
  data: dataType;
  index: number;
  array: Array<MyType>;
  setData:Function
}
type MyType = {
  type: string;
};
type MyGroupType = {
  [key: string]: MyType;
};
interface CreateTypes {
  [key: string]: Array<MyGroupType>;
}

const FormItem: React.FunctionComponent<FormItemProps> = ({
  data,
  array,
  index,
  setData
}) => {
  const [type, setType] = useState('shortAnswer');
  // console.log(data)

  function deleteItem() {
    const ind= array.indexOf(data);
  
    if (ind > -1) {
      setData([array.splice(ind, 1)]); 
    }
  }

  const options = [
    { label: 'Checkbox', value: 'choice' },
    { label: 'Long answer', value: 'longAnswer' },
    { label: 'Short answer', value: 'shortAnswer' },
  ];

  return (
    <div className={styles.inputField}>
      <div className={styles.inputField_con}>
        <input className={styles.inputField_ques} defaultValue="Question" />
        <Select
          options={options}
          defaultValue={{ label: 'Short answer', value: 'shortAnswer' }}
          onChange={(e) => {
            setType(e!.value);
          }}
        />
      </div>
      {}
      {type === 'shortAnswer' ? (
        <FormInput
          label=""
          placeholder="Enter your answers"
          onChange={() => setType('shortAnswer')}
          value="HI"
          name="DFDSFSD"
          errors="DASFA"
        />
      ) : null}
      {type === 'longAnswer' ? (
        <FormTextArea
          label=""
          placeholder="Enter your answers"
          onChange={() => setType('longAnswer')}
          value="HI"
          name="DFDSFSD"
          errors="DASFA"
        />
      ) : null}
      {type === 'choice' ? (
        <FormRadioButton
          label="Question"
          checked={true}
          onClick={() => setType('longAnswer')}
        />
      ) : null}
      <div className={styles.inputField_con}>
        <ToggleButton
          state={false}
          onChange={() => console.log()}
          label="Required"
        />
        <ToggleButton
          state={true}
          onChange={() => console.log()}
          label="Long answer"
        />
        <div onClick={()=>deleteItem()}>Remove</div>
      </div>
    </div>
  );
};

const Create: NextPage<CreateTypes> = () => {
  const [data, setData] = useState([[{ type: 'checkbox' }]]);

  return (
    <FormsAdminLayout>
      <div className={styles.container}>
        <input className={styles.title} defaultValue={'Untitled Form'} />
        {data[0].map((item, key) => (
          <FormItem key={key} data={item} setData={setData} array={data[0]} index={key} />
        ))}
        <div>
          <button
            onClick={() => {
              let a = data;
              a[0].push({ type: 'shortAnswer' });
              console.log(a);
              setData([a[0]]);
            }}
          >
            Add new
          </button>
        </div>
        {/* <h6 className={styles.title}>Untitled Form</h6> */}
      </div>
    </FormsAdminLayout>
  );
};

export default Create;
