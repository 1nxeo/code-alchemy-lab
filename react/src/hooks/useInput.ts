import { useState } from "react";

// interface InputValueProps<T> {
//   initialValue: T;
// }

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

export const useInput = <T>(initialValue: T) => {
  const [inputValue, setInputValue] = useState<T>(initialValue);

  const onChangeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    const currentValue = inputValue[name];
    // input 요소의 경우 type이 checkbox인지 확인하여 checked 속성 가져오기
    const checked =
      type === "checkbox"
        ? (event.target as HTMLInputElement).checked
        : undefined;

    const newValue = type === checked ?? value;

    // 객체일 때 처리

    // 다중 checkebox 처리 && 배열일 때 처리

    // type = file 일 때 처리

    setInputValue((prev) =>
      isObject(prev)
        ? ({ ...inputValue, [name]: newValue } as T)
        : (newValue as T)
    );
  };

  // const onChangeHandler = (
  //   event:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   const { name, value, type } = event.target;
  //   // input 요소의 경우 type이 checkbox인지 확인하여 checked 속성 가져오기
  //   const checked =
  //     type === "checkbox"
  //       ? (event.target as HTMLInputElement).checked
  //       : undefined;

  //   const newValue = checked ?? value;

  //   // 객체일 때 처리

  //   // 다중 checkebox 처리 && 배열일 때 처리

  //   // type = file 일 때 처리

  //   setInputValue((prev) =>
  //     name ? ({ ...(prev ?? {}), [name]: newValue } as T) : (newValue as T)
  //   );
  // };

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
