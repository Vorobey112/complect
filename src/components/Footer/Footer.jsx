import styles from './Footer.module.css';

import footerMap from '../../../public/footerMap.png';
import footerLogo from '../../../public/footerLogo.png';


function Footer() {
    return(
        <div className={styles.container}>
             <div className={styles.footerInfo}>
                <h2 className={styles.footerTitle}>Жилой комплекс «West Garden» — все преимущества жизни на природе</h2>
                <img src={footerLogo} alt="footer" />
                <div className={styles.item}>
                    <p className={styles.itemText}>Офис продаж</p>
                    <p className={styles.itemText}>Москва, Локал наб. 2/4,
                    строение 17, офис 308</p>
                </div>

                <div className={styles.item}>
                <p className={styles.itemText}>Телефон</p>
                    <p className={styles.itemText}>+7 977 007 85 85    </p>
                </div>
             </div>

             <div className={styles.footerImage}>
                <img src={footerMap} alt="Map" />
             </div>
        </div>
    )
}

export default Footer