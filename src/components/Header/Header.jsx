import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src="./src/assets/logo1.png" alt="logo" />
        <p>Официальный партнер
        АО «Дубайские Дома»</p> 
      </div>
      <div>+7 977 007 85 85</div>
    </header>
    <main>
        <div className={styles.titleCard}>
        <img src="./src/assets/logo2.png" alt="logo" />
        <h1 className={styles.headerTitle}>Жизнь
        в статусном районе Грозного</h1>
        <p className={styles.headertext}>Жилой комплекс бизнес-класса в 10 минутах от Берката</p>
        <img className={styles.mainLogo} src="./src/assets/mainImg.png" alt="main  " />
            <img className={styles.featureLogo} src="./src/assets/features.png" alt="" />

        </div>

    </main>
    </div>
  );
}

export default Header;

