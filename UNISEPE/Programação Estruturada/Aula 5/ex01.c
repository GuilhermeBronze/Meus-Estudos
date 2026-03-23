#include <stdio.h>

struct aluno{

    char nome[50];
    int idade;
    float media;

};

int main(){

    struct aluno aluno1;

    printf("Digite o nome do aluno: ");
    scanf("%s", aluno1.nome);

    printf("Digite sua idade: ");
    scanf("%i", &aluno1.idade);

    printf("Digite a media do aluno: ");
    scanf("%f", &aluno1.media);

    printf("Dados do aluno:\n");

    printf("Nome: %s\n", aluno1.nome);
    printf("Idade: %d\n", aluno1.idade); 
    printf("Media: %.2f\n", aluno1.media);




    return 0;



}