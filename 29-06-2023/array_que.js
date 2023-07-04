// Write a code that adds new key in each object named 
// full_name: first_name + last_name
// const names  = [
//     {first_name: "Handnm", last_name: "L demo"},
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
// ];  
//--------------------------Using for..of loop---------------------------//
//1[1]. for(let name of names){
//     name.full_name=name.first_name + name.last_name;
// };
// console.log(names);    
//--------------------------Using map function--------------------------//
//1[2].
// let result=names.map((name)=>name.full_name=name.first_name + name.last_name);
// console.log(names);
//--------------------------Using forEach function---------------------//
// names.forEach(name=>{
//     name.full_name=name.first_name+" "+name.last_name;
// });
// console.log(names);

//2.Write a code that adds new key in each object named : isMature
// const users  = [
//     {first_name: "Handnm", last_name: "L demo", age: 17},
//     {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//     {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//     {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//     {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//     {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//     {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
// ]
//-----------------------Using map function--------------------------//
// let result = users.map((user) => {
//     if (user.age >= 18) {
//        return user.Is_mature="yes";
//     }else{
//         return user.Is_mature="No";
//     }
//     return user;
// });
// console.log(users);
//---------------------Using forEach function-----------------------//
// users.forEach(value=>{
//     value.is_mature=value.age>=18;
// });
// console.log(users);

//3.
// let arr = [1,2,3,5]
// console.log(arr[-1]); //?
//output will be undfined because index of array starts from 0 so it does not contain any value like -1

//4.
// => print all items of nested array
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
//-------------------------Using flat and for loop---------------------//
// let result=nestedArray.flat();
// for(i=0;i<result.length;i++){
//     console.log(result[i]);
// }

//-------------------------Using nested for loop-----------------------//
// for (let i = 0; i < nestedArray.length; i++) {
//     for (let j = 0; j < nestedArray[i].length; j++) {
//       console.log(nestedArray[i][j]);
//     }
// };

//-------------------------Using map function-------------------------//
// let result=nestedArray.map(()=>{
//     return nestedArray;
// });
// console.log(result);

//5.
//=> print all items of this object in line 
// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//       street: "123 Mumbai fashion St",
//       city: "Midtown",
//       state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"],
// };
// function array(){
//   let value=Object.entries(nestedObject).map(([key,item])=>{
//         if(typeof item==='object'){
//             console.log(key+":"+item);
//         }else{
//             console.log(key+":"+item);
//         }
//     });
//     return value;
// }
// let nestedArray=array(nestedObject);
// console.log(nestedArray);

//6.
// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// function arrayContainsNum(arr) {
//   let result=arr.filter((value)=>typeof value ==='number');
//   return result.length==1;
// };
// console.log(arrayContainsNum([1, 2, 3])); //true
// console.log(arrayContainsNum(["1", "a", "h"])); //false
// console.log(arrayContainsNum(["a",3,"gh"])); //true
// console.log(arrayContainsNum(["a","3gd","gh"])); //false

//if we run the same code with every function only the first input will be true because every method checks whether all the element is true or not according to the condition or not

//7.
//=> convert all number to string in given array
// const numbers = [1, 2, 3, 4];
// console.log(numbers.map(String));  //[ '1', '2', '3', '4' ]

//8.
// const numbers = [1, 2, 3, 4];
//----------------------Using Map function---------------------//
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers);//[1,2,3,4,2,4,6,8]
// console.log(doubled);  //[2,4,6,8]

//----------------------Using forEach function----------------//
// let result=[];
// numbers.forEach((value=>{
//     result.push(value*2);
// }));
// console.log(numbers);//[1,2,3,4]
// console.log(result);//[2,4,6,8]

//9.
// let donut = [
// 	{
// 		"id": "0001",
// 		"type": "donut",
// 		"name": "Cake",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" },
// 					{ "id": "1003", "type": "Blueberry" },
// 					{ "id": "1004", "type": "Devil's Food" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5007", "type": "Powdered Sugar" },
// 				{ "id": "5006", "type": "Chocolate with Sprinkles" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0002",
// 		"type": "donut2",
// 		"name": "Raised",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0003",
// 		"type": "donut3",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0004",
// 		"type": "donut1",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	}
// ]
//----------------------------Using nested filter-----------------------//
//=>1. filter donuts based on which have topping  Chocolate
// let chocolate=donut.filter((value,index,array)=>{
//      return value.batters.batter.filter((value)=>value.type="Chocolate").length>0;
// });
// console.log(chocolate);

