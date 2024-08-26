 const precoCombustivel = 5.79;
 const kmPorLitro = 7.3;
 const distanciaKm = 120;
 
 const litrosConsumidos = distanciaKm/kmPorLitro;
 const gasto = litrosConsumidos*precoCombustivel;

 console.log(gasto.toFixed(2)) //.toFixed diminui a quantidade de números decimais