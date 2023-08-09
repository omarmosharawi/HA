#include <iostream>
#include <algorithm>
#include <array>
#include <cmath>
using namespace std;

int main ()
{

    double gpa;
    int id;
    string name_1 , name_2 , name_3;
    
    cout<<"|||======= Welcome To The System =======|||\n"<<endl;
    cout<<"Enter your First Name: ";
    cin>>name_1;
    cout<<"Enter your Second Name: ";
    cin>>name_2;
    cout<<"Enter your Third Name: ";
    cin>>name_3;
    cout<<"Enter your ID: ";
    cin>>id;
    cout<<"========================================"<<endl;
    cout<<"Welcome "<<name_1<<" "<<name_2<<" "<<name_3<<"."<<endl;
    cout<<"Your ID is: "<<id<<endl<<endl;
    cout<<"Enter your Grade: ";
    cin>>gpa; cout<<endl;
    
    if(gpa>49)
    {
        if (gpa>=50 && gpa<=60)
        {cout<<"Your GPA Is " <<gpa << " = (E)\n"<<endl;}
        else if (gpa>=61 && gpa<=70)
        {cout<<"Your GPA Is " <<gpa << " = (D)\n"<<endl;}
        else if (gpa>=71 && gpa<=80)
        {cout<<"Your GPA Is " <<gpa << " = (C)\n"<<endl;}
        else if (gpa>=81 && gpa<=85)
        {cout<<"Your GPA Is " <<gpa << " = (B)\n"<<endl;}
        else if (gpa>=86 && gpa<=91)
        {cout<<"Your GPA Is " <<gpa << " = (A) ^_^\n"<<endl;}
        else if (gpa>=92 && gpa<=100)
        {cout<<"WOW! Your GPA Is " <<gpa << " = (A+) You are a great! so happy for you.\n"<<endl;}
    }
    else 
    {cout<<"I'm Sorry! Your GPA Is (F) so sad for you T_T\n\n";}
    
    /*
    we can use it:
    (gpa>49)? cout<<"You are Successed":cout<<"You are Failed";
    or it
    cout<<(gpa>49 ? "You are Successed" : "You are Failed");
    */
	
   cout<<"========================================"<<endl;
   cout<<"- Thank you for using this app by Omar M. Sharawi. ❤";

    return 0;

}