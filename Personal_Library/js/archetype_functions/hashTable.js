//! AAAAAAAAA

function HashTable() {
    this.numBuckets = 35;
    this.buckets = [];
  }
  
  HashTable.prototype.hash = function (key) {
    var suma = 0;
    // for (let i = 0; i < key.length; i++) {
    //   var char = array[i];
    // }
    for (var char of key) {
      suma += char.charCodeAt();
    }
    return suma % this.numBuckets;
    // ? Qué está retornando? El índice del array donde voy a guardar el objeto
  };
  
  HashTable.prototype.set = function (key, value) {
    if (typeof key !== "string") throw TypeError("key must be strings");
  
    var index = this.hash(key);
  
    if (!this.buckets[index]) {
      this.buckets[index] = { [key]: value };
    } else {
      this.buckets[index][key] = value;
    }
  };
  
  HashTable.prototype.get = function (key) {
    var index = this.hash(key);
    return this.buckets[index][key]; // valor o undefined
  };
  
  HashTable.prototype.hasKey = function (key) {
    // var index = this.hash(key);
  
  
    // return !!this.buckets[index][key];
    return !!this.get(key); // !! me da el valor de verdad
  };