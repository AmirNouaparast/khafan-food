import logo from "../../resources/images/logo.png";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <h1 style={{ marginTop: "0.8rem"}}>خفن فود</h1>
        <img src={logo} alt="logo" style={{ width: "70px", height: "70px",marginTop:'0.3rem' }} />
        <div style={{ display: "flex"}}>
        <Button size="small" variant="outlined" style={{ margin:"0.7rem"}}>سبدخرید</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
