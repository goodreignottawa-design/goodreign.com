import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>About Goodreign</h4>
          <p>Curated collection of premium physical goods for the modern lifestyle.</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialLinks}>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2026 Goodreign. All rights reserved.</p>
      </div>
    </footer>
  )
}
