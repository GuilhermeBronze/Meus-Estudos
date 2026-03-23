#include <stdio.h>

struct Aluno{

    char nome[50];
    int idade;
    float nota1;
    float nota2;
    float media;


};


int main(){

    struct Aluno aluno1;
    
    

    printf("Digite o nome do aluno: ");
    scanf("%s", aluno1.nome);

    printf("Digite a idade do aluno: ");
    scanf("%d", &aluno1.idade);

    printf("Digite a primeira nota do aluno: ");
    scanf("%f", &aluno1.nota1);

    printf("Digite a segunda nota do aluno: ");
    scanf("%f", &aluno1.nota2);

    printf("Dados do aluno:\n");

    printf("\nNome: %s", aluno1.nome);
    printf("\nIdade: %d", aluno1.idade);

    aluno1.media = (aluno1.nota1 + aluno1.nota2) /2;

    printf("\nMedia: %.2f", aluno1.media);

    if (aluno1.media >= 6){
        
        printf("\nAluno aprovado!");

    }else{

        printf("Aluno reprovado");

    };
    

    


    return 0;
}