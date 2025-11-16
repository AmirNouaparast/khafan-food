import styles from "./Button.module.css";

function Button(props) {
  const {
    style,
    className,
    size,
    variant,
    onClick,
    disabled,
    color,
    fullwidthOnMobile,
    children,
    type,
  } = props;

  return (
    <button
      className={
        styles.button +
        " " +
        (variant && variant === "outlined" ? styles.outlined : "") +
        " " +
        (fullwidthOnMobile ? styles.fullwidthOnMobile : "") +
        " " +
        className
      }
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={{
        ...style,
        backgroundColor:
          color ||
          (style && style.backgroundColor ? style.backgroundColor : undefined),
        padding:
          style && style.padding
            ? style.padding
            : size === "normal"
            ? undefined
            : size === "small"
            ? "0.5rem 1rem"
            : size === "big"
            ? "1.5rem 3rem"
            : undefined,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
