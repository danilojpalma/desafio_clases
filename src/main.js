import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let impuesto1 = new Impuesto(90000000, 80000);
let cliente1 = new Cliente('Juan', impuesto1);

let cliente2 = new Cliente('Pedro', new Impuesto(100000000, 50000));

console.log(cliente1.nombre)
console.log(cliente1.calcularImpuesto()); 

console.log(cliente2.nombre)
console.log(cliente2.calcularImpuesto());


