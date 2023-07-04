
//1.
// let arr=[
//     {
//        "name": "a",
//        "subElements": 
//        [
//          {"surname": 1},
//          {"surname": 2}
//        ]
//     },
//     {
//        "name": "b",
//        "subElements": 
//        [
//          {"surname": 3},
//          {"surname": 1}
//        ]
//     },
//     {
//        "name": "c",
//        "subElements": 
//        [
//          {"surname": 2},
//          {"surname": 5}
//        ]
//     }
// ];
// let result=arr.filter((values)=>values.subElements.filter((value)=>value.surname==3).length>0);
// console.log(result);

//2.
// var nestedObject = [
//     {
//         itemId: 1,
//         itemDetails: {
//             name: "C",
//             category: "Programming Language",
//             price: 500,
//         },
//         itemCategory: "Basic",
//     },
//     {
//         itemId: 2,
//         itemDetails: {
//             name: "C++",
//             category: "Programming Language",
//             price: 700,
//         },
//         itemCategory: "Beginner",
//     },
//     {
//         itemId: 1,
//         itemDetails: {
//             name: "Java Script",
//             category: "Web Development",
//             price: 1500,
//         },
//         itemCategory: "Advanced",
//     },
//     {
//         itemId: 2,
//         itemDetails: {
//             name: "C++",
//             category: "Programming Language",
//             price: 1500,
//         },
//         itemCategory: "Beginner",   
//     }
// ]
// let result=nestedObject.filter((filterArray));
// function filterArray(value){
//       let price=value.itemDetails.price>700;
//       return price;
// };
// console.log(result);

//3.
// let data = [
//     {
//         full_name: {
//             f_name: "Raj",
//             l_name: "Bundela"
//         },
//         age: 19,
//         schoolName: {
//             ssc: {
//                 school_name: "Vidhya Nagar School",
//                 marks: 80,
//             },
//             hsc: {
//                 school_name: "DBMS",
//                 marks: 76,
//             }
//         },
//         college: {
//             collegeName: "Navgujarat",
//             subject: [
//                 {
//                     first_sem: ["html", "css", "c"],
//                     second_sem: ["c++", "javascriprt"]
//                 }
//             ]
//         }
//     },
//     {
//         full_name: {
//             f_name: "Prem",
//             l_name: "Chauhan"
//         },
//         age: 20,
//         schoolName: {
//             ssc: {
//                 school_name: "Vidhya Nagar School",
//                 marks: 90,
//             },
//             hsc: {
//                 school_name: "Vidhya Nagar School",
//                 marks: 70,
//             }
//         },
//         college: {
//             collegeName: "Navgujarat",
//             subject: [
//                 {
//                     first_sem: ["PHP", "DotNet", "C"],
//                     second_sem: ["c++", "HTML", "CSS", "javascriprt"]
//                 }
//             ]
//         }
//     },
//     {
//         full_name: {
//             f_name: "Prit",
//             l_name: "Bundela"
//         },
//         age: 17,
//         schoolName: {
//             ssc: {
//                 school_name: "Vidhya Nagar School",
//                 marks: 75,
//             },
//             hsc: {
//                 school_name: "DBMS",
//                 marks: 95,
//             }
//         },
//         college: {
//             collegeName: "Silver Oak",
//             subject: [
//                 {
//                     first_sem: ["HTML", "CSS", "Javascript", "Javacript"],
//                     second_sem: ["React", "Node", "Next Js"]
//                 }
//             ]
//         }
//     },
//     {
//         full_name: {
//             f_name: "Prit",
//             l_name: "Bundela"
//         },
//         age: 21,
//         schoolName: {
//             ssc: {
//                 school_name: "DBS",
//                 marks: 75,
//             },
//             hsc: {
//                 school_name: "Navgujarat",
//                 marks: 95,
//             }
//         },
//         college: {
//             collegeName: "Silver Oak",
//             subject: [
//                 {
//                     first_sem: ["HTML", "CSS", "Javascript", "Javacript"],
//                     second_sem: ["React", "Node", "Next Js"]
//                 }
//             ]
//         }
//     }
// ];

// 3[a]Get the list of students that have studied html in first sem
// function htmlInFirstSem(arr){
//     let htmlStudents=arr.filter(value=>value.college.subject.filter(value=>value.first_sem=="HTML".length>0));
//     return htmlStudents;
// };
// let result=htmlInFirstSem(data);
// console.log(result);

//3[b] Add full name in each object
// function addFullName(data) {
//     let newData = data.map(item => {
//         item.fullName = item.full_name.f_name + " " + item.full_name.l_name;
//         return item;
//     });
//     return newData;
// };
// let result=addFullName(data);
// console.log(result);

//3[c] Get user data who has studying in DBMS in ssc or hsc
// function getStudentsInDbms(data){
//     let newData=data.filter(item=>{
//         let ssc=item.schoolName.ssc.school_name==="DBMS";
//         let hsc=item.schoolName.hsc.school_name==="DBMS";
//         return ssc||hsc;
//     });
//     return newData;
// }
// let result=getStudentsInDbms(data);
// console.log(result);

//3[d] Get Student data who is mature (age > 18)
// function isMature(data){
//     let newData=data.map(item=>{
//         if(item.age>=18){
//             item.isMature="yes";
//         }
//         else{
//             item.isMature="no";
//         }
//        return item;
//     });
//     return newData;    
// }
// let result=isMature(data);
// console.log(result);

