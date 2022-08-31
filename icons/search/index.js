import styles from './Styles.module.css'
import SearchIcon from '../../icons/search';

export default function Input({label,placeholder,onChange}) {
    return (
        <div className={styles.search_container}>
            <SearchIcon className={styles.search_icon} />
            <input placeholder={placeholder} onChange={onChange} className={styles.search_input}/>
            {/* <p className="errorMsg">{getIn(errors, name)!==undefined?getIn(errors, name):""}</p> */}
        </div>


    );
}