import type { NextPage } from 'next';
import axios from 'axios';
import styles from './styles.module.css';
import { useState } from 'react';
interface props {
  label: string;
  placeholder: string;
  value: string;
  onChange: Function;
  onChangeValid: Function;
  errors: string | boolean;
  vaildError: string | boolean;
}

const FormIEEE: NextPage<props> = ({
  label,
  placeholder,
  value,
  onChange,
  onChangeValid,
  errors,
  vaildError,
}) => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [SocietyList,setSocietyList] = useState(false);
  const [err, setErr] = useState('');
  const handleValidId = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/getMemberStatus?id=${value}`);
      if (
        res.data.MemberStatus !== undefined &&
        res.data.MemberStatus === 'Active'
      ) {
        setVerified(true);
        setSocietyList(res.data.SocietyList)
        onChangeValid('true',res.data.SocietyList);
        setErr('');
      }
      if (
        res.data.MemberStatus === 'Inactive' ||
        res.data.MemberStatus === 'Not Applicable'
      ) {
        setVerified(false);
        setErr(`membership status : ${res.data.MemberStatus}`);
      }
      if (res.data.reasons !== undefined) {
        setVerified(false);
        setErr(res.data.reasons[0].message);
      }
      setLoading(false);
      console.log(res);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <div className={styles.container}>
        <input
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
        <button
          style={{
            backgroundColor: verified
              ? 'rgb(0, 231, 0)'
              : 'var(--blue-secondary)',
          }}
          onClick={() => {
            if (!loading) {
              handleValidId();
            }
          }}
          className={styles.button}
        >
          {loading ? (
            <div className={styles.loader}></div>
          ) : verified ? (
            'Verified'
          ) : (
            'Verify'
          )}
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

export default FormIEEE;
