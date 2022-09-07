import type { NextPage } from 'next';
import styles from './styles.module.css';

interface props {
  label: string;
  placeholder: string;
  value: string;
  onChange: Function;
  errors: string | boolean;
}

const FormInput: NextPage<props> = ({
  label,
  placeholder,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <input
        placeholder={placeholder}
        value={value}
        style={{
          // boxShadow:
          //   errors !==""
          //     ? '0 12px 20px 0 rgba(255, 45, 45, 0.301),inset 0 -1px 8px 0 #ff5f5f6e'
          //     : '0 12px 20px 0 rgba(136,174,222,0.42),inset 0 -1px 8px 0 #B9D1F1',
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          outlineColor: errors !== "" ? 'red' : '#1479ff',
        }}
        onChange={(e) => onChange(e)}
        className={styles.input}
      />
      <p className={styles.errorMsg}>{errors}</p>
    </div>
  );
};

export default FormInput;
