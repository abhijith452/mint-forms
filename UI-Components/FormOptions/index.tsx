import type { NextPage } from 'next';
import FormRadioButton from '../RadioButton';
import styles from './styles.module.css';
interface props {
  label: string;
  onChange: Function;
  errors: string | boolean;
  options: Array<string>;
  value: string;
}

const FormOptions: NextPage<props> = ({
  label,
  options,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      {options.map((item: string, key: number) => (
        <FormRadioButton
          checked={value === item ? true : false}
          key={key}
          label={item}
          onClick={(e: any) => onChange(e)}
        />
      ))}
      <p className={styles.errorMsg}>{errors}</p>
    </div>
  );
};

export default FormOptions;
