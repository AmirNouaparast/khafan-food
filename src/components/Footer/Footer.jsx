import styles from "./Footer.module.css";
import logo from "../../resources/images/logo.png";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h1>خفن فود</h1>
        <img src={logo} alt="logo" className={styles.image} />
      </div>
    </footer>
  );
}

export default Footer;
