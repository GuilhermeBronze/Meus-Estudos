#include <stdio.h>
#include <locale.h>
#include <stdlib.h>


int main(void){

    setlocale(LC_ALL, "Portuguese");
    system("chcp 65001 > nul"); 

    int a, b, choice;

    printf("Digite um número para calcular: ");
    scanf("%i", &a);

    printf("Digite outro número: ");
    scanf("%i", &b);

    printf("\nEscolha o tipo de operação: ");
    printf("\nDigite 1 para somar (+)\nDigite 2 para subtrair (-)\nDigite 3 para Multiplicar (*)\nDigite 4 para dividir (/)\n");
    scanf("%i", &choice);

    switch (choice)
    {
    case 1:
        printf("%i\n", a+b);
        break;
    
    case 2:
        printf("%i\n", a-b);
        break;

    case 3:
        printf("%i\n", a*b);
        break;

    case 4:
        printf("%.1f\n",(float) a/b);
        break;

    default:
        printf("vai toma no cú então");
        break;
    
    }

    system("pause");
    return 0;
}