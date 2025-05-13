import styles from './Lobbi.module.css';

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
                    <img src="./src/assets/lobbi1.png" alt="lobbi1" />
                    <img src="./src/assets/lobbi2.png" alt="lobbi2" />
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
                    <img src="./src/assets/lobbi3.png" alt="lobbi1" />
                    <img src="./src/assets/lobbi4.png" alt="lobbi2" />
                </div>
            </div>
        </div>
    )
}

export default Lobbi