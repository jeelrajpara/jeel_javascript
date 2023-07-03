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
//1[1]. for(let name of names){
//     name.full_name=name.first_name + name.last_name;
// };
// console.log(names);    

//1[2].
// let result=names.map((name)=>name.full_name=name.first_name + name.last_name);
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
// let result = users.map((user) => {
//     if (user.age >= 18) {
//        return user.Is_mature="yes";
//     }else{
//         return user.Is_mature="No";
//     }
//     return user;
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
// let result=nestedArray.map((value)=>{
//     value.map((item)=>{
//         console.log(item);
//     })
// });
// console.log(result);

// for (let i = 0; i < nestedArray.length; i++) {
//     for (let j = 0; j < nestedArray[i].length; j++) {
//       console.log(nestedArray[i][j]);
//     }
// };

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
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers);//[1,2,3,4,2,4,6,8]
// console.log(doubled);  //[2,4,6,8]

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
//=>1. filter donuts based on which have topping  Chocolate
// let chocolate=donut.filter((value,index,array)=>{
//      return value.batters.batter.filter((value)=>value.type="Chocolate").length>0;
// });
// console.log(chocolate);

//=>2. filter donuts based which have batter type is regular and topping have Chocolate
// let regular=donut.filter(callback);
// function callback(value){
// 	let result=value.batters.batter.filter((value)=>{
// 		return value.type==="Chocolate"&& value.type==="Regular".length>0;
// 	});
// 	return result;
// }
// console.log(regular);

// =>3. filter donuts based on which have topping chocolate and Sugar
// let sugar=donut.filter(sugarCallBack);
// function sugarCallBack(item){
//   let sugarTopping=item.topping.filter((value)=>value.type==="Sugar").length>0;
//   let chocolateTopping=item.topping.filter((value)=>value.type==="Chocolate").length>0;
//   return chocolateTopping && sugarTopping;
// };
// console.log(sugar);

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
// let filter_donut=donut.filter((donut,index,array)=>{
// 	return donut.batters.batter.length>=2;
// });
// console.log(filter_donut);

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

// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
// ];
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

// .................HR........................//

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
// averageSalary(employees);

//2. output : {IT:[50000,55000,65000,70000],HR:[60000,75000, 80000]}
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
// output(employees);


 
  


