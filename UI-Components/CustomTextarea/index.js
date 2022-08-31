
import styles from './Styles.module.css'

export default function TextArea({ label, placeholder, value, onChange, error,errMsg,...rest }) {
    return (
        <div className={styles.inputContainer}>
            <p className={styles.label}> {label}</p>
            <textarea {...rest} placeholder={placeholder} value={value}
                style={{
                  
                    outlineColor: error ? "red" : "#1479ff"

                }}
                onChange={onChange} className={styles.input} />
            <p className={styles.errorMsg}>{errMsg}</p>
        </div>


    );
}