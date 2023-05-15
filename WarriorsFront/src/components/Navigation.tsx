import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "../styles/home.module.css";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href='/home'>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href='/about'>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href='/contact'>contact</Link>
        </li>
        <li className={styles.navItem}><Link href='/page'>page</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
