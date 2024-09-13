

let promesaDeUmNúmero = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000);
})

promesaDeUmNúmero
    .then((valor) => {
        console.log(valor)
        return valor + 10
    })
    .then((valor) => {
        console.log(valor)
    })
    .catch((valor) => {
        console.log(valor)
    })
    .finally(() => {
        console.log('Finalizou')
    })

console.log('Aqui será executado primeiro!')