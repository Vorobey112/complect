import styles from './Test.module.css';
import { Link } from 'react-router-dom';

function Test() {
    return(
        <div className={styles.container}>
            <div className={styles.testInfo}>
            <h2 className={styles.testTitle}>Какая квартира подойдет именно вам?</h2>
            <p className={styles.testText}>Ответьте на 4 вопроса, чтобы подобрать идеальный вариант недвижимости</p>
            <Link to="/test2" className={styles.testButton}>Пройти тест</Link>
            </div>
        </div>
    )
}

export default Test