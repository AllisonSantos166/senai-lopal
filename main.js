// let valor = +prompt("Digite o valor da compra: ")

// if (valor <= 100.00) {
//     alert("sem desconto")
// }

// else if (valor <= 299.99){
//     let valor_total = valor * 0.9
//      alert(`10% de desconto, ${valor_total}`)  
// }
// else if (valor <= 499.99){
//     let valor_total = valor * 0.8
//      alert(`20% de desconto, ${valor_total}`) 
// }
// else {
//     let valor_total = valor * 0.7
//      alert(`30% de desconto, ${valor_total}`)
// }

let valor1 = +prompt("Digite o valor da compra:")
let desc1 = +prompt("Digite o valor do desconto:")

let sla = desc1 / 100
// console.log(sla)
let desc_total = valor1 * sla
// console.log(desc_total) professor colocou pra testar o código
alert(`${desc_total}`)