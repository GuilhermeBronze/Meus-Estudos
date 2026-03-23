let numero = []
let analise = document.querySelector('div#analise')

function adicionar(){

    let fNumero = document.querySelector('input#fNumero')
    let cNumero = Number(fNumero.value) //converted number
    
    let listagem = document.querySelector('select#listagem')
    
    let addLista = document.createElement('option')
    
    
    if(fNumero.value.length == 0 || fNumero.value <= 0){

        alert('[ERRO] O campo "Número" não pode ser 0 ou estar vazio.')

    }else if(numero.indexOf(cNumero) > -1){
        
        alert('[ERRO] Valor já inserido.')

    }else if(cNumero > 100){

        alert('[ERRO] O número inserido não pode ser maior que 100.')

    }else{

        addLista.text = (`Valor ${cNumero} adicionado.`)
        listagem.appendChild(addLista)

        numero.push(cNumero)

        numero.sort((a, b) => a - b)
        console.log(numero)
        
    }
    analise.innerHTML=''
    fNumero.value = ''
    fNumero.focus()
}

function finalizar(){

    if (numero.length <= 0){
        alert('[ERRO] É preciso adicionar ao menos um número.')

    }else{    

        let maiorValor = Math.max(...numero)
        let menorValor = Math.min(...numero)
        
        let valoresSomados = 0
    
        for(posicao in numero){

            valoresSomados += numero[posicao]
        }

        media = valoresSomados/numero.length

        analise.innerHTML += `Ao todo, temos ${numero.length} números cadastrados.<br>`
        analise.innerHTML += `O maior valor informado foi ${maiorValor}.<br>`
        analise.innerHTML += `O menor valor informado foi ${menorValor}.<br>`
        analise.innerHTML += `Somando todos os valores, temos ${valoresSomados}.<br>`
        analise.innerHTML += `A média dos valores digitados é ${media}.<br>`
    
    }
}