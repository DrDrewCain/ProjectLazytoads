import React from "react";
import styles from "../styles/home.module.css";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Lazytoads</h1>
      </header>
      <main className={styles.content}>
        <section className={styles.section}>
          <h2>Currently working hard to bring you the best website possible.</h2>
          <p>We are currently working hard to bring you the best website possible. Please check back soon!</p>
        </section>
        <section className={styles.section}>
          <h2>Releasing: 2024</h2>
          <p>We are planning to release our website in 2024. Stay tuned for more updates!</p>
        </section>
      </main>
      <footer>
        <nav className={styles.nav}>
          <Navigation />
        </nav>
      </footer>
    </div>
  );
};

export default Home;
