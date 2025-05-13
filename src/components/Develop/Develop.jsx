import styles from './Develop.module.css';

import inteco from '../../../public/inteco.png'

function Develop() {
    return(
        <div className={styles.container} style={{ backgroundImage: `url(${inteco})`}}>
            
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                <h2 className={styles.developTitle}>Девелопер ИНТЕКО</h2>
                <p className={styles.developText}>Реализует лучшие проекты в сфере недвижимости на основе анализа и прогноза предпочтений человека</p>
                </div>
            
             <div className={styles.info}>
                <div className={styles.infoCard}>
                    <h4 className={styles.cardTitle}>20 лет</h4>
                    <p className={styles.cardText}>на рынке недвижимости Москвы и регионов</p>
                </div>
                <div className={styles.infoCard}>
                <h4 className={styles.cardTitle}>80+ проектов</h4>
                <p className={styles.cardText}>жилых домов сдано в Москве</p>
                </div>
                <div className={styles.infoCard}>
                <h4 className={styles.cardTitle}>5 000 000 м²</h4>
                <p className={styles.cardText}>общая площадь готовых объектов</p>
                </div>
                <div className={styles.infoCard}>
                <h4 className={styles.cardTitle}>500 сотрудников
                в штате компании</h4>
                <p className={styles.cardText}>в штате компании</p>
                </div>
            </div>

         </div>
            <div className={styles.titleInfo}>
                    <h4 className={styles.titleInfoTitle}>Документы West Garden</h4>
                    <ul className={styles.titleInfoUl}>
                        <li className={styles.titleInfoList}>Проектная документация</li>
                        <li className={styles.titleInfoList}>Разрешение на строительство</li>
                        <li className={styles.titleInfoList}>Проектная декларация</li>
                    </ul>
            </div>
        </div>
    )
}

export default Develop