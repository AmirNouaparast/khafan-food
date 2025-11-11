import styles from "./Input.module.css";

function Input(props) {
  const {
    displayInline,
    label,
    type,
    className,
    error,
    errorMessage,
    required,
    dir,
    style,
    value,
    onChange,
    onBlur,
    ...rest
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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={style}
        dir={dir}
        required={required}
        type={type}
        {...rest}
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
          {errorMessage || "مقدار درست را وارد کنید"}
        </span>
      )}
    </div>
  );
}

export default Input;
