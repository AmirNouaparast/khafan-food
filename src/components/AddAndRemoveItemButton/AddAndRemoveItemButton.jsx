import styles from "./AddAndRemoveItemButton.module.css";
import Button from "../Button/Button";
import { FaRegTrashCan } from "react-icons/fa6";

function AddAndRemoveItemButton({ count, setCount }) {
  return (
    <div className={styles.action}>
      <Button
        className={styles.button}
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        +
      </Button>
      <p className={styles.actionNumberOfItems}>{count}</p>
      <Button
        className={styles.button}
        onClick={() => setCount((prevState) => prevState - 1)}
      >
        {count > 1 ? "-" : <FaRegTrashCan style={{ verticalAlign: "-4px" }} />}
      </Button>
    </div>
  );
}

export default AddAndRemoveItemButton;
