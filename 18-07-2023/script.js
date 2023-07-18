// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [
//     { id: 10, name: 'xyz' },
//     { id: 5, name: 'xyz' },
//     { id: 2, name: 'something' },
//     { id: 50, name: 'abc' },
//     { id: 110, name: 'jcas' },
// ]
// //write a function displaying the id that is present in both arr1 and arr2
// function displayingId(arr1,arr2){
//     let result = arr2.filter((value)=>arr1.includes(value.id));
//     return result;
// }
// console.log(displayingId(arr1,arr2))

//write a function that only gives the name of the id that is present in the arr2 and arr1 
// function displayingName(arr1,arr2){
//        let result = arr2.filter((value)=>arr1.includes(value.id)).map((value)=>value.name);
//        return result;
// }
// console.log(displayingName(arr1,arr2))

// write a function displaying the id that is not included in array 1
// function idNotPresent(arr1,arr2){
//     let result = arr2.reduce((accu,cur)=>{
//         if(!arr1.includes(cur.id)){
//             accu.push(cur)
//         }
//         return accu;
//     },[])
//     return result;
// }
// console.log(idNotPresent(arr1,arr2))

// remove duplicate id and print all the id's in one array
// function removeDuplicate(arr1, arr2) {
//     let combine = arr1.concat(arr2);
//     let result = combine.reduce((accu, cur) => {
//         if (!accu.find((item) => item.id === cur.id)) {
//             accu.push(cur);
//         }
//         return accu;
//     }, []);
//     return result;
// }
// console.log(removeDuplicate(arr1, arr2))  //doubt

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// function filterDuplicate(numbers) {
//     let result = numbers.reduce((accu, cur) => {
//         if (!accu.includes(cur)) {
//             accu.push(cur)
//         }
//         return accu;
//     }, [])
//     return result;
// }
// console.log(filterDuplicate(numbers)) //[ 1 , 2 , 3 , 4 , 5 ]

const people = [
    { name: 'Alice', age: 18 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 21 },
    { name: 'Aryan', age: 21 }
];
function findPeople(people){
    let result = people.findIndex((value)=> value.name.includes('A') && value.age>20)
    return result;
}  
console.log(findPeople(people))