function calcular(){

var fInicio = document.querySelector('input#inicio')
var fFinal = document.querySelector('input#final')
var fPasso = document.querySelector('input#passo')
/* f no inicio = formulário /// recebe o valor digitado pelo usuário */ 
var inicio = Number(fInicio.value)
var final = Number(fFinal.value)
var passo = Number(fPasso.value)

var preparo = document.querySelector('div#preparo')

if(fInicio.value.length == 0 || fFinal.value.length == 0 || fPasso.value.length == 0 ){
    //window.alert('[ERRO] Verifique os dados e tente novamente.')
    preparo.innerHTML='[ERRO] Verifique os dados e tente novamente.'
}else if(fPasso.value <= 0){
    preparo.innerHTML='[ERRO] O valor de "Passo" não pode ser 0 ou negativo.'
}else{
    preparo.innerHTML='Contando: <br>'
    
    if(inicio<final){
        //crescente
        for(var contador = inicio; contador <= final; contador += passo) {
            preparo.innerHTML += ` 👉 `
            preparo.innerHTML += `${contador}` 
    }
    }else{
        //regressiva
        for(var contador = inicio; contador >= final; contador -= passo) {
            preparo.innerHTML += ` 👉 `
            preparo.innerHTML += `${contador}` 
    }
}
        preparo.innerHTML += `🤚`



}

}