//3[e] Get the list of students who have same school in ssc and hsc
// function getStudentsOfSameSchool(data){
//     let newData=data.filter(item=>{
//         let ssc=item.schoolName.ssc.school_name;
//         let hsc=item.schoolName.hsc.school_name;
//         return ssc===hsc;
//     })
//     return newData;
// }
// console.log(getStudentsOfSameSchool(data));

//4.
// let products = [
//     { name: "iPhone", brand: "Apple", price: 50000 },
//     { name: "Galaxy", brand: "Samsung", price: 89999 },
//     { name: "Pixel", brand: "Google", price: 79900 },
//     { name: "OnePlus", brand: "OnePlus", price: 69009 },
//     { name: "Galaxy", brand: "Samsung", price: 23000 },
//     { name: "OnePlus", brand: "OnePlus", price: 690009 },
//     { name: "Pixel", brand: "Google", price: 100000 },
//     { name: "iphone", brand: "Apple", price: 150000 },
//     { name: "Galaxy", brand: "Samsung", price: 10000 },
// ];
//get average of each brand
// function averagePriceOfBrand(products) {
//     //...................Apple...................//
//     let brandApple = products.filter(value => {
//         if (value.brand === "Apple") {
//             return value.price;
//         }
//     }).map(value => value.price);
//     // console.log(brandApple);
//     let AverageApple = 0;
//     for (i = 0; i < brandApple.length; i++) {
//         AverageApple += brandApple[i];
//     };
//     console.log("Average Of iPhone:", AverageApple / brandApple.length);

//     //..................pixel......................//

//     let brandPixel = products.filter(value => {
//         if (value.brand === "Google") {
//             return value.price;
//         }
//     }).map(value => value.price);
//     // console.log(brandPixel);
//     let averagePixel = 0;
//     for (let i = 0; i < brandPixel.length; i++) {
//         averagePixel += brandPixel[i];
//     };
//     console.log("Average of Pixel", averagePixel / brandPixel.length);

//     //..................Galaxy.....................//

//     let brandSamsung = products.filter(value => {
//         if (value.brand === "Samsung") {
//             return value.price;
//         }
//     }).map(value => value.price);
//     let averageSamsung = 0;
//     for (i = 0; i < brandSamsung.length; i++) {
//         averageSamsung += brandSamsung[i];
//     };
//     console.log("Average Price for Galaxy:", averageSamsung / brandSamsung.length);

//     //....................OnePlus...................//

//     let brandOnePlus=products.filter(value=>{
//         if(value.brand==="OnePlus"){
//             return value.price;
//         }
//     }).map(value=>value.price);
//     let averageOnePlus=0;
//     for(let i=0;i<brandOnePlus.length;i++){
//         averageOnePlus+=brandOnePlus[i];
//     };
//     console.log("Average price for One Plus:",averageOnePlus/brandOnePlus.length);
// };
// let result = averagePriceOfBrand(products);
// console.log(result);

//store brand and its price
// function output(products){
//     let result={
//         apple:[],
//         samsung:[],
//         google:[],
//         onePlus:[]
//     };
//     for(let i=0;i<products.length;i++){

//         if(products[i].brand==="Apple"){
//             result.apple.push(products[i].price);
//         }
//         else if(products[i].brand==="Samsung"){
//             result.samsung.push(products[i].price);
//         }
//         else if(products[i].brand==="Google"){
//             result.google.push(products[i].price);
//         }
//         else if(products[i].brand==="OnePlus"){
//             result.onePlus.push(products[i].price);
//         }
//     }
//     console.log(result);
// }
// output(products);

//5.
// let students = [
//     { name: "John", age: 22 },
//     { name: "Emily", age: 28 },
//     { name: "Michael", age: 30 },
//     { name: "Sophia", age: 20 }
// ];
// //filter the objects with age greater than 25 and map them into new array
// function filterAge(students){
//     let result=students.filter((value=>value.age>25)).map((value=>value.name));
//     return result;
// };
// console.log(filterAge(students));

//6.
// const input = "George Raymond Richard Martin";
// function output(input){
//    let result= input.split(" ").map((value=>value[0])).join("");
//    return result;
// };
// console.log(output(input)); 

//7.
// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
// ];
// function output(students){
//     let result=students.filter((value=>value.grade>85)).map((value=>value.name+" : "+value.grade));
//     return result;
// }
// console.log(output(students));


//--------------------findLastIndex---------------------//
// let arr=[1,2,3,5,6]
// let result=arr.findLastIndex((value=>value>7));
// console.log(result);

//-------------------------Splice------------------------//

// const months = ['Jan', 'March', 'April', 'June'];
// let result=months.splice(1,2,"July");  //[ 'Jan', 'July', 'June' ]
// months.splice(-1,-2,"July"); //[ 'Jan', 'March', 'April', 'July', 'June' ] delete count doesn't work for negative
// months.splice(-1,1,"July","August"); //[ 'Jan', 'March', 'April', 'July', 'August' ]
// months.splice(2,-1,"July"); //[ 'Jan', 'March', 'July', 'April', 'June' ]
// months.splice(4,1,"July");  //[ 'Jan', 'March', 'April', 'June', 'July' ]
// console.log(months);

