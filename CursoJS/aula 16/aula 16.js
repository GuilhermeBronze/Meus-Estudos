/*
function parimpar(n){

if (n % 2 == 0 ){
    return "numero par"
}else{
    return "numero impar"
}
}
teste = parimpar()
console.log(teste)
*/

/*
function soma(n1=0, n2=0){
    return n1 - n2
}
console.log(soma(3, 5)) 
*/
/*
function fatorial(n){

    let fat = 1
    for(c = n; c > 1; c--){

        fat *= c
    }
    return fat
}
console.log(fatorial(6))
*/

// o ato de chamar uma função dentro dela mesma é chamado "Recursividade" 

function fatorial2(n){

    if (n == 1){
        return 1
    } else {
        return n * fatorial2(n-1)
    }
}
console.log(fatorial2(5))