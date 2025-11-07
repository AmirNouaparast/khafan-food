import styles from "./FoodCard.module.css";
import { formatMoney } from "../../util/formatMoney";
import Button from "../Button/Button";
import AddAndRemoveItem from "../AddAndRemoveItemButton/AddAndRemoveItemButton";
import { useContext } from "react";
import { AppContext } from "../../appContext";

export default function FoodCard({ id, img, name, restaurant, price }) {
  const { cart, addToCart } = useContext(AppContext);

  const item = cart.find((cart) => cart.id === id);
  const count = item ? item.count : 0;

  return (
    <div className={styles.foodCardContainer}>
      <img className={styles.image} src={img} alt="food image" />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{restaurant}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {count === 0 ? (
            <Button
              style={{ padding: "1rem 2rem", marginLeft: "3.7rem" }}
              onClick={() => addToCart(id)}
            >
              سفارش
            </Button>
          ) : (
            <AddAndRemoveItem
              id={id}
              count={count}
            />
          )}
          <p style={{ fontWeight: "bold" }}>{formatMoney(price)}</p>
        </div>
      </div>
    </div>
  );
}