//------------------------------Using find------------------------------//
// function chocolate(donut){
//     let result=donut.filter((value)=>{
//         return  value.topping.find(value=>value.type==="Chocolate");
//     })
//     return result;
// };
// console.log(chocolate(donut));

//=>2. filter donuts based which have batter type is regular and topping have Chocolate
//-----------------------------------Using nested filter-------------------------------//
// let regular=donut.filter(callback);
// function callback(value){
// 	let result=value.batters.batter.filter((value)=>{
// 		return value.type==="Chocolate"&& value.type==="Regular".length>0;
// 	});
// 	return result;
// }
// console.log(regular);

//----------------------------------Using filter and find-----------------------------//
// function regular(donut){
//     let a=donut.filter((value=>value.batters.batter.find(value=>value.type==="Regular")));
//     let b=donut.filter((value=>value.topping.find(value=>value.type==="Chocolate")));
//     return a&&b;
// }
// console.log(regular(donut));

// =>3. filter donuts based on which have topping chocolate and Sugar
//----------------------------------Using nested filter------------------------------//
// let sugar=donut.filter(sugarCallBack);
// function sugarCallBack(item){
//   let sugarTopping=item.topping.filter((value)=>value.type==="Sugar").length>0;
//   let chocolateTopping=item.topping.filter((value)=>value.type==="Chocolate").length>0;
//   return chocolateTopping && sugarTopping;
// };
// console.log(sugar);

//----------------------------------Using filter and find---------------------------//
// function sugar(donut){
//     let a=donut.filter((value=>value.topping.find(value=>value.type==="Chocolate")));
//     let b=donut.filter((value=>value.topping.find(value=>value.type==="Sugar")));
//     return a&&b;
// }
// console.log(sugar(donut));

// =>4. filter donuts based on ppu > 0.5
// let ppu = donut.filter((value, index, array) => value.ppu>0.5 );
// console.log(ppu);

//=>5. bring all batters for all donuts in single array
// function abc(donut) {
// 	for (let key in donut){
// 		if(typeof donut[key]!='object'){
// 			console.log(donut[key]);
// 		}
// 		else{
// 			abc(donut[key]);
// 		}
// 	}
// }
// abc(donut);

//=>6. filter donuts based on which have 2 and more than 2 batter in it
// function batter(donut){
//   let result=donut.filter((value)=>value.batters.batter.length>=2);
//   console.log(result);  
// }
// batter(donut);

//10.Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// function getInitials(name) {
// 	let names = name.split(" ");
// 	let initials="";
//     for (let index in names) {
// 		let result = names[index].charAt(0).toUpperCase();
// 		initials+=result;
// 	}
// 	return initials;
// };
// let full_name = "George Raymond Richard Martin";
// let output = getInitials(full_name);
// console.log(output); //GRRM

//11.
// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"
// let input="Every developer likes to mix Kubernetes and javascript";
// function example(name){
// 	let names=name.split(" ");
// 	let initials="";
// 	for(let index in names){
//        if(names[index].slice(1,names[index].length-1).length===0){
// 		initials+=names[index].charAt(0)+names[index].charAt(names[index-1]+" ");
// 	   } else if(names[index].slice(1,names[index].length-1).length===0){
// 		initials+=names[index].charAt(0)+names[index].slice(1,2)+names[index].charAt(names[index-1]+" ");
// 	   }
// 	   else{
// 		initials+=names[index].charAt(0)+names[index].slice(1,names[index].length-1).length+names[index].charAt(names[index].length-1)+" ";
// 	   };
// 	};
// 	console.log(initials);
// };
// example(input);

