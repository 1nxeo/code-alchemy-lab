const getSum = (queue) => {
  return queue.reduce((acc, cur) => acc + cur, 0);
};
function getMultiIntersect(arr1, arr2) {
  let result = [...arr1];
  let clonedArr2 = [...arr2];
  let subArr = [];
  while (clonedArr2.length > 0) {
    let currentItem = clonedArr2.shift();
    if (result.includes(currentItem)) {
      subArr.push(currentItem);
      const targetIndex = result.indexOf(currentItem);
      result.splice(targetIndex, 1);
    }
  }

  return subArr;
}
function removeDuplicatesFromArray(arr, elementsToRemove) {
  return arr.filter((element) => !elementsToRemove.includes(element));
}

function removeAllDuplicates(arr1, arr2) {
  const intersect = getMultiIntersect(arr1, arr2);
  const uniqueArr1 = removeDuplicatesFromArray(arr1, intersect);
  const uniqueArr2 = removeDuplicatesFromArray(arr2, intersect);
  return [uniqueArr1, uniqueArr2];
}

function solution(queue1, queue2) {
  const [filteredQueue1, filteredQueue2] = removeAllDuplicates(queue1, queue2);
  let sum1 = getSum(filteredQueue1); // 큐1의 원소 합
  let sum2 = getSum(filteredQueue2); // 큐2의 원소 합
  let [largeQueue, smallQueue] = [filteredQueue1, filteredQueue2];
  if (sum1 < sum2) {
    [largeQueue, smallQueue] = [filteredQueue2, filteredQueue1]; // 큐1의 합이 큐2의 합보다 작도록 swap
  }
  let newSum1 = sum1 > sum2 ? sum1 : sum2;
  let newSum2 = sum1 > sum2 ? sum2 : sum1;
  if (sum1 === sum2) return 0; // 이미 두 큐의 합이 같은 경우 작업 횟수는 0
  let count = 0;
  let halfSum = (sum1 + sum2) / 2;
  while (true) {
    if (
      !Number.isInteger(halfSum) ||
      largeQueue.length === 0 ||
      smallQueue.length === 0
    ) {
      count = -1;
      break;
    }
    if (newSum1 === halfSum) break;
    if (newSum1 > newSum2) {
      const num1 = largeQueue.shift();
      newSum1 -= num1;
      newSum2 += num1;
      smallQueue.push(num1);
    } else if (newSum1 < newSum2) {
      const num2 = smallQueue.shift();
      newSum1 += num2;
      newSum2 -= num2;
      largeQueue.push(num2);
    }
    count++;
  }

  return count;
}

const getSum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

function solution(queue1, queue2) {
  let count = 0;

  while (true) {
    let sum1 = getSum(queue1);
    let sum2 = getSum(queue2);
    const total = sum1 + sum2;
    if (total % 2 !== 0) {
      count = -1;
      break;
    }

    if (queue1.length === 0 || queue2.length === 0) {
      count = -1;
      break;
    }

    if (sum1 === sum2) break;
    if (sum1 > sum2) {
      const newItem = queue1.shift();
      queue2.push(newItem);
    }
    if (sum1 < sum2) {
      const newItem = queue2.shift();
      queue1.push(newItem);
    }

    count++;
  }
  console.log(count);

  return count;
}
