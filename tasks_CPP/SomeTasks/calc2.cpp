// calculator project in C++

#include <iostream>
#include <cmath>
using namespace std;

// A class to represent a calculator
class Calculator {
  private:
    // The current result of the calculation
    double result;
    // The current operation to perform
    char operation;
    // The current input value
    double input;
    // A flag to indicate if the calculation is finished
    bool done;
  public:
    // A constructor to initialize the calculator
    Calculator() {
      result = 0.0;
      operation = '+';
      input = 0.0;
      done = false;
    }

    // A method to display the calculator
    void display() {
      cout << "Result: " << result << endl;
      cout << "Operation: " << operation << endl;
      cout << "Input: " << input << endl;
      cout << "Enter a number or an operator (+, -, *, /, ^, =)" << endl;
    }

    // A method to get the user input
    void getInput() {
      string s;
      cin >> s;
      if (s == "+") {
        operation = '+';
        calculate();
      }
      else if (s == "-") {
        operation = '-';
        calculate();
      }
      else if (s == "*") {
        operation = '*';
        calculate();
      }
      else if (s == "/") {
        operation = '/';
        calculate();
      }
      else if (s == "^") {
        operation = '^';
        calculate();
      }
      else if (s == "=") {
        operation = '=';
        calculate();
        done = true;
      }
      else {
        try {
          input = stod(s);
          calculate();
        }
        catch (invalid_argument& e) {
          cout << "Invalid input" << endl;
        }
      }
    }

    // A method to perform the calculation
    void calculate() {
      switch (operation) {
        case '+':
          result += input;
          break;
        case '-':
          result -= input;
          break;
        case '*':
          result *= input;
          break;
        case '/':
          if (input != 0) {
            result /= input;
          }
          else {
            cout << "Cannot divide by zero" << endl;
          }
          break;
        case '^':
          result = pow(result, input);
          break;
        case '=':
          result = input;
          break;
        default:
          cout << "Unknown operation" << endl;
          break;
      }
    }

    // A method to check if the calculation is done
    bool isDone() {
      return done;
    }
};

// The main function
int main() {
  // Create a calculator object
  Calculator calc;

  // Loop until the calculation is done
  while (!calc.isDone()) {
    // Display the calculator
    calc.display();
    // Get the user input
    calc.getInput();
  }

  // Display the final result
  calc.display();

  return 0;
}