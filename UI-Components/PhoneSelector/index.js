import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './Styles.module.css';

export default function PhoneSelector({
  onChange,
  value,
  placeholder,
  errors,
  label,
}) {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <div
        className={styles.input}
        style={{
          outlineColor: errors !== '' ? 'red' : '#1479ff',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        }}
      >
        <PhoneInput
          defaultCountry="IN"
          style={{ border: 'none', width: '100%' }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <p className={styles.errorMsg}>{errors}</p>
    </div>
  );
}
