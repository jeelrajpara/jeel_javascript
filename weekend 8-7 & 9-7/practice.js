//1.
//input=["JS","CSS","JQuery"]  output="JS","CSS","JQuery"
// let a=["JS","CSS","JQuery"];
// let result1=a.reduce((accu,curr)=>{
//        return accu +'","'+curr;
// })
// result1='"'+result1+'"'
// console.log(result1);
// //input:same output: "JS,CSS,JQuery"
// let result2='"' + a.join(" , ")+'"';
// console.log(result2);

//2.
// let a=["JS","CSS","JQuery"];
// let d={
//     name:"JS",
//     label:a.map(e=>e.id==="JS").label
// }
// console.log(d); 
//error: cannot read properties of undefined (reading 'label')
//after removing .label output will be {name:'JS',label:undefined}

//3.
// function reverseWord(pass_string){
//     let split_word=pass_string.split(" ");
//     // console.log(split_word);
//     let newArray=[];
//     for(let value of split_word){
//         let splitLetter=value.split("")
//         // console.log(splitLetter)
//         splitLetter.reverse();
//         // console.log(splitLetter);
//         let newWord=splitLetter.join("");
//         // console.log(newWord)
//         newArray.push(newWord);
//     }
//     return newArray.join(" ");
// }
// console.log(reverseWord("Hello World"));

//4.
// let arr1=[1,2,3,4];
// arr1.fill(0,1,2);
// console.log(arr1);//[1,0,3,4]
// arr1.fill(1,-1,2);
// console.log(arr1); //[1,2,3,4]
// arr1.fill(1,2,0)
// console.log(arr1) //[1,2,1,4]
// arr1.fill(1,0,2);
// console.log(arr1)//[1,1,3,4]
// arr1.fill(0,1,-1);
// console.log(arr1);

//5.
// let a=["JS","CSS","JQuery"];
// let d={
//     name:"JS",
//     label:a.map(e=>e.id==="JS").label
// }
// console.log(d); //{name:'JS',label:undefined}

//6.
// Given an array of strings words, write a JavaScript program to create an object where the keys are the unique words from the array and the values are the counts of each word using the reduce() method.
// let  words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// function inputWords(words){
//     let result= words.reduce((accu,cur)=>{
//         if(accu[cur]){
//           accu[cur]+=1;
//         }
//         else{
//             accu[cur]=1;
//         }
//         return accu;
//     },[]);
//     return result;
// }
// console.log(inputWords(words));

//7.
// Write a JavaScript program that sorts an array of objects students based on their score property in descending order using the sort() method.
// let students = [
//     { name: 'John', score: 80 },
//     { name: 'Jane', score: 95 },
//     { name: 'David', score: 75 }
// ]
// function sortStudents(students){
//     let result=students.sort((a,b)=>{
//         return b.score - a.score;
//     });
//     return result;
// }
// students.push({ name : "Jeel" , score : 98});
// console.log(sortStudents(students))


//8.
// Given an array numbers = [1, 2, 3, 4, 5], write a JavaScript program to check if the array is a permutation of the numbers from 1 to N using the every() method. Return true if it is a permutation, otherwise return false.
// let numbers=[1,2,3,4,5]
// function permutation(numbers){
//     let result = numbers.every((num,index)=>{
//       return num === index + 1;
//     })
//     return result;
// }
// console.log(permutation(numbers));

//9.
// Write a JavaScript program that finds the longest word in a sentence by splitting the sentence into an array of words and using the reduce() method.
// let sentence = "The quick brown fox jumps over the lazy dog";
// function splitSentence(sentence){
//     let result = sentence.split(" ").reduce((accu,cur)=>{
//         if(cur.length > accu.length){
//             return cur;
//         }
//         return accu;
//     }," ");
//     return result;
// }
// console.log(splitSentence(sentence));

//10.
// Given an array of objects products, where each object contains a name and price property, write a JavaScript program to find the total price of all products using the reduce() method.
// let products = [
//     { name: 'Apple', price: 1.99 },
//     { name: 'Banana', price: 0.99 },
//     { name: 'Orange', price: 2.49 }
// ]
// function getPrice(products){
//     let result = products.reduce((accu,cur)=>{
//         let price = cur.price;
//         return accu + price;
//     },0);
//     return result;
// };
// console.log(getPrice(products));


//11.
// Given an array numbers = [1, 2, 3, 4, 5], write a JavaScript program to rotate the array to the right by a given number of positions k using the slice() and concat() methods.
// let numbers = [1 , 2 , 3 , 4 , 5];
// function rotateNumbers(numbers,k){
//     let result = numbers.slice(-k).concat(numbers.slice(0,-k));
//     return result;
// }
// console.log(rotateNumbers(numbers,3));

//12.
// Write a JavaScript program that partitions an array of numbers numbers into two arrays: one containing the numbers greater than the average and another containing the numbers less than or equal to the average, using the reduce() method.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function array(numbers) {
//     let average = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
//     let result = numbers.reduce((acc, cur) => {
//         if (cur > average) {
//             acc.greaterThan.push(cur);
//         } else {
//             acc.lessThan.push(cur);
//         }
//         return acc;
//     }, { greaterThan: [], lessThan: [] });
//     return result;
// }
// console.log(array(numbers));

