import styles from './Banks.module.css';

import logos from '../../../public/logos.png';

function Banks() {
    return(
        <div className={styles.container}>
            <h2 className={styles.banksTitle}>Самые выгодные условия кредитования от 20 банков</h2>
            <img src={logos} alt="logos" />
        </div>
    )
}

export default Banks