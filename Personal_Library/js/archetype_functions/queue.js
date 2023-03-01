                    / QUEUE (o Colas de apilación)/

//**Son estructuras simils a las stacks pero varían en el principio de orden
            //* principio FIFO: First in first out;

            function Queue() {
                this.arr = []; // ! PROPIEDAD
              }

              Queue.prototype.enqueue = function (elemento) {
                return this.array.push(elemento);
              };
              
              Queue.prototype.dequeue = function () {
                return this.array.shift();
              };
              
              Queue.prototype.size = function () {
                return this.array.length;
              };