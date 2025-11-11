import styles from "./Payment.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import useInoutValidator from "../../util/useInoutValidator";

function Payment() {
  const cartNumberInputState = useInoutValidator({
    maxLength: 16,
    minLength: 16,
  });
  const CVV2InputState = useInoutValidator({
    maxLength: 4,
    minLength: 3,
  });
  const monthInputState = useInoutValidator({
    maxLength: 2,
    minLength: 2,
  });
  const yearInputState = useInoutValidator({
    maxLength: 2,
    minLength: 2,
  });
  const passwordInputState = useInoutValidator({
    maxLength: 8,
    minLength: 4,
  });
  const emailInputState = useInoutValidator({
    maxLength: 32,
    minLength: 12,
    required: false,
    onlyNumbers: false,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      const decrementCountInterval = setInterval(() => {
        setCount((prevState) => prevState - 1);
      }, 1000);
      return () => clearInterval(decrementCountInterval);
    }
  }, [count]);

  const handleClickCounter = () => {
    setCount(120);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !(
        cartNumberInputState.isValid &&
        CVV2InputState.isValid &&
        monthInputState.isValid &&
        yearInputState.isValid &&
        emailInputState.isValid
      )
    ) {
      return;
    }
    console.log("form is valid")
  };

  return (
    <form className={styles.container} onSubmit={formSubmitHandler}>
      <h1 style={{ textAlign: "center" }}>مبلغ قابل پرداخت</h1>

      <Input
        label={"شماره کارت"}
        dir="ltr"
        className={styles.numberInput}
        type={"text"}
        inputMode="numeric"
        pattern="[0-9]*"
        {...cartNumberInputState.props}
      />

      <Input
        label={"CVV2"}
        required
        dir="ltr"
        style={{ width: "40%" }}
        className={styles.numberInput}
        type={"text"}
        inputMode="numeric"
        pattern="[0-9]*"
        {...CVV2InputState.props}
      />

      <h3 style={{ textAlign: "center" }}>تاریخ انقضا</h3>
      <div className={styles.dateContainer}>
        <Input
          label={"ماه"}
          required
          dir="ltr"
          className={styles.numberInput}
          type={"text"}
          inputMode="numeric"
          pattern="[0-9]*"
          {...monthInputState.props}
        />
        <Input
          label={"سال"}
          required
          dir="ltr"
          className={styles.numberInput}
          type={"text"}
          inputMode="numeric"
          pattern="[0-9]*"
          {...yearInputState.props}
        />
      </div>

      <div className={styles.passwordContainer}>
        <Input
          label={"رمز دوم"}
          required
          dir="ltr"
          displayInline
          className={styles.numberInput}
          type={"text"}
          inputMode="numeric"
          pattern="[0-9]*"
          {...passwordInputState.props}
        />
        <Button
          className={styles.button}
          type={"button"}
          onClick={handleClickCounter}
          disabled={count > 0}
        >
          {count > 0 ? `${count} ثانیه` : "درخواست رمز دوم"}
        </Button>
      </div>

      <Input
        label={"ایمیل"}
        required
        dir="ltr"
        type={"text"}
        displayInline
        {...emailInputState.props}
      />

      <Button
        color={"green"}
        fullWidthOnMobile
        style={{
          padding: "1rem 2rem",
          marginTop: "2rem",
          display: "block",
          width: "70%",
        }}
        type={"submit"}
      >
        پرداخت
      </Button>
    </form>
  );
}

export default Payment;
