#include <iostream>
#include <locale>
#include <iomanip>

using namespace std;

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	char l1 = ' ', l2 = ' ', l3 = ' ', l4 = ' ', l5 = ' ', l6 = ' ', l7 = ' ', l8 = ' ', l9 = ' ';
	int contador = 0, vencedor = 0, jogador1, jogador2;
	
	while (contador < 9){
		int j1 = 0, j2 = 0;
		
		cout << "Jogo :       " << "		Casas:       " << endl;
		cout << "+---+---+---+" << "		+---+---+---+" << endl;
	    cout << "| " <<l1<<" | " <<l2<<" | " <<l3<<" |" << "		| 1 | 2 | 3 |" << endl;
	    cout << "+---+---+---+" << "		+---+---+---+" << endl;
	    cout << "| " <<l4<<" | " <<l5<<" | " <<l6<<" |" << "		| 4 | 5 | 6 |" << endl;;
	    cout << "+---+---+---+" << "		+---+---+---+" << endl;
	    cout << "| " <<l7<<" | " <<l8<<" | " <<l9<<" |" << "		| 7 | 8 | 9 |" << endl;
	    cout << "+---+---+---+" << "		+---+---+---+\n" << endl;
	    
	    if(l1 == 'O' && l2 == 'O' && l3 == 'O'||
		l4 == 'O' && l5 == 'O' && l6 == 'O'||
		l7 == 'O' && l8 == 'O' && l9 == 'O'||
		l1 == 'O' && l4 == 'O' && l7 == 'O'||
		l2 == 'O' && l5 == 'O' && l8 == 'O'||
		l3 == 'O' && l6 == 'O' && l9 == 'O'||
		l1 == 'O' && l5 == 'O' && l9 == 'O'||
		l3 == 'O' && l5 == 'O' && l7 == 'O'){
			cout << "Jogador 2 venceu!" << endl;
			vencedor = 1;
			break;	
		}
	    
	    cout << "Vez do jogador X! Escolha uma casa: ";
		while (j1 == 0){
			cin  >> jogador1;	   
			switch(jogador1)
			{
				case 1:
					if (l1 == 'X' || l1 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l1 = 'X';
						j1++;
					}
				break;
				case 2:					
					if (l2 == 'X' || l2 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l2 = 'X';
						j1++;	
					}
				break;
				case 3:
					if (l3 == 'X' || l3 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l3 = 'X';
						j1++;	
					}
				break;
				case 4:
					if (l4 == 'X' || l4 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l4 = 'X';
						j1++;	
					}
				break;
				case 5:
					if (l5 == 'X' || l5 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l5 = 'X';
						j1++;	
					}
				break;
				case 6:
					if (l6 == 'X' || l6 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l6 = 'X';
						j1++;	
					}
				break;
				case 7:
					if (l7 == 'X' || l7 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l7 = 'X';
						j1++;	
					}
				break;
				case 8:
					if (l8 == 'X' || l8 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l8 = 'X';
						j1++;	
					}
				break;
				case 9:
					if (l9 == 'X' || l9 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l9 = 'X';
						j1++;	
					}
				break;
				default: cout << "Opção inválida! " << endl;
			}
		}
		
		contador++;
		system("cls");
		
		cout << "Jogo :       " << "		Casas:       " << endl;
		cout << "+---+---+---+" << "		+---+---+---+" << endl;
	    cout << "| " <<l1<<" | " <<l2<<" | " <<l3<<" |" << "		| 1 | 2 | 3 |" << endl;
	    cout << "+---+---+---+" << "		+---+---+---+" << endl;
	    cout << "| " <<l4<<" | " <<l5<<" | " <<l6<<" |" << "		| 4 | 5 | 6 |" << endl;;
	    cout << "+---+---+---+" << "		+---+---+---+" << endl;
	    cout << "| " <<l7<<" | " <<l8<<" | " <<l9<<" |" << "		| 7 | 8 | 9 |" << endl;
	    cout << "+---+---+---+" << "		+---+---+---+\n" << endl;
	    
		if(vencedor == 0 && contador == 9){
			cout << "Deu velha!";
			break;
		}
	   
	   	if(l1 == 'X' && l2 == 'X' && l3 == 'X'||
		l4 == 'X' && l5 == 'X' && l6 == 'X'||
		l7 == 'X' && l8 == 'X' && l9 == 'X'||
		l1 == 'X' && l4 == 'X' && l7 == 'X'||
		l2 == 'X' && l5 == 'X' && l8 == 'X'||
		l3 == 'X' && l6 == 'X' && l9 == 'X'||
		l1 == 'X' && l5 == 'X' && l9 == 'X'||
		l3 == 'X' && l5 == 'X' && l7 == 'X'){
			cout << "Jogador 1 venceu!" << endl;
			vencedor = 1;
			break;	
		}

		cout << "Vez do jogador O! Escolha uma casa: ";
		while (j2 == 0){
			cin  >> jogador2;	   
			switch(jogador2)
			{
				case 1:
					if (l1 == 'X' || l1 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l1 = 'O';
						j2++;
					}
				break;
				case 2:					
					if (l2 == 'X' || l2 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l2 = 'O';
						j2++;	
					}
				break;
				case 3:
					if (l3 == 'X' || l3 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l3 = 'O';
						j2++;	
					}
				break;
				case 4:
					if (l4 == 'X' || l4 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l4 = 'O';
						j2++;	
					}
				break;
				case 5:
					if (l5 == 'X' || l5 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l5 = 'O';
						j2++;	
					}
				break;
				case 6:
					if (l6 == 'X' || l6 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l6 = 'O';
						j2++;	
					}
				break;
				case 7:
					if (l7 == 'X' || l7 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l7 = 'O';
						j2++;	
					}
				break;
				case 8:
					if (l8 == 'X' || l8 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l8 = 'O';
						j2++;	
					}
				break;
				case 9:
					if (l9 == 'X' || l9 == 'O') cout << "Posição inválida! Digite outra: ";
					else{
						l9 = 'O';
						j2++;	
					}
				break;
				default: cout << "Opção inválida! " << endl;
			}
		}
		
		system("cls");
		contador++;
	}
	
}
