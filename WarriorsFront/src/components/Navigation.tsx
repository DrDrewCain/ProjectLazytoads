import { useRouter } from 'next/router';
import styles from "../styles/home.module.css";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.navItem}>
          <div className={styles.navButtonContainer}>
            <button className={styles.navButton} onClick={() => router.push('/home')}>Home</button>
          </div>
        </li>
        <li className={styles.navItem}>
          <div className={styles.navButtonContainer}>
            <button className={styles.navButton} onClick={() => router.push('/about')}>About</button>
          </div>
        </li>
        <li className={styles.navItem}>
          <div className={styles.navButtonContainer}>
            <button className={styles.navButton} onClick={() => router.push('/contact')}>Contact</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
