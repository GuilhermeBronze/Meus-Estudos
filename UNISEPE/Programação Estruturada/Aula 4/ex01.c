#include <stdio.h>

int main(){
    char nome[50];
    int idade;

    printf("Digite seu nome: ");
    scanf("%s", nome);

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    printf("\nNome: %s\n", nome); 
    printf("Idade: %d\n", idade);


}