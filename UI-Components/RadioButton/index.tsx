import styles from './styles.module.css';
import type { NextPage } from 'next';

interface props {
  label: string;
  onClick: Function;
  checked: boolean;
}

const FormRadioButton: NextPage<props> = ({ label, onClick, checked}) => {
  return (
    <>
      <div className={styles.radioButton} onClick={()=>onClick(label)}>
        <input
          className={styles.radio}
          type="radio"
          onChange={(e:any) => onClick(e)}
          checked={checked}
        />
        <label>{label}</label>
        {/* <label onClick={()=>onClick()}>{label}</label> */}
      </div>
      {/* <p className={styles.button}>+ Add option</p> */}
    </>
  );
};

export default FormRadioButton;
