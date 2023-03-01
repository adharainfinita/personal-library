 
 
 /Dos condiciones para que funcionen las: /                       
                        
                        // ? CLOSURES

 //*Una función que retorna otra función.
//*La función hija utiliza una variable o un parámetro de la función padre.

                //función de almacenamiento de caché
function cacheFunction(cb) {
    var cache = {};
  
    return function (arg) {
      // ? cache.hasOwnProperty(arg)
      // * Ya tengo el valor guardado, retorno lo que tengo guardado
      // ! No tengo el valor, tengo que ejecutar la función
  
      if (cache.hasOwnProperty(arg)) {
        return cache[arg];
      } else {
        var result = cb(arg);
        cache[arg] = result;
        return result;
      }
    };
  }
//---------------------------  -------- - ------------------ - ---------------

//! Las funciones descritas a continuación no han sido implementadas para mi nivel, pero pueden ser util en el futuro.

    

                                /function factory/

const crearUsuario = ({ userName, avatar }) => ({
    id: crearUnID(),
    userName,
    avatar,
    cambiarUserName (userName) {
      this.userName = userName;
      return this;
    },
    cambiarAvatar (url) {
      // ejecuta logica para obtener el avatar desde la url
      const nuevoAvatar = obtenerAvtarDesdeUrl(url)
      this.avatar = nuevoAvatar
      return this
    }
  });
  
      console.log(crearUsuario({ userName: 'Bender', avatar: 'bender.png' }));
  
  {
    "id":"17hakg9a7jas",
    "avatar": "bender.png",
    "userName": "Bender",
    "cambiarUsername": [Function cambiarUsername]
    "cambiarAvatar": [Function cambiarAvatar]
  
  }
  
                                /CURRYING/

  let multiplicar = (a) => (b) => (c) => {

    return a * b * c;
}

let mc1 = multiplicar(1);
let mc2 = mc1(2);
let res = mc2(3);
console.log(res);

let res2 = multiplicar(1)(2)(3);
console.log(res2);


/* function multiplicar(a) {

return function (b) {
    return function (c)  {
        return a * b * c
    }
}
}
let mc1 = multiplicar(1);
let mc2 = mc1(2);
let res = mc2(3);
console.log(res);

let res2 = multiplicar(1)(2)(3);
console.log(res2); */



                        /función creadora de html elements /

                        function crearElemento(elemento){
                            const el = document.createElement(elemento)
                            return function(contenido) {
                                return el.textNode = contenido
                            }
                        }
                        
                        const negrita = crearElemento('b')
                        const italica = createElement('i')
                        const contenido = 'Mi contenido'
                        const miElemento  = negrita(italica(contenido)) 
                        // output: <b><i>Mi contenido</i></b>

