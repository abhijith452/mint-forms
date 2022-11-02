import type { NextPage } from 'next';
import axios from 'axios';
import styles from './styles.module.css';
import { useState } from 'react';
interface props {
  label: string;
  placeholder: string;
  value: string;
  onChange: Function;
  codes: Array<string>;
  errors: string | boolean;
  vaildError: string | boolean;
}

const FormPromoCode: NextPage<props> = ({
  label,
  placeholder,
  value,
  onChange,
  codes,
  errors,
  vaildError,
}) => {
  const [verified, setVerified] = useState(false);
  const [state, setState] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [err, setErr] = useState('');

  const handleValidId = () => {
    if (codes.some((item) => item === state)) {
      setVerified(true);
      setErr('');
      setDisabled(true);
      onChange(state)
    } else {
      setErr('Invalid promocode');
    }
  };
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <div className={styles.container}>
        <input
          placeholder={placeholder}
          value={state}
          disabled={disabled}
          style={{
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            outlineColor: errors !== '' ? 'red' : '#1479ff',
          }}
          onChange={(e) => setState(e.target.value)}
          className={styles.input}
        />
        <button
          style={{
            backgroundColor: verified
              ? 'rgb(0, 231, 0)'
              : 'var(--blue-secondary)',
          }}
          onClick={() => {
            if (!disabled) {
              handleValidId();
            }
          }}
          className={styles.button}
        >
          {verified ? 'Verified' : 'Verify'}
        </button>
      </div>

      <p className={styles.errorMsg}>
        {errors} <br />{' '}
        {err ? (
          <>
            {String(err)}
            <br />
          </>
        ) : null}
        {vaildError}
      </p>
    </div>
  );
};

export default FormPromoCode;
