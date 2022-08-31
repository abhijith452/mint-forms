import styles from './Styles.module.css'

export default function DisabledInput({label,placeholder,value,onClick}) {
    return (
        <div className={styles.inputContainer}>
            <p className={styles.label}> {label}</p>
            <input placeholder={placeholder} disabled value={value} onClick={onClick} className={styles.input}/>
        
        </div>


    );
}