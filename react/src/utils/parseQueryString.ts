const parseQueryString = (queryString: string): Record<string, string> => {
  const queryObject: Record<string, string> = {};

  if (queryString) {
    const params = new URLSearchParams(queryString);

    for (const [key, value] of params.entries()) {
      queryObject[key] = decodeURIComponent(value);
    }
  }

  return queryObject;
};

export { parseQueryString };

// const parseQueryString = (queryString: string): Record<string, string> => {
//   const queryObject: Record<string, string> = {};

//   if (queryString) {
//     // 쿼리 문자열을 '&'로 분할
//     const params = queryString.split("&");

//     for (const param of params) {
//       // 각 키-값 쌍을 '='로 분할
//       const [key, value] = param.split("=");
//       // URL 디코딩을 수행하고 객체에 저장
//       queryObject[key] = decodeURIComponent(value);
//     }
//   }

//   return queryObject;
// };

// export { parseQueryString };