//12.
// const products = [
// 	{ name: "Product 1", price: 20, category: "Electronics" },
// 	{ name: "Product 2", price: 30, category: "Clothes" },
// 	{ name: "Product 3", price: 40, category: "Electronics" },
// 	{ name: "Product 4", price: 50, category: "Clothes" },
// 	{ name: "Product 5", price: 60, category: "Clothes" },
// 	{ name: "Product 6", price: 70, category: "Electronics" },
// 	{ name: "Product 7", price: 80, category: "Clothes" },
// 	{ name: "Product 8", price: 90, category: "Electronics" },
// ];
//12.a
// function item(arry){
// 	newObj={};
// 	let clothes=arry.filter((values)=>values.category==="Clothes");
// 	let electronics=arry.filter((values)=>values.category==="Electronics");
// 	let clo=clothes.length;
// 	let elec=electronics.length;
// 	newObj.clothes=clo;
// 	newObj.electronics=elec;
// 	return newObj;
// };
// let result=item(products);
// console.log(result);

//12.b
// function averagePrice(arr){
// 	let countClothes=0;
// 	let countElectronics=0;
// 	let countClothesPrice=0;
// 	let countElectronicsPrice=0;
// 	arr.filter((values)=>{
// 		if(values.category=="Clothes"){
// 			countClothesPrice +=values.price;
// 			countClothes ++;
// 		}
// 		else if(values.category=="Electronics"){
// 			countElectronicsPrice +=values.price;
// 			countElectronics ++;
// 		}
// 	});
// 	return {countClothesAverage: countClothesPrice/countClothes ,countElectonicsAverage: countElectronicsPrice/countElectronics}
// }
// console.log(averagePrice(products));

// function averagePrice(products){
//     let priceClothes=products.filter(value=>{
//         if(value.category==="Clothes"){
//             return value.price;
//         }
//     }).map(value=>value.price)
//     let averageCloth=0;
//     for(i=0;i<priceClothes.length;i++){
//         averageCloth+=priceClothes[i];
//     };
//     let priceElectornics=products.filter(value=>{
//         if(value.category==="Electronics"){
//             return value.price;
//         }
//     }).map(value=>value.price);
//     let averageElectronics=0;
//     for(i=0;i<priceElectornics.length;i++){
//         averageElectronics+=priceElectornics[i];
//     };
//     console.log("Average price of cloth:",averageCloth/priceClothes.length);
//     console.log("Average price of electronics:",averageElectronics/priceElectornics.length);
// };
// averagePrice(products);

//13.
const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];
//1[i]. count the average salary of each department
// function averageSalary(employees){
//     let departmentIt=0;
//     let departmentItSalary=0;
//     let departmentHr=0;
//     let departmentHrSalary=0;
//     for(i=0;i<employees.length;i++){
//         if(employees[i].department=="IT"){
//             departmentItSalary+=employees[i].salary;
//             departmentIt++;
//         }
//         else{
//             departmentHrSalary+=employees[i].salary;
//             departmentHr++;
//         };
//     }
//     return {IT:departmentItSalary/departmentIt , HR:departmentHrSalary/departmentHr};
// };
// employees.push( { name: "David", salary: 90000, department: "IT" },)
// console.log(averageSalary(employees));

// 1[ii] 
// function averageSalary(employees){

// // ...............IT.........................//

// let salaryIT=employees.filter(value=>{
//     if(value.department==="IT"){
//         return value.salary;
//     }
// }).map(value=>value.salary);
// // console.log(salaryIT);
// let averageIT=0;
// for(let i=0;i<salaryIT.length;i++){
//     averageIT+=salaryIT[i];
// };
// console.log("Average salary for IT:",averageIT/salaryIT.length);

// // .................HR........................//

// let salaryHR=employees.filter(value=>{
//     if(value.department==="HR"){
//         return value.salary;
// }
// }).map(value=>value.salary);
// // console.log(salaryHR);
// let averageHR=0;
// for(let i=0;i<salaryHR.length;i++){
//     averageHR+=salaryHR[i];
// };
// console.log("Average salary for HR:",averageHR/salaryHR.length);
// }
// employees.push( { name: "David", salary: 70000, department: "IT" });
// averageSalary(employees);

