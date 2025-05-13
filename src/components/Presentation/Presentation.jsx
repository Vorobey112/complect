import styles from './Presentation.module.css';
import ModalOne from '../ModalOne/ModalOne';

import presentationImg from '../../../public/presentationImg.png';

function Presentation () {
  return (
<div className={styles.container}>
    <div className={styles.presentationInfo}>
        <p className={styles.presentationText}>Специально для вас</p>
        <h1 className={styles.presentationTitle}>Персональная презентация West Garden</h1>
        <ul className={styles.presentationList}>
        <li className={styles.presentationItem}>Подробно расскажем про жилой комплекс</li>
        <li className={styles.presentationItem}>Ознакомитесь со всеми планировками</li>
        <li className={styles.presentationItem}>Прогуляетесь по благоустроенной набережной</li>
        </ul>
        <ModalOne />
        <p className={styles.presentationP}>Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
    </div>
    <div className={styles.presentationImg}>
        <img className={styles.presentationImage} src={presentationImg} alt="pres" />
    </div>
</div>
  ); 
}

export default Presentation