// array
const treeWithArray = [];

// linked list
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    // level order
    const queue = new QueueWithLinkedList();
    queue.enqueue(this.root);
    while (queue.size) {
      const currNode = queue.dequeue();
      console.log(currNode.value);
      if (currNode.left) queue.enqueue(currNode.left);
      if (currNode.right) queue.enqueue(currNode.right);
    }
  }
}
