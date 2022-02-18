"use strict";

let nombre = "Javier";
let edad = 59;

if (edad < 12) {
  console.log(`${nombre} le correspone el descuento infantil`);
} else if (edad >= 12 && edad < 30) {
  console.log(`${nombre} tiene el descuento juvenil`);
} else if (edad > 60) {
  console.log(`${nombre} tiene el descuento de jubilados`);
} else {
  console.log(`${nombre} no tiene ningún descuento`);
}
