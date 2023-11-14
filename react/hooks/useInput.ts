import { useState } from "react";

interface InputValueProps {
  initialValue: string | number | boolean | { [key: string]: string | boolean };
}

export const useInput = ({ initialValue }: InputValueProps) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const isObject = typeof inputValue === "object";

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    setInputValue(isObject ? { ...inputValue, [name]: newValue } : newValue);
  };

  return {
    onChangeHandler,
    inputValue,
    setInputValue,
  };
};
