console.log("holas mundo");

const arreglo = [1, 2, 3, 4];

console.log(arreglo);

let arreglo2 = [...arreglo, 5];

console.log(arreglo2);

const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});

console.log(arreglo3);

const saludar = function (nombre) {
  return nombre;
};
