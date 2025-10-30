import styles from "./FoodCard.module.css";
import { formatMoney } from "../../util/formatMoney";
import Button from "../Button/Button";

export default function FoodCard({ img, name, restaurant, price }) {
  return (
    <div className={styles.foodCardContainer}>
      <img className={styles.image} src={img} alt="food image" />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{restaurant}</p>
        <div style={{display:"flex"}}>
          <Button style={{ padding: "1rem 2rem", marginLeft:"3.7rem" }}>سفارش</Button>
          <p style={{ fontWeight: "bold"}}>{formatMoney(price)}</p>
        </div>
      </div>
    </div>
  );
}
