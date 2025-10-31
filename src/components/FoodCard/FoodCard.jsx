import styles from "./FoodCard.module.css";
import { formatMoney } from "../../util/formatMoney";
import Button from "../Button/Button";
import AddAndRemoveItem from "../AddAndRemoveItemButton/AddAndRemoveItemButton";
import { useState } from "react";

export default function FoodCard({ img, name, restaurant, price }) {
  const [ count, setCount ] = useState(0);
  console.log("count:", count);
  return (
    <div className={styles.foodCardContainer}>
      <img className={styles.image} src={img} alt="food image" />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{restaurant}</p>
        <div style={{ display: "flex" , justifyContent:"space-between", alignItems:"center"}}>
          {count === 0 ? (
            <Button
              style={{ padding: "1rem 2rem", marginLeft: "3.7rem" }}
              onClick={() => setCount(1)}
            >
              سفارش
            </Button>
          ) : (
            <AddAndRemoveItem count={count} setCount={setCount} />
          )}
          <p style={{ fontWeight: "bold" }}>{formatMoney(price)}</p>
        </div>
      </div>
    </div>
  );
}
