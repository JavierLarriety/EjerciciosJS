"use strict";

let startTime = 8;
let endTime = 22;

//operador ternario '?'
// condicion?val_si_cond_true:val_si_cond_false
// true?'Stefano':'Ana'

for (let h = startTime; h <= endTime; h++) {
  let cucu = "";
  let hora = h;
  let franjaHoraria = "AM";
  if (h >= 13) {
    hora -= 12;
    franjaHoraria = "PM";
  }

  for (let c = 0; c < hora; c++) {
    cucu += "cucu ";
  }

  console.log(`${hora < 10 ? 0 : ""}${hora}:00 ${franjaHoraria}`, cucu);

  // console.log(`${h < 10 ? 0 : ""}${h}:00`, "cucú ".repeat(h));
}
