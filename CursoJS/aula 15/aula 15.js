let num = [1, 2, 3, 4, 5, 6] //cria uma variavel composta 

num[6] = 7 // define que o valor "7" será adicionado obrigatóriamente a casa de número 6

num.push(7) // define que o valor "7" será adicionado a próxima casa disponivel

num.length // mostra o tamanho total da variavel

num.sort() // ordena todos os elementos da variavel em ordem crescente

for(posicao in num){    } // tag de repetição especifica para variaveis compostas.

num.indexOf(5) // mostra a casa onde o numero selecionado (5) se encontra dentro da varíavel, nesse caso, casa 4.
// se o numero do parametro não existir dentro da variavel, o método sempre retornará "-1".

console.log(num)