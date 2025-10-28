import styles from "./FoodCard.module.css";
import { formatMoney } from "../../util/formatMoney";

export default function FoodCard() {
  return (
    <div className={styles.foodCardContainer}>
      <img
        className={styles.image}
        src="https://www.dibafar.com/wp-content/uploads/2023/06/a688ae1d-75de-4508-974c-aeae001b7b8e-%D9%82%D9%88%D8%B1%D9%85%D9%87-%D8%B3%D8%A8%D8%B2%DB%8C.jpg"
        alt="food image"
      />

      <div className={styles.content}>
        <h3>عنوان غذا</h3>
        <p>اسم رستوران</p>
        <p style={{fontWeight: '700'}}>{formatMoney(200000)}</p>
        <button>سفارش</button>
      </div>
    </div>
  );
}
