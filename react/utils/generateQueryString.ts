const generateQueryString = (q: Record<string, any>): string => {
  return Object.entries(q || {})
    .filter(([key, value]) => value && value.toString().length)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};

export { generateQueryString };

// const generateQueryString = (q: any) => {
//   let queryString = "";
//   if (q) {
//     const queryKeys = Object.keys(q);
//     queryKeys.forEach((key) => {
//       if (q[key]) {
//         if (q[key].toString().length) {
//           queryString += `${key}=${q[key]}&`;
//         }
//       }
//     });
//     if (queryKeys.length > 0 && queryString[queryString.length - 1] === "&") {
//       queryString = queryString.slice(0, -1);
//     }
//   }
//   return queryString;
// };

// export { generateQueryString };
