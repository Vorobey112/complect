import styles from './Banks.module.css';

function Banks() {
    return(
        <div className={styles.container}>
            <h2 className={styles.banksTitle}>Самые выгодные условия кредитования от 20 банков</h2>
            <img src="./src/assets/logos.png" alt="logos" />
        </div>
    )
}

export default Banks