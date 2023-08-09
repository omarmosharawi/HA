#include <iostream>
using namespace std;

int main() {
    char op;
    float num1, num2;

    cout << "|||========== Welcome To The System ==========|||\n" <<endl;

    cout << "Enter operator either (+) or (-) or (x) or (/): ";
    cin >> op;

    if (op == '+', '-', '*', '/')
    {

    cout << "Enter operands"<<endl;
    cout << "Number One: ";
    cin >> num1 ;
    cout << "Number Two: ";
    cin >> num2 ;

    cout << "Your operation is: " << num1 << " " << op << " " << num2 << endl;

    switch(op) {
        case '+':
            cout << "Result= " << num1+num2 <<endl<<endl;
            break;

        case '-':
            cout << "Result= " << num1-num2 <<endl<<endl;
            break;

        case '*':
            cout << "Result= " << num1*num2 <<endl<<endl;
            break;

        case '/':
            cout << "Result= " << num1/num2 <<endl<<endl;
            break;

        default:
            // If the operator is other than +, -, * or /, error message is shown
            cout << "Error! operator is not correct"<<endl<<endl;
            break;
    }
    }
    else
    {
        cout<<"Error!";
    }

    cout << "- Thank you for using this app by Omar M. Sharawi. ❤" <<endl;

    return 0;
}
