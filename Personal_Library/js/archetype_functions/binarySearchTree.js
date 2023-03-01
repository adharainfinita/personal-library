                            /Binary Search Trees/

//* Nodos que se enlazan con otros a través de uno, dos o ningún otro;
//? value, left y right;


            function Node(valor) {
                this.value = valor;
                this.next = null;
              }
              
              function BinarySearchTree(valor) {
                this.value = valor;
                this.left = null;
                this.right = null;
              }
              
              BinarySearchTree.prototype.insert = function (value) {
                if (value.num < this.value.num) {
                  if (this.left === null) {
                    var newTree = new BinarySearchTree(value);
                    this.left = newTree;
                  } else {
                    this.left.insert(value);
                  }
                } else {
                  if (this.right === null) {
                    var newTree = new BinarySearchTree(value);
                    this.right = newTree;
                  } else {
                    this.right.insert(value);
                  }
                }
              };
              
              BinarySearchTree.prototype.size = function () {
                if (this.value.num === null) {
                  return 0;
                }
              
                if (this.left === null && this.right === null) {
                  return 1;
                }
              
                if (this.left === null) {
                  return 1 + this.right.size();
                }
              
                if (this.right === null) {
                  return 1 + this.left.size();
                }
              
                return 1 + this.left.size() + this.right.size();
              };