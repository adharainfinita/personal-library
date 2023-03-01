//** 3 formas de factorizar una función*/
                        //? Sin recursión:

//TODO: ---------------BUCLE FOR-------------------

factorial = function (num) {
  if (num === 1 || num === 0) {
    return num;
  }

  for (var i = num; i >= 1; i--) {
    num *= i;
  }
  return num;
};

//TODO: ---------------BUCLE WHILE-------------------

factorial = function (num) {
  if (num === 1 || num === 0) {
    return num;
  }

  while (num > 1) {
    num *= num - 1;
  }
  return num;
};

                        //? CON RECURSIÓN (recomendada)


function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}
