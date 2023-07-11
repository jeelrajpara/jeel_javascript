// let arr=[1,2,3,4,5];
// let result=arr.reduce((accu,cuurentValue,currentIndex,array)=>{
//     console.log("accumulator",accu);
//     console.log("current Value",cuurentValue);
//     console.log("Current Index",currentIndex);
//     console.log("Array",array);
//     return accu+cuurentValue;
// },0);
// console.log(result);          

// let people = [
//     { name: "John", age: 21 },
//     { name: "Oliver", age: 55 },
//     { name: "Michael", age: 55 },
//     { name: "Dwight", age: 19 },
//     { name: "Oscar", age: 21 },
//     { name: "Kevin", age: 55 },
// ];
// function groupPeople(objectArray,property){
//      return objectArray.reduce(function(accumulator,cuurentValue){
//         let key=cuurentValue[property];
//         accumulator[key]=accumulator[key] || [];
//         accumulator[key].push(cuurentValue);
//         return accumulator;
//      },{});
// }
// let result=groupPeople(people,"age");
// console.log(result);

// const input = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
// ];
// function groupPeople(objectArray,property){
//     return objectArray.reduce((accumulator,currentValue)=>{
//          let key=currentValue[property];
//          accumulator[key]=accumulator[key] || [];
//          accumulator[key].push(currentValue);
//          return accumulator;
//     },{})
// }
// let result=groupPeople(input,"department");
// console.log(result);

//1.
// const names  = [
//     {first_name: "Handnm", last_name: "L demo"},
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
// ];
// function fullName(){
//    return names.reduce((accumulator,currentValue)=>{
//         let full_name=`${currentValue.first_name} ${currentValue.last_name}`;
//         accumulator.push(full_name);
//         return accumulator
//     },[])
// } 
// console.log(fullName());

//
// let arr1 = [1, 20, 45, 62, 100];
// let abc = arr1.reduce((total, amount) => {
//     if (amount > 30) {
//         total.push(amount);
//     }
//     return total;
// }, []);
// console.log(abc);  //[ 45, 62,100]






