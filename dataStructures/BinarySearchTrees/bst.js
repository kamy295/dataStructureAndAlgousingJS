console.log("Binary Search Tree");

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
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value){
     if(this.root === null) return false;
     let current = this.root;
     let found = false;
     while(current && !found){
       if(value < current.value){
         current = current.left;
       } else if (value > current.value){
         current = current.right;
       } else {
         found = true;
       }
     }
     if(!found) return undefined;
     return current;
  }

  //different implementation of find -> returns true if found & false if not find
  contains(value){
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if (value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
