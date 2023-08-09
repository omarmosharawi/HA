#include <iostream>
#include <cstdlib>
#include <fstream>

using namespace std;

struct Coordinate {
    int row;
    int column;
};

struct StackFrame {
    Coordinate data;
    StackFrame *link;
};

typedef StackFrame* StackFramePtr;

class Stack {
public:

    Stack();
    void push(Coordinate c);
    void push(int x, int y);
    Coordinate pop();
    bool empty() const;

private:
    StackFramePtr top;

};

int main() {
    const int SIZE = 22;
    char mazeArr[SIZE][SIZE];
    char temp;

    Stack st;
    Coordinate start, current;

    ifstream fin("maze.txt");

    for (int q = 0; q < SIZE; q++)
        for (int z = 0; z < SIZE; z++) {
            mazeArr[0][z] = '1';
            mazeArr[q][0] = '1';
            mazeArr[21][z] = '1';
            mazeArr[q][21] = '1';

        }

    for (int i = 1; i < 21; i++) {
        for (int j = 1; j < 21; j++) {

            fin >> temp;
            while (temp == '\n')
                fin >> temp;
            mazeArr[i][j] = temp;
        }
    }
    for (int m = 0; m < SIZE; m++) {
        for (int n = 0; n < SIZE; n++) {
            cout << mazeArr[m][n];
        }
        cout << endl;
    }



    int row, col, count = 0;
    cout << "Where would you like to start?";
    cin >> row >> col;

    start.row = row;
    start.column = col;

//    cout << start.row << " " << start.column;

    st.push(start.row, start.column);

    mazeArr[start.row][start.column] = 's';


    while (st.empty() != true) {
        current = st.pop();

        if (mazeArr[current.row][current.column] == 'E') {
            cout << "I am Free!\n";

            for (int m = 0; m < SIZE; m++){
                for (int n = 0; n < SIZE; n++){
                    cout << mazeArr[m][n];
                }
                cout<< endl;
            }
            break;
            
        } else if (mazeArr[current.row][current.column] != 's')
            mazeArr[current.row][current.column] = '+';

        if (mazeArr[current.row - 1][current.column] == '0' || mazeArr[current.row - 1][current.column] == 'E')
            st.push(current.row - 1, current.column);
        if (mazeArr[current.row + 1][current.column] == '0' || mazeArr[current.row + 1][current.column] == 'E') 
            st.push(current.row + 1, current.column);
        if (mazeArr[current.row][current.column - 1] == '0' || mazeArr[current.row][current.column - 1] == 'E' )
            st.push(current.row, current.column - 1);
        if (mazeArr[current.row][current.column + 1] == '0' || mazeArr[current.row][current.column + 1] == 'E')
            st.push(current.row, current.column + 1);
    }

    if (st.empty() == true) {
        cout << "Help, I am trapped\n";
        
        for (int m = 0; m < SIZE; m++){
            for (int n = 0; n < SIZE; n++){
                cout << mazeArr[m][n];
            }
        cout<<endl;
        }
    }

    return 0;
}

Stack::Stack() : top(NULL) {

}

void Stack::push(Coordinate item) {
    StackFramePtr temp_ptr;
    temp_ptr = new StackFrame;
    temp_ptr -> data = item;
    temp_ptr ->link = top;
    top = temp_ptr;
}

void Stack::push(int x, int y) {
    Coordinate item = {x, y};
    StackFramePtr temp_ptr;
    temp_ptr = new StackFrame;
    temp_ptr->data = item;
    temp_ptr->link = top;
    top = temp_ptr;
}

Coordinate Stack::pop() {
    if (empty()) {
        cout << "Error, cannot pop an empty stack! ";
        exit(1);
    }
    Coordinate result = top->data;
    StackFramePtr temp_ptr;
    temp_ptr = top;
    top = top->link;
    delete temp_ptr;
    return result;
}

bool Stack::empty() const {
    return (top == NULL);
}