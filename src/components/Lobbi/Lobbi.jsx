import styles from './Lobbi.module.css';

import lobbi1 from '../../../public/lobbi1.png';
import lobbi2 from '../../../public/lobbi2.png';
import lobbi3 from '../../../public/lobbi3.png';
import lobbi4 from '../../../public/lobbi4.png';

function Lobbi() {
    return (
        <div className={styles.container}>
            <h2 className={styles.lobbiTitle}>Современная эстетика лобби
            </h2>
            <div className={styles.central}>
                <div className={styles.centralInfo}>
                <h3 className={styles.title}>Центральные входные группы
                </h3>
                <ul className={styles.lobbiUl}>
                    <li className={styles.lobbiList}>Зоны ожидания и встреч</li>
                    <li className={styles.lobbiList}>Пост охраны</li>
                    <li className={styles.lobbiList}>Переговорная комната</li>
                    <li className={styles.lobbiList}>Колясочная</li>
                </ul>
                </div>
                <div className={styles.lobbiImages}>
                    <img src={lobbi1} alt="lobbi1" />
                    <img src={lobbi2} alt="lobbi2" />
                </div>
            </div>

            <div className={styles.central}>
                <div className={styles.centralInfo}>
                <h3 className={styles.title}>Лифтовый холл 
                </h3>
                <ul className={styles.lobbiUl}>
                    <li className={styles.lobbiList}>2-4 лифта</li>
                    <li className={styles.lobbiList}>Грузовые и пассажирские</li>
                    <li className={styles.lobbiList}>Ведущие производители</li>
                </ul>
                </div>
                <div className={styles.lobbiImages}>
                    <img src={lobbi3} alt="lobbi3" />
                    <img src={lobbi4} alt="lobbi4" />
                </div>
            </div>
        </div>
    )
}

export default Lobbi