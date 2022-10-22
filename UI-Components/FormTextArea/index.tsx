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

const FormTextArea: NextPage<props> = ({
  label,
  placeholder,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <textarea
        placeholder={placeholder}
        value={value}
        style={{
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
          outlineColor: errors !== '' ? 'red' : '#1479ff',
        }}
        onChange={(e) => onChange(e)}
        className={styles.input}
      />
      <p className={styles.errorMsg}>{errors}</p>
    </div>
  );
};

export default FormTextArea;
