import styles from './styles.module.css';

export default function Loader(msg){
    return(
        <div className={styles.loader}><span className={styles.span}></span></div>
    );
}