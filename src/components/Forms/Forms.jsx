import styles from './Forms.module.css';

function Forms() {
    return(
        <div className={styles.container}>
            <h2 className={styles.formsTitle}>Более 100 свободных квартир</h2>
            <div className={styles.formsCard}>
                <div className={styles.cardInfo}>
                <h3 className={styles.casdTitle}>Свободная планировка, возможность объединить квартиры до 500 м²</h3>
                <p className={styles.casdText}>Не ограничивайте себя при создании жилого пространства Вашей мечты, воспользуйтесь возможностью увеличения площади до комфортного Вам размера</p>
                <a href="#">Узнать стоимость</a>
                </div>
                <div className={styles.cardImage}>
                    <img src="./public/form1.png" alt="form1" />
                </div>
            </div>
            <div className={styles.formsCard}>
            <div className={styles.cardInfo}>
                <h3 className={styles.casdTitle}>Настоящий дровяной камин </h3>
                <p className={styles.casdText}>В пентхаусах предусмотрен дымоход с возможностью установки камина, чтобы Вы получали наслаждение от живого тепла в холодное время года</p>
                <a href="#">Узнать стоимость</a>
                </div>
                <div className={styles.cardImage}>
                    <img src="./public/form2.png" alt="form1" />
                </div>
            </div>
        </div>
    )
}

export default Forms