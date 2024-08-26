const precoGasolina = 5.40;
const precoEtanol = 4.30;
const kmPorLitro = 7.5;
const distanciaKm = 120;
const tipoCombustivel = 'Gasolina'

const litrosConsumidos = distanciaKm / kmPorLitro;

if(tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}