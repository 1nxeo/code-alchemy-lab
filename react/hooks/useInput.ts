import { useState } from "react";

interface InputValueProps<T> {
  initialValue: T;
}

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

export const useInput = <T>({ initialValue }: InputValueProps<T>) => {
  const [inputValue, setInputValue] = useState<T>(initialValue);

  const onChangeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;

    // input 요소의 경우 type이 checkbox인지 확인하여 checked 속성 가져오기
    const checked =
      type === "checkbox"
        ? (event.target as HTMLInputElement).checked
        : undefined;

    const newValue = type === "checkbox" ? checked : value;

    setInputValue((prev) =>
      isObject(prev)
        ? ({ ...inputValue, [name]: newValue } as T)
        : (newValue as T)
    );
  };

  return {
    onChangeHandler,
    inputValue,
    setInputValue,
  };
};

/**
 * 사용법
 * 
 * interface UserInfo {
 *    name:string;
 *    age:number;
 *    address:string;
 * }
 * 
 * const { onChangeHandler, inputValue, setInputValue } = useInput<UserInfo>({
    initialValue: '', // 초기값 설정
  });
 */
