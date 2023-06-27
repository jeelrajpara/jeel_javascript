// function oddEven(){
//     for(let i=0;i<=10;i++){
//         if(i%2==0){
//             console.log("Even number",i);
//         }
//         else{
//             console.log("Odd number",i);
//         }
//     }
// }
// oddEven();

// function largestInt(num1,num2){
//     if(num1>num2){
//         return num1;
//     }
//     else{
//        return num2;
//     }
// }
// console.log("The largest number is:",largestInt(5,6));

// function signOfNum(x,y,z){
//     if(x>0 && y>0 && z>0){
//          return "Sign is +";
//     }
//     else if(x>0 && y<0 && z<0){
//         return "Sign is +";
//     }
//     else if(x<0 && y>0 && z<0){
//         return "Sign is +";
//     }
//     else {
//         return "Sign is -";
//     }
// }
// console.log(signOfNum(-1,-2,-3));
// console.log(signOfNum(-1,2,3));
// console.log(signOfNum(1,2,3));
// console.log(signOfNum(1,-2,3));

// let sum=0;
// const n=10;
// for(i=0;i<=n;i++){
//     sum+=i;
// }
// console.log('sum',sum);

// var num=[1,2,-2,3,-4]
// for(var i=num.length -1;i>=0;i--){
//     console.log(num[i]);
// }

// for(i=0;i<=2;i++){
//     for(j=0;j<=2;j++){
//         console.log(`(${i},${j})`);
//     }
// }

// for(i=0;i<=10;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }
 
// var num=[1,2,5,6,10,22]
// for(var i=0;i<num.length;i++){
//     if(num[i]%2!=0){
//       continue;
//     }
// }
// console.log(num[i]);

// for(i=1;i<=45;i++){
//     if(i%3==0 && i%5==0){
//         console.log("Fizz Buzz")
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     console.log(i);
// }

//Here we have declared same array with 3 different methods
// var arr=["Element 1","Element 2","Element 3","Element 4","Element 5"]
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
//declaration with for loop is most common declaration that allows accesing an array by its index value.

// var arr=["Element 1","Element 2","Element 3","Element 4","Element 5"]
// for(index in arr){
//     console.log(arr[index]);
// }
//We can access an array with for..in loop but it is not the generally advised to do so because this loop is specially designed to access an object property.
// var arr=["Element 1","Element 2","Element 3","Element 4","Element 5"]
// for(index of arr){
//     console.log(index);
// }
//declaration with for..of loop is the most convinient way to declare an array. In this we can access array without worring for its index values.

// var obj={fame:"Jeel",lname:"Rajpara",eid:119}
// for(let key in obj){
//     console.log(obj[key]);
// }

// let i=0;
// while(i<10){
//      i++;
//      console.log(i);
// }

// let i=0;
// do{
//      i++;
//      console.log(i);
// }
// while(i<10);

//difference between break and continue
//break directly loop j break kari de etle ena pachi game etli moti condition hoi jyathi break karyu hoi ena pachi code excecute na thay
//continue statement e iteration j stop thay etle ena pachi nu iteration continue thay

// var marks=75;
// switch(marks){
//     case(marks>=90 && marks<=100):console.log("Grade A+");
//     break;

//     case(marks>=75 && marks<=90):console.log("Grade A")
//     break;

//     case(marks>=65 && marks<=75 ):console.log("Grade B");
//     break;

//     default:console.log("Grade A+");
// } 
// in switch case we cannot test for logical equality this is written in article but still here we get the answer why?
//in if..else for number of statements we need same number of decisions whereas in switch case we need that much cases in single expression
//in if..else either the block of if or block of else is executed whereas in switch the block is executes until it finds break.
//for multiple if else statements the speed of execution will be slow which is not a case for switch
//difficult to edit and understand if..else but not the same for switch
//switch case is used to choose between numerous options whereas if..else is used to choose between two options


// let str="Hello world";
// console.log(str.replace("world"," "));

// console.log(20>10>5);  how?

// let obj1={a:12,b:30};
// let obj2=Object.assign({a:12},obj1);
// obj1.a=20;
// console.log(obj2.a);  //12
// obj2.a=30;
// console.log(obj1.a); //20
// console.log(obj2.a); //12

// let obj3={a:15,b:20};
// let obj4={a:20};
// let obj5=Object.assign(obj3,obj4)
// obj3.a=25;
// console.log(obj3.a);  //25
// console.log(obj4.a); //20
// console.log(obj5.a); 
// obj4.a=30;
// console.log(obj4.a); //30
// console.log(obj5.a); //25 here target takes the property of source

let target={a:10,b:5}
let source={a:1,b:2}
let result=Object.assign(target,source)
// target.a=50;
console.log(source);
console.log(target);
console.log(result);
