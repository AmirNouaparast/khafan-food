import { useState } from "react";
import styles from "./OrderCard.module.css";
import AddAndRemoveItemButton from "../../../../components/AddAndRemoveItemButton/AddAndRemoveItemButton";
import { foods } from "../../../../foods";
import { formatMoney } from "../../../../util/formatMoney";

function OrderCard({id, count}) {
  const food = foods.find((food) => food.id === id);

  return (
    <article className={styles.orderCard}>
      <p className={styles.orderItemName}>{food.name}</p>
      <p className={styles.orderItemPrice}>{formatMoney(food.price * count)}</p>
      <AddAndRemoveItemButton id={id} count={count}  />
    </article>
  );
}

export default OrderCard;
