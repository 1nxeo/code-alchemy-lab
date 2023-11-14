export const findMaxCountKey = (obj: {
  [key: string]: number;
}): string | null => {
  let maxKey: string | null = null;
  let max = -Infinity;

  for (const [key, value] of Object.entries(obj)) {
    if (value > max) {
      max = value;
      maxKey = key;
    }
  }

  return maxKey;
};

// export const findMaxCountKey = (obj: { [key: string]: number }) => {
//     const values = Object.values(obj);
//     const max = Math.max(...values);

//     if (max !== -Infinity) {
//       return Object.keys(obj).find((key) => obj[key] === max);
//     } else {
//       return null; // 모든 값이 숫자s가 아닌 경우
//     }
//   };
