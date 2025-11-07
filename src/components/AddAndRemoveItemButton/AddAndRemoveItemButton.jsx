import styles from "./AddAndRemoveItemButton.module.css";
import Button from "../Button/Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "../../appContext";

function AddAndRemoveItemButton({ id, count }) {
  const { addToCart, removeFromCart } = useContext(AppContext);
  return (
    <div className={styles.action}>
      <Button className={styles.button} onClick={() => addToCart(id)}>+</Button>
      <p className={styles.actionNumberOfItems}>{count}</p>
      <Button className={styles.button} onClick={() => removeFromCart(id)}>
        {count > 1 ? "-" : <FaRegTrashCan style={{ verticalAlign: "-4px" }} />}
      </Button>
    </div>
  );
}

export default AddAndRemoveItemButton;
