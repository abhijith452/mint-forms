import { getIn } from 'formik';
import type { NextPage } from 'next';
import styles from './styles.module.css';

interface props {
  label: string;
  placeholder: string;
  value: string;
  onChange: Function;
  name: string;
  errors: string;
}

const FormInput: NextPage<props> = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  errors,
}) => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <input
        placeholder={placeholder}
        value={value}
        style={{
          boxShadow:
            getIn(errors, name) !== undefined
              ? '0 12px 20px 0 rgba(255, 45, 45, 0.301),inset 0 -1px 8px 0 #ff5f5f6e'
              : '0 12px 20px 0 rgba(136,174,222,0.42),inset 0 -1px 8px 0 #B9D1F1',
          outlineColor: getIn(errors, name) !== undefined ? 'red' : '#1479ff',
        }}
        onChange={()=>onChange()}
        className={styles.input}
      />
      <p className={styles.errorMsg}>{errors}</p>
    </div>
  );
};

export default FormInput;