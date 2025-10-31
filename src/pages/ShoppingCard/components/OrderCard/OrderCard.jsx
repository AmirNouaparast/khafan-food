import { useState } from "react"
import Button from "../../../../components/Button/Button"
import styles from "./OrderCard.module.css"
import AddAndRemoveItemButton from "../../../../components/AddAndRemoveItemButton/AddAndRemoveItemButton"

function OrderCard() {
  const [count, setCount] = useState(0)
  return (
    <article className={styles.orderCard}>
        <p className={styles.orderItemName}>عنوان غذا</p>
        <p className={styles.orderItemPrice}>مبلغ قابل پرداخت</p>
      <AddAndRemoveItemButton count={count} setCount={setCount} />
    </article>
  )
}

export default OrderCard