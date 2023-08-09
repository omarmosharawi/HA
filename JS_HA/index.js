//alert when you open the page
alert('Hello');

// let can be upgrade variable // we should use let because it more available and less porblems
let Name = 'Omar';
let Age = 20;
var name = 'omar';
var age = 20;
console.log(Age);
console.log(Name);
console.log(name);
console.log(age);

// const can't change the variable because it's fixed
const address = '53st';
console.log(address);

//array
let Array = ['omar','mohamed','hussien','ali'];
console.log(Array);

//mathmatic oprator
let a=7;
let b=0;
console.log(a+b);
console.log(a++);
console.log(++b);

//comparsion
console.log('a equal b?',a===b);
console.log('a not equal b?',a!==b);

//logic oprator
let c=true;
let d=false;
console.log('Accept',c||d);
console.log('Not Accept',c&&d);

//array
const testone = ['omar','mariam','adel'];
for(let i;i<testone.length;i++)
{
    console.log(testone);
}

//training
let cart= [0,10,20,30,40,50,60,70,80,90,100];
let total=0;
for(let item of cart)
{
    total+=item;
}
console.log(total);

//training
const data=[5,true,'hello',false,'world',2];
for(let i;i<data.length;i++)
{
    if(typeof data[i] === 'string') console.log(data[i]);
}

//training
let rows = prompt ('please enter rows count.')
for(let row=1; row <= rows ; row++){
    let stars = '';
    for (let i=0 ; i<row ; i++){
        stars+= '*';
    }
    console.log (stars);
}

//Function
function FunTest()
{
    console.log('Welcome To The System');
}
FunTest();

//Parameter
function filterarray (array,type){
    for (let chekfilterarray of array){
        if (typeof chekfilterarray === type)
        console.log(chekfilterarray);
    }
}
filterarray(['omar','mariam','adel',1,2,3,4,5,6,7],'number'); // can change number to string

//Returning Value From Function
function sumofnumbers(){
    return 1+2+3+4+5+6+7+8+9+10;
    }
    const result =sumofnumbers();
    //console.log(result);
    function multiplyNumbers(num1 , num2 ){
        return num1*num2;
        };
        const product =multiplyNumbers(2,3);
        console.log(product);

//arguments //we can use ...args
function sumtest(e,f){
    let totaltest = 0;
    for (let checksumtest of arguments)
    {
        totaltest +=checksumtest;
    }
    return totaltest;
}
const resultsumtest = sumtest(1,2,3,4,5,6,7);
console.log (resultsumtest);

//training
function IsPrime(primenum){
    for(let i;i<primenum;i++){
        if(primenum%i===0)return false;
    }
    return primenum>1;
}
function prims(maxprimenum){
    for(let i=2; i<maxprimenum; i++){
        if(IsPrime(i))console.log(i);
    }
}
let numprime = prompt('please enter number to check prime number');
prims(numprime);

//Array oprations
let arrayop=['a','b','c'];
    // we can use any method depending on your program.
arrayop[3]='d'; //add to array
arrayop[arrayop.length]='d'; //another method to add to array
arrayop.push(); // increase at the end of array
arrayop.unshift(); // increase in front of array
arrayop.pop(); // remove last element from array
arrayop.shift(); // remove first elemet form array
arrayop.splice(); // arrayop.splice(index,numbertobedeleted,elementstoadd)
arrayop.slice(); // slice is used when we want a copy of an array without changing original one
arrayop.sort(); // sort alphabetically or numerically //should use .sort((a,b)=>a-b) to solve problem when we need to sort numbers
arrayop.reverse();// reverse order of elements
arrayop.join(); // join all elemnts with specific string
arrayop.concat(); // concatinate two arrays into single array
arrayop.indexOf(); // find index value of given item
arrayop.find(); // find index value with terms ex: return num>10 //print first value
arrayop.filter(); // find specfic index value ex: return num>10 //print all value
arrayop.findIndex(); // find index value agree with terms // print first value of first number agree with terms
arrayop.lastIndexOf(); // find last index value of givne item
arrayop.includes(); // ex:check whether it contains some particular item or not (true or false)
arrayop.forEach(); // use it to Traversing over the elements of the Array
//array function reverse
function reverse(arr){
    for(let i in arr){
        arr.splice(i,0,arr.pop);
    }
    return arr;
}
console.log(reverse(arrayop));

//Sagittal function   //We use it to facilitate the programmer and reduce the program code.
// parameter => { statement }
let log=msg => console.log(msg);
log('Hello ^_^');

//Opject Orianted Programming
let student = {
    name:'Omar', age:20, level:3,
    hello: function(){
        console.log('Hello' + this.name + ' ' + this.age + ' ' + this.level);
    },
    pass: function(){
        this.age++; this.level++;
    }
};
console.log(student);
console.log(student.name)
console.log(student['name'])
   // or store value in another variable and called it.
   const attribute = 'name';
   console.log(student[attribute]);
student.hello();
student.pass();
//Constructor
function StdInfo(StdName,StdAge,StdLevel){
    this.name= StdName;
    this.age= StdAge;
    this.level= StdLevel;

    this.hello= function(){
        console.log(this.name + ' ' + this.age + ' ' + this.level)
    }
    this.pass= function(){
        this.age++;
        this.level++;
    }
}
const std1= new StdInfo ('Omar', 20 , 7 );
const std2= new StdInfo ('Mariam',15,3);
const std3= new StdInfo ('Adel',10,1);
std1.hello();
std1.pass();
let StdArray=[
    new StdInfo ('Mohamed',18,5),
    new StdInfo ('Abdallah'),
    new StdInfo ('Saif')
]
StdArray.hello();
StdArray.pass();

//Date
let myDate = new Date(2003,7,27,7,30,0);
myDate.setDate();//set day of month
myDate.setMonth();// set Month (zero based index )
myDate.getFullYear();//get year
myDate.getMonth();// get the current month zero-based index
myDate.getDate();// get Day of month
myDate.getHours();// Get hours from midnight to noon as a number between 0 and 23
myDate.getMinutes();//Get minutes after the hour as a number between 0 and 59
myDate.getTime();//returns milliseconds since January 1st, 1970 UTC
console.log(myDate);

//regular experssion
const str="Welcome To Nova Hosting Company";
const stranother= /Welcome To ([a-zA-z]+)/;
console.log(stranother.test(str));
console.log(stranother.exec(str));
str.match(/Welcome/);
str.replace('Nova','Omar');
str.search("host");
str.split('');

//how to face the problem
try{
    console.log('Start of try');
    unknownCode;
    console.log('End of try');
}
catch(error){
    console.log('Ooops!!! there is an error!', error);
}
finally{
    console.log('Reached the finally statement.');
}
//example
function sum(numA,numB){
    if(typeof numA !== 'number') throw new Error('the first parameter must be a number');
    if(typeof numB !== 'number') throw new Error('the second parameter must be a number');

    return numA+numB;
}
try{
    console.log('Apple',7);
}
catch(error){
    console.log('Ooops!!! there is an error!', error)
}
