import React from 'react';
import { useState } from 'react';
import styles from './styles.module.css';
import type { NextPage } from 'next';

interface props {
  onChange: Function;
  state: boolean;
  label: string;
}

const ToggleButton: NextPage<props> = ({ onChange, state, label }) => {
  const [toggle, setToggle] = useState(state);

  return (
    <div className={styles.togglebutton}>
      <p className={styles.p}>{label}</p>
      <div
        className={styles.togglebutton_outer}
        onClick={() => {
          setToggle(!toggle);
          onChange();
        }}
      >
        <div
          className={
            toggle
              ? styles.togglebutton_inner_active
              : styles.togglebutton_inner
          }
        ></div>
      </div>
    </div>
  );
};
export default ToggleButton;