//13.
// const arr1 = [
//     { name: 'Joe Brown', goals: 0, assists: 0, points: 0 },
//     { name: 'Jim Bob', goals: 2, assists: 1, points: 3 },
//     { name: 'Harry Styles', goals: 1, assists: 1, points: 2 },
//     { name: 'Craig Mack', goals: 5, assists: 7, points: 12 },
//     { name: 'Wés BÔS', goals: 5, assists: 7, points: 12 },
//     { name: 'DOG', bones: 100000, goals: 5, assists: 7, points: 12 },
//   ];
// const arr2 = [
//     { name: 'Mack', goals: 3, assists: 3, points: 6, ppg: 0, ppa: 0, pims: 0, },
//     { name: 'Bob', goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
//     { name: 'Brown', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
//     { name: 'John Styles', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
// ];
// let arr3= Object.assign(arr2,arr1);
// console.log(arr3);
// function highestGoals(arr3){
//     let result = arr3.sort((a,b)=>a.goals - b.goals);
//     return result;
// }
// console.log(highestGoals(arr3));

// function highestGoalsName(arr3){
//     let result = arr3.reduce((accu,cur)=>cur.goals > accu.goals ? cur : accu);
//     return result;
// }
// console.log(highestGoalsName(arr3));

// function filterize(objectArray){
//     return objectArray.reduce((accu,cur)=>{
//         let key = cur.name.charAt(0);
//         accu[key]=accu[key] || [];
//         accu[key].push(cur);
//         return accu;
//     },[]);
// }
// let result = filterize(arr3);
// console.log(result);

// function pairOfSum(array, sum) {
//     let arr = Array(array).fill().map((v, i) => i + 1);
//     let a = arr.reduce((acc, cur, index, arr) => {
//         for (let i = index; i < arr.length; i++) {
//             if (cur + arr[i] === sum) {
//                 acc.push([cur, arr[i]]);
//             }
//         }
//         return acc;
//     }, []);
//     return a;
// }
// console.log(pairOfSum(10, 17));

// let a=[];
// let b=a;
// console.log(a==b); //true
// console.log(a===b); //true

// let a=[20];
// let b=[20];
// console.log(a[0]==b[0]); //true
// console.log(a[0]===b[0]); //true

// let a=[1,2,3,4];
// let b={name:"Jeel"};
// console.log(...a);

// console.log(typeof NaN);

// console.log(10- - 10)  
// console.log(10 + + 10)
// console.log(10+ +'10')

// let data={name: "Jeel"};
// console.log(delete data.name);
// console.log(delete data.id);
// console.log(data);
// console.log(delete data);    

// const data=["Peter","Anil","sam"];
// const [y]=data;
// console.log(y);

// let data={name:"Jeel",age:19};
// let {name}=data;
// console.log(name); //destructuring

// let data={name:"Jeel",age:19};
// let info={city:"Ahemdabad"};
// data={data , ...info}
// console.log(data);

// var name="xyz";
// function getName(){
//   console.log(name);
//   var name="abc";
// }
// getName();

// function sumValues(x,y,z){
//   return x+y+z;
// }
// console.log(sumValues(...[1,2,3]));

// let name="code step by step";
// console.log(!typeof name==='object'); //false
// console.log(!typeof name==='string'); //false

// let name="Jeel";
// let age=19;
// console.log(isNaN(name)); //true
// console.log(isNaN(age)); //false

// let data=["anil","peter","john"];
// delete data[1];
// console.log(data.length);

// let arr1=[1,2,3,4,5];
// let arr2=[6,7,2,8];
// console.log([...arr1,...arr2]);

// let a=1;
// let c=2;
// console.log(c===++a);

// let a=1;
// let b=1;
// let c=2;
// console.log(a=== b===--c)

// function myFunction(){
//   console.log(name);
//   console.log(age);

//   var name="Jeel";
//   var age=19;
// }
// myFunction();

// function sum(a,b){
//   return a+b;
// }
// console.log(sum(1,"1"));

// console.log(typeof 3+4+"6");//number46

// let arr=[1,2,3].map((number)=>{
//   if(typeof number=="number") return;
//   return number*2;
// })
// console.log(arr); //[undefined,undefined,undefined]

//  let getInfo=(member)=>{
//   member.name="Jeel";
// }
// const person={name:"sarah"};
// getInfo(person);
// console.log(person);

// let a = 5 + 5 * 3 + "abc" ;
// console.log(a, typeof a); 

// let a = 5;
// let b = (a++) + 1;
// console.log(a, b); 

// let a = 5;
// let b = (++a)**2;
// console.log(a, b);

// let a = 10;
// let b = "10";
// console.log(a == b, a === b) //true false
// console.log(a != b, a !== b) //false true

// let a = 10;
// a=a+5;
// console.log(a);
// a+=5;
// console.log(a)
// a-=5;
// console.log(a)
// a*=5;
// console.log(a)
// a/=5;
// console.log(a)
// a%=5;
// console.log(a)

// const student={'name':"ram","age":12};
// console.log(student.name);
// student.name="Joes";
// console.log(student.name);

// let mark=45;
// console.log(mark>=35 && mark<=100);

