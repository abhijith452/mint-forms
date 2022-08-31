
import styles from './Styles.module.css'

export default function Modal({ title, setModal, handleSubmit, loading, handleChange, disabled }) {

  return (
    <div className={styles.modal}>
      <div className={styles.modal_overlay} onClick={() => setModal(false)}>

      </div>
      <div className={styles.modal_con}>
        <h4>{title} ?</h4>
        <div className={styles.modal_con_buttons}>
          <button
            className={disabled ? styles.buttons_first  :  styles.buttons_first}
            disabled={loading || disabled}
            onClick={() => {
              if (!disabled) {
                handleSubmit()
              }
            }}>
            Yes
          </button>
          <button
            className={disabled ?  styles.buttons_first :  styles.buttons_first}
            disabled={loading || disabled}
            onClick={() => {
              if (!disabled) {
                setModal(false)
              }
            }}>
            No
          </button>
        </div>
      </div>

    </div>
  )
}