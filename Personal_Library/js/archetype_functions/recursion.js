//** Es sumamente importante que comprendas la recursión, teniendo en cuenta que vas a necesitarla casi siempre en functiones donde la complejidad crece. El concepto básico de la recursión es: */

//TODO: ...una función que se ejecuta a sí misma....

//** Tip clave para su funcionamiento: */

//TODO: - Tener un caso base, 
// TODO: - Considerar un quiebre para evitar el infinty loop.

//* Comprender QUÉ HACE TU FUNCIÓN significa la diferencia entre una función recursiva y un loop infinito.*

//-------------------------------------------------------------------------

                                //? RECURSIÓN
/Función para calcular en n° de Fibonacci de un número /
                                function nFibonacci(n) {
                                    if (n<=1) return 1;
                                
                                    return nFibonacci(n -1) + nFibonacci(n -2);
                                  }
// * las derivadas condicionales determinan 2 casos bases
//* Luego la función se llama a si misma para sumar el número anterior de sí mismo y el anterior del anterior.