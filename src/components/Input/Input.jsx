import styles from "./Input.module.css";

function Input(props) {
  const {
    displayInline,
    label,
    type,
    className,
    error,
    errorMassage,
    required,
    dir,
    style,
  } = props;

  return (
    <div
      className={styles.inputContainer}
      style={{ display: displayInline ? "inline" : "block" }}
    >
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <br />
      <input
        style={style}
        dir={dir}
        required={required}
        type={type}
        id={label}
        className={
          styles.input +
          " " +
          (className || "") +
          " " +
          (error ? styles.error : "")
        }
      />
      {error && (
        <span className={styles.errorMessage}>
          {errorMassage || "مقدار درست را وارد کنید"}
        </span>
      )}
    </div>
  );
}

export default Input;
