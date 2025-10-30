import Button from "../../../../components/Button/Button"
import styles from "./OrderCard.module.css"

function OrderCard() {
  return (
    <article className={styles.orderCard}>
        <p className={styles.orderItemName}>عنوان غذا</p>
        <p className={styles.orderItemPrice}>مبلغ قابل پرداخت</p>
        <Button>کم اضاف</Button>
    </article>
  )
}

export default OrderCard