const temp = prompt("Введите температуру в градусах Цельсия:");
getTemp(temp);

function getTemp (Temperature) {
   console.log(`${Temperature}`);
   fart = (9/5)*temp + 32;
   fartRound = Math.round(fart*100)/100
   alert(`Цельсий ${temp}, Фаренгейт ${fartRound}`)
}
