export default function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = Array.from(
    { length: Math.ceil(arr.length / chunkSize) },
    (_, index) => arr.slice(index * chunkSize, (index + 1) * chunkSize)
  );

  return chunks;
}

// export default function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
//     return arr?.reduce((resultArray: T[][], item: T, index: number) => {
//       const chunkIndex: number = Math.floor(index / chunkSize);

//       if (!resultArray[chunkIndex]) {
//         resultArray[chunkIndex] = [];
//       }

//       resultArray[chunkIndex].push(item);

//       return resultArray;
//     }, []);
//   }
