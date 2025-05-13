import styles from './Header.module.css';

import logo1 from '../../../public/logo1.png';
import logo2 from '../../../public/logo2.png';
import mainImg from '../../../public/mainImg.png';
import features from '../../../public/features.png';


function Header() {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={logo1} alt="logo" />
        <p>Официальный партнер
        АО «Дубайские Дома»</p> 
      </div>
      <div>+7 977 007 85 85</div>
    </header>
    <main>
        <div className={styles.titleCard}>
        <img src={logo2} alt="logo" />
        <h1 className={styles.headerTitle}>Жизнь
        в статусном районе Грозного</h1>
        <p className={styles.headertext}>Жилой комплекс бизнес-класса в 10 минутах от Берката</p>
        <img className={styles.mainLogo} src={mainImg} alt="main  " />
            <img className={styles.featureLogo} src={features} alt="" />

        </div>

    </main>
    </div>
  );
}

export default Header;

