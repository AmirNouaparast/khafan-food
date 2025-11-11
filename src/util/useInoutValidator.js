import { useState } from "react";

function validate({ value, minLength, setErrorMessage, required }) {
  if (required && value.trim() === "") {
    setErrorMessage("این فیلد اجباری است");
    return;
  }

  if (value && minLength && value.length < minLength) {
    setErrorMessage("تعداد کاراکترها حداقل باید " + minLength + " باشد");
    return;
  }

  setErrorMessage("");
}

function useInoutValidator({
  required = true,
  minLength,
  maxLength,
  onlyNumbers = true,
}) {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validateOnEachKeyPress, setValidateOnEachKeyPress] = useState(false);

  const onChange = (event) => {
    let newValue = event.target.value;

    if (onlyNumbers) {
      newValue = newValue.replace(/\D/g, "");
    }

    if (validateOnEachKeyPress) {
      validate({ value: newValue, minLength, required, setErrorMessage });
    }

    if (maxLength && newValue.length > maxLength) {
      return;
    }

    setValue(newValue);
  };

  const onBlur = () => {
    if (!validateOnEachKeyPress) {
      setValidateOnEachKeyPress(true);
    }
    validate({ value, minLength, required, setErrorMessage });
  };

  return {
    isValid: !errorMessage,
    props: {
      required,
      value,
      errorMessage,
      onBlur,
      onChange,
      error: !!errorMessage,
    },
  };
}

export default useInoutValidator;
