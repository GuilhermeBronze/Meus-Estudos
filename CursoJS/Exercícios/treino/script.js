function gerar(){

    var selecao = document.querySelector('select#tabuada')

    var fNumero = document.querySelector('input#fNumero')
    var numero = Number(fNumero.value)
    
    var tabuada = 1

    
    

    if(fNumero.value.length == 0 ){

        alert('[ERRO] Campo "Número" não pode estar vazio.')

        selecao.innerHTML = ''
        selecao.size = 1
        var tabela = document.createElement('option')
        tabela.text = 'Digite um número acima'
        selecao.append(tabela)

    }else{

        selecao.innerHTML = ''
        selecao.size = 10
        for(fNumero; tabuada <=10 ; tabuada ++){
            var tabela = document.createElement('option')
            tabela.text = `${numero} x ${tabuada} = ${numero*tabuada}`
            selecao.appendChild(tabela)
        }

    }

    


}