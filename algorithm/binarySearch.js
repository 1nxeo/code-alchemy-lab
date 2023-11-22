// with array
const array = [1, 1, 5, 124, 400, 599, 1005, 2876, 8712];

function binarySearchWithArray(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

// with tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currNode = this.root;
    while (currNode !== null) {
      if (currNode.value < value) {
        if (currNode.right === null) {
          currNode.right = newNode;
          break;
        }

        currNode = currNode.right;
      } else {
        if (currNode.left === null) {
          currNode.left = newNode;
          break;
        }
        currNode = currNode.left;
      }
    }
  }

  has(value) {
    let currNode = this.root;
    while (currNode !== null) {
      if (currNode.value === value) {
        return true;
      }

      if (currNode.value < value) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }

    return false;
  }
}