//2. output : {IT:[50000,55000,65000,70000],HR:[60000,75000, 80000]}
//--------------------------------Using for loop------------------//
// function output(employees){
//   let result={
//     IT:[],
//     HR:[]
//   };
//   for(let i=0;i<employees.length;i++){
//     if(employees[i].department==="IT"){
//         result.IT.push(employees[i].salary);
//     }
//     else if(employees[i].department==="HR"){
//         result.HR.push(employees[i].salary);
//     }
//   }
//   console.log(result);
// }
// employees.push( { name: "David", salary: 90000, department: "IT" },)
// output(employees);

//---------------------------------Using ForEach-------------------//
// function output(employees){
//     let result={
//         IT:[],
//         HR:[]
//     };
//     employees.forEach((element) => {
//         if(element.department==="IT"){
//             result.IT.push(element.salary);
//         }
//         else if(element.department==="HR"){
//             result.HR.push(element.salary);
//         }
//     });
//     return result;
// }
// employees.push( { name: "David", salary: 120000, department: "IT" });
// console.log(output(employees));

//14.
// let names = ["Jay", "Jaimin", "Raj", "Prem", "Rohit", "Ruchita", "Akshat", "Riya"]
// let obj = {};
// function groupNames(names) {
//     names.forEach((name => {
//         let firstLetter = name.charAt(0);
//         obj[firstLetter] = obj[firstLetter] || []; //here we can also use if..else condition 
//         obj[firstLetter].push(name);              //if(obj[firstLetter]){obj[firstLetter].push(name)}
//     }))                                          //else{obj[firstLetter]=[name]}
// }
// groupNames(names);
// console.log(obj);  

//15.
// Make flat function manually (with depth and without depth)
//--------------------------without depth----------------------//
// let arr = [1, 2, 3, [4, 5], 6, [7]];
// let obj = [];
// function myFlat(element) {
//     element.filter(value => {
//         if (Array.isArray(value)) {
//             myFlat(value);
//         } else {
//             obj.push(value)
//         }
//     });
//     return obj;
// };
// console.log(myFlat(arr));

//-------------------------with depth--------------------------//
// let arr=[1,2,[3,4,[5,[6,[7,8,[9,10]]]]]];
// let obj=[];
// function myFlat(element,depth=1){
//     element.filter(value=>{
//         if(Array.isArray(value)&&depth>0){
//               myFlat(value,depth-1)
//         }
//         else{
//             obj.push(value);
//         }
//     })
//     return obj;
// };
// console.log(myFlat(arr,6));
//We can repeat same function using map function//

//16. Make filter function manually
// let arr=[1,2,3,4,5];
// function myFilter(value,callback){
//     let array=[];
//     for(let i=0;i<value.length;i++){
//         if (callback(value[i], i, value))
//         array.push(value[i]);
//     }
//     return array;
// }
// let result=myFilter(arr,function(num){
//     return num>2;
// });
// console.log(result);

//17.Make map function manually
// let arr=[1,2,3,4,5];
// function myMap(value,callback){
//     let array=[];
//     for(let i=0;i<value.length;i++){
//         array.push(callback(value[i],i,value));
//     }
//     return array;
// }
// let mul=myMap(arr,function(num){
//     return num*2;
// })
// console.log(mul);

//18.
// const input = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
// ];
//18[a]
// let obj = {};
// function groupData(input) {
//     for (let i = 0; i < input.length; i++) {
//         let data = input[i];
//         let firstLetterOfData = data.name.charAt(0);
//         // if(!obj[firstLetter]){
//         //     obj[firstLetter]=[];
//         // }
//         obj[firstLetterOfData] = obj[firstLetterOfData] || [];
//         obj[firstLetterOfData].push(data);
//     }
// }
// groupData(input)
// console.log(obj);

//18.[b]
// let obj = {};
// function groupData(input) {
//     for (let i = 0; i < input.length; i++) {
//         let data = input[i];
//         let firstLetterOfData = data.department;
//         // if(!obj[firstLetter]){
//         //     obj[firstLetter]=[];
//         // }
//         obj[firstLetterOfData] = obj[firstLetterOfData] || []
//         obj[firstLetterOfData].push(data);
//     }
// }
// input.push({ name: "Amar", salary: 70000, department: "HR" },)
// groupData(input);
// console.log(obj);






