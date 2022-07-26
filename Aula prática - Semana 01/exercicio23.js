let segundos = 33567
let horas = 0
let minutos = 0


while (segundos >= 60){
   segundos -= 60
   minutos++
   if (minutos >= 60){
      minutos -= 60
      horas++
   }
}

let horarioFormatado = horas + ':' + minutos + ':' + segundos
console.log(horarioFormatado)