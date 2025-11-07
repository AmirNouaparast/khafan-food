import { useContext } from "react";
import { AppContext } from "../../appContext";
import Main from "../../components/Main/Main";
import { formatMoney } from "../../util/formatMoney";
import styles from "./ShoppingCart.module.css";
import OrderCard from "./components/OrderCard/OrderCard";
import { foods } from "../../foods";

function ShoppingCard() {
  const { cart } = useContext(AppContext);

  let totalItemCount = 0;
  let totalCostFromStart = 0;
  cart.forEach((item) => {
    const food = foods.find((food) => food.id === item.id);
    totalCostFromStart += food.price * item.count;
    totalItemCount += item.count;
  });

  if (cart.length === 0) {
    return (
      <Main>
        <h2 style={{ textAlign: "center", margin: "50px" }}>
          سبد خرید خالی است
        </h2>
      </Main>
    );
  }

  return (
    <Main>
      <section>
        {cart.map((item) => (
          <OrderCard count={item.count} id={item.id} />
        ))}
      </section>

      <section className={styles.totalCost}>
        <div>
          <h3>تعداد اقلام</h3>
          <p>{totalItemCount + " عدد "}</p>
          <h3>قابل پرداخت</h3>
          <p>{formatMoney(totalCostFromStart + 20000)}</p>
        </div>
        <div>
          <h3>جمع سفارش</h3>
          <p>{formatMoney(totalCostFromStart)}</p>
        </div>
        <div>
          <h3>هزینه پیک</h3>
          <p>{formatMoney(20000)}</p>
        </div>
      </section>
    </Main>
  );
}

export default ShoppingCard;
