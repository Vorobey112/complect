import styles from './Otdel.module.css';

import cardImg2 from '../../../public/cardImg2.png';
import cardImg3 from '../../../public/cardImg3.png';

function Otdel() {
    return(
        <div className={styles.container}>
            <h2 className={styles.otdelTitle}>Отделка от застройщика</h2>
            <p className={styles.otdelText}>Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</p>
            <div className={styles.cards}>
                <div className={styles.card}>
                <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Чистота и тишина, без шума и пыли</h3>
                <p className={styles.cardText}>Забудьте шум от «бесконечного ремонта» соседей и лифт, декорированный защитными материалами</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={cardImg2} alt="card2" />
                </div>
                </div>
                <div className={styles.card}>
                <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Выгода за счет оптовых закупок</h3>
                <p className={styles.cardText}>Благодаря оптовым закупкам застройщика, вы получаете возможность сэкономитьна стоимости ремонта</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={cardImg3} alt="card3" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Otdel