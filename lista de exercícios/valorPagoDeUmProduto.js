const precoEtiqueta = 250;
const formaPagamento = 1; //forma 1 = débito, forma 2 = dinheiro ou pix, forma 3 = 2x no cartão, else = acima de 2x

if (formaPagamento === 1) {
    const valorAPagar = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log('valor a pagar: ' + valorAPagar.toFixed(2) + ' Reais');
} else if (formaPagamento === 2) {
    const valorAPagar = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log('valor a pagar: ' + valorAPagar.toFixed(2) + ' Reais');
} else if (formaPagamento === 3) {
    const valorAPagar = precoEtiqueta;
    console.log('valor a pagar: ' + valorAPagar.toFixed(2) + ' Reais');
} else {
    const valorAPagar = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log('valor a pagar: ' + valorAPagar.toFixed(2) + ' Reais');
}