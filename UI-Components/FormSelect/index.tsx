import type { NextPage } from 'next';
import styles from './styles.module.css';
import Select from 'react-select';

type options = {
  value: string;
  label: string;
};

interface props {
  label: string;
  onChange: Function;
  errors: string | boolean;
  options: Array<options>;
  value: options;
}

const FormOptions: NextPage<props> = ({
  label,
  options,
  value,
  onChange,
  errors,
}) => {
  const customStyles = {
    control: () => ({
      display: 'flex',
      height: '60px',
      borderRadius: '10px',
      border: '1px rgb(222, 222, 222) solid',
      padding: '10px',
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    }),
  };
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>

      <Select
       instanceId ="ssdsd"
        value={value}
        styles={customStyles}
        onChange={(e) => onChange(e)}
        options={options}
      />

      <p className={styles.errorMsg}>{errors}</p>
    </div>
  );
};

export default FormOptions;
