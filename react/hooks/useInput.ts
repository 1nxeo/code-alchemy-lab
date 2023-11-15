import { useState } from "react";

type InputType = string | number | boolean;

interface InputValueProps {
  initialValue: InputType | { [key: string]: InputType };
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
