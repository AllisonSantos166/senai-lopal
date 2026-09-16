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

// let valor1 = +prompt("Digite o valor da compra:")
// let desc1 = +prompt("Digite o valor do desconto:")

// let sla = desc1 / 100
// // console.log(sla)
// let desc_total = valor1 * sla
// // console.log(desc_total) professor colocou pra testar o código
// alert(`${desc_total}`)

alert("Exercício: Inscrição em Maratona (fluxo encadeado)")

let idade = +prompt("Digite sua idade:")
    if (idade >= 16){
        if (idade >= 60){
        let sla1 = prompt("Digite se você precisa de atestado: (sim/não)")
    if(sla1 === "não"){
        alert("Recusado na etapa 2")
        process.exit(1)
    }
    }
    let distance = +prompt("Digite a distância:")
    // console.log(!(distance === 5 || distance === 10 || distance === 21 || distance === 42));
    if (!(distance === 5 || distance === 10 || distance === 21 || distance === 42)){
        alert ("Reprovado na etapa 3")
        process.exit(1)
    }
    else{
        let tempo = +prompt("Digite o tempo:")
        let sla3 = tempo / distance
        let sla4 = ""
        
        if (sla3 >7){
            sla4= "Amador"
        }
        else if(sla3 > 5.5){
            sla4 = "Competitivo"
        }
        else {
            sla4 = "Elite"
        }
        alert (`Pace ${sla3.toFixed(2)} -> ${sla4}`)
    }
}
    else{
        alert("Reprovado na etapa 1")
}

alert(`RESUMO FINAL \n IDADE: ${idade} \n DISTÂNCIA: ${distance} \n TEMPO: ${tempo} \n PACE: ${sla3} -> ${sla4}`)// não ta funcionando