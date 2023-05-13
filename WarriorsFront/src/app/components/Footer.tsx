import React from 'react'
import styles from './footer.module.css';
import { COPYRIGHT_HOLDER, SITE_NAME} from '../libs/constants';


function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-center w-full h-16 bg-max-w-5xl">
      <p className="text-max-w-5xl-600">
      <div className={styles['footer-copyright']}>
          Copyright © {`${new Date().getFullYear()} `} {COPYRIGHT_HOLDER || `${SITE_NAME}.`} All
          rights reserved.
        </div>
      </p>
    </footer>
  )
}

export default Footer
