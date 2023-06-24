// const myJsonObj={
//         name:"Jeel",
//         eId:107,
//         topic:"Java Script",
//         subTopic:"JSON"
// };
// myJsonObj;
// let myJsonStr=JSON.stringify(myJsonObj);
// myJsonStr;



// let str1="Hellooo";
// let str2="World";
// console.log(str1.charAt(5,6,7),str2[3]);


// const myObj={
//     str1:"Hello",
//     str2:"World",
// }
// console.log(myObj.str1[0],myObj.str2.charAt(4));


// function myFunction(){
//     str1="world";
//     str2= `Hello ${str1}`;
//     return str2;
// }
// console.log(myFunction());
// var myString=myFunction();
// console.log(myString[10]);
// console.log(myString.charAt(1));
 
//concat function
// let str1="Good";
// let str2="Morning";
// let str3="Hello";
// let str4="World";
// let str5=str1.concat(" ",str2," ",str3," ",str4);
// console.log(str5);

// let str="2";
// console.log(str.charCodeAt(0));

// let str="The rain in spain stays mainly plain";
// console.log(str.match('ain'));   //match gives everything like index,input and groups it gives array value
// console.log(str.search('ain'));  //search tells index value
// console.log(str.matchAll('the[1]')); //matchAll() nai samjatu

// let str=123;
// let str2="Helloo";
// console.log(str.toString().padStart(9,"*"));  //leaves space and characters (if mentioned) before string
// console.log(str2.padEnd(10,"0"));   //leaves space after string and characters(if mentioned)


// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj; // a is constant
// let {
//   b: { c: d },
// }=obj; // d is re-assignable
// console.log(obj.b);

// function printName(options){
//   const defaults={
//     fname:"Jeel",
//     lname:"Rajpara",
//   };
//   options=Object.assign(defaults,options);
//   console.log(`${options.fname} ${options.lname}`);
// }
// printName({
//   fname:"xyz",
//   lname:"abc"
// });  //in the following program we used object.assing method to ovewrite same properties inside an object

// let myObj={
//     name:"User",
//     age:20,
//     fullName:{
//         fname:"Jeel",
//         lname:"Rajpara",
//     },
// };
// const {name}=myObj;
// console.log(name);
// const {fullName:{fname}}=myObj;
// console.log(fname);    //nested destructuring

// let myObj={
//     name:"Jeel",
//     age:19,
//     degree:"B.Tech",
// }
// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));

// let abc={a:10,b:15};
// let a=15;
// let{a:newA,b}=abc;
// console.log(a); //15
// console.log(newA); //10

