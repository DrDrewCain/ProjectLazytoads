import React from "react";
import Footer from "../components/Footer";
import Navigation from "@/components/Navigation";
import RootLayout from "../components/layout";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
      <><Navigation /><div className={styles.flexContainer}>
      <main className={`${styles.main} ${styles.gradientBackground} ${styles.py20}`}>
        <div className={`${styles.contentContainer} ${styles.textCenter}`}>
          <p className={`${styles.textWhite} ${styles.textBase} ${styles.mb6} ${styles.gradientText}`}>
            Currently working hard to bring you the best website possible.
          </p>
          <p className={`${styles.textWhite} ${styles.textBase} ${styles.mb6} ${styles.fontBold} ${styles.gradientText}`}>
            Releasing: 2024
          </p>
          <p className={`${styles.textBlack} ${styles.textBase} ${styles.textCenter} ${styles.borderBottom} ${styles.bgWhite} ${styles.bgOpacity50} ${styles.pb6} ${styles.pt8} ${styles.backdropBlur} ${styles.fontBold} ${styles.trackingWider} ${styles.roundedXL} ${styles.gradientText}`}>
            DEVELOPMENT IN PROGRESS..... LAZYTOADS ARE WORKING ON IT
          </p>
        </div>
      </main>
      <Footer />
    </div></>
  );
};

export default Home;