import styles from '../styles/Home.module.css'

export { MainMenu }

function MainMenu({ }) {
    return (
        <div className={styles.grid}>
          <a href="News" className={styles.card}>
            <h2>News</h2>
            <p>Weekly informs you</p>
          </a>

          <a href="Images" className={styles.card}>
            <h2>Images</h2>
            <p>Look at my pictures</p>
          </a>

          <a href="Search" className={styles.card}>
            <h2>Search</h2>
            <p>Find resources on the net</p>
          </a>

          <a href="Links" className={styles.card}>
            <h2>Links</h2>
            <p>All my favorites</p>
          </a>
        </div>
    );
}