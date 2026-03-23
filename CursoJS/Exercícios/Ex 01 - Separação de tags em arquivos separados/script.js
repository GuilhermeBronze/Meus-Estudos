function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 0

msg.innerHTML = `Agora são ${hora} horas.`

if(hora >= 6 && hora <= 12){
    img.src="Imagens/manha.png"
    document.body.style.background = '#f2b739' 

}else if(hora >= 13 && hora <= 17){
    img.src="Imagens/tarde.png" 
    //document.body.style.background = '#a4b5d1'

}else{
    img.src="Imagens/noite.png" 
    document.body.style.background = '#395968'
}

}