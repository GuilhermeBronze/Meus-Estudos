function calcular(){

var fNumero = document.querySelector('input#num')
var numero = Number(fNumero.value)

var selecao = document.querySelector('select#tabuada') 

var tabuada = 1

selecao.innerHTML = ''

if(fNumero.value.length == 0){
    window.alert('[ERRO] Verifique o número informado e tente novamente.')
}else{
    for(model = numero; tabuada <=10 ;tabuada ++){
        var item = document.createElement('option')
        item.text = `${model} x ${tabuada} = ${model*tabuada}`
        selecao.appendChild(item)
        

  }
}




















}