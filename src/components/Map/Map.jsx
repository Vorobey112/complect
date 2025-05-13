import styles from './Map.module.css'

function Map () {
    return(
        <div className={styles.container}>
            <p className={styles.mapText}>Престижное расположение</p>
            <h2 className={styles.mapTitle}>Один из самых зелёных районов столицы — Новый Проспект</h2>
             <div>
                <img className={styles.mapImg} src="./public/map.png" alt="map" />
             </div>
        </div>
    )
 }

export default Map