import { createPortal } from "react-dom";
import styles from "./Notification.module.css";

function Notification({ message, type }) {
  return createPortal(
    <div
      className={styles.notification}
      style={{
        backgroundColor:
          type === "error"
            ? "#D32F2F"
            : type === "info"
            ? "#0288D1"
            : type === "success"
            ? "#4CAF50"
            : "#F57F17",
      }}
    >
      {message}
    </div>,
    document.getElementById("notification")
  );
}

export default Notification;
