import Main from "../../components/Main/Main";
import { formatMoney } from "../../util/formatMoney";
import OrderCard from "./components/OrderCard/OrderCard";
import styles from "./ShoppingCart.module.css";
function ShoppingCard() {
  return (
    <Main>
      <section><OrderCard/></section>

      <section className={styles.totalCost}>
        <div>
          <h3>تعداد اقلام</h3>
          <p>7 عدد</p>
          <h3>جمع سفارش</h3>
          <p>{formatMoney(200000)}</p>
        </div>
        <div>
          <h3>هزینه پیک</h3>
          <p>{formatMoney(200000)}</p>
        </div>
        <div>
          <h3>قابل پرداخت</h3>
          <p>{formatMoney(200000)}</p>
        </div>
      </section>
    </Main>
  );
}

export default ShoppingCard;
