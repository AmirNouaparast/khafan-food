import { Link } from "react-router-dom";
import logo from "../../resources/images/logo.png";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/">
        <h1 style={{ marginTop: "0.8rem"}}>خفن فود</h1>
        </Link>
        <img src={logo} alt="logo" style={{ width: "70px", height: "70px",marginTop:'0.3rem' }} />
        <div style={{ display: "flex" }}>
          <Link to='/shopping-card'>
        <Button size="small" variant="outlined" style={{ margin:"0.7rem"}}>سبدخرید</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
