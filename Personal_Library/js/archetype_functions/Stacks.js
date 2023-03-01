//**Estructura de datos no-nativa de .js
//** Deben responder al principio LIFO: last in, first out */


function Stack() {
    this.arr = []; // ! PROPIEDAD
  }
  
  Stack.prototype.push = function (value) {
    this.arr.push(value);
  };
  
  Stack.prototype.pop = function () {
    this.arr.pop();
  }

//* STACK => va a ser una clase

//* miStack => INSTANCIA de la clase Stack

//* objetos => PROPIEDADES Y MÉTODOS

//* MÉTODOS => QUÉ PUEDE HACER ESTE OBJETO!!!!!!

//* las stack puede hacer dos cosas: agregar un elemento - sacar un elemento

//* agregar(ELEM) y sacar van a ser métodos

//* para representar la pila vamos a usar un ARRAY

var miStack = new Stack();
var miOtroStack = new Stack();

miStack.push(50);
miStack.push(7);
miStack.push(7);
miStack.push(22);
miStack.push([1, 2, 3]);

console.log(miStack);

console.log(miOtroStack);

miStack.push({});

miStack.pop();

console.log(miStack);

var miArrayNormal = [1, 2, 3];
miArrayNormal.push(5);
miArrayNormal.pop();
miArrayNormal.shift();
miArrayNormal.unshift(456);

var miNuevoStack = new Stack();
miNuevoStack.push(5);
miNuevoStack.pop();