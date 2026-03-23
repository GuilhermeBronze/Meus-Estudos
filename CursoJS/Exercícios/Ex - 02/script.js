function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')

    }else{
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <= 5){
                //bebe
                img.setAttribute('src', 'Imagens/bebe menino.png')
            }else if(idade >=6 && idade <= 12){
                //criança
                img.setAttribute('src', 'Imagens/criança menino.png')
            }else if(idade >= 13 && idade <= 17){
                //adolescente
                img.setAttribute('src', 'Imagens/adolescente homem.png')
            }else if(idade >= 18 && idade <= 60){
                //adulto
                img.setAttribute('src', 'Imagens/adulto homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'Imagens/velho.png')
            }





        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade <= 5){
                //bebe
                img.setAttribute('src', 'Imagens/bebe menina.png')
            }else if(idade >=6 && idade <= 12){
                //criança
                img.setAttribute('src', 'Imagens/criança menina.png')
            }else if(idade >= 13 && idade <= 17){
                //adolescente
                img.setAttribute('src', 'Imagens/adolescente mulher.png')
            }else if(idade >= 18 && idade <= 60){
                //adulto
                img.setAttribute('src', 'Imagens/adulto mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'Imagens/velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} com ${idade} anos.`
        imagem.style.textAlign = 'center'
        imagem.appendChild(img)

    }



}