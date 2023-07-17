//adding new elements
// function addElement(langName) {
//     const li = document.createElement('li')
//     let addText = document.createTextNode(langName)
//     li.appendChild(addText);
//     document.querySelector('.language').appendChild(li)
// }
// addElement('CSS');
// addElement('Javascript')

// function addElement(langName){
//     let li = document.createElement('li')
//     li.innerHTML=`${langName}`
//     document.querySelector('.language').appendChild(li)
// }
// addElement('CSS');
// addElement('JavaScript')

// //Edit values
// let edit = document.querySelector('li:nth-child(3)')
// console.log(edit)
// edit.innerHTML = "python"

// let edit = document.querySelector('li:nth-child(2)')
// let newLi = document.createElement('li')
// newLi.textContent ="Mojo"
// edit.replaceWith(newLi)

// let firstLang = document.querySelector('li:first-child')
// firstLang.outerHTML = <li>TypeScript</li>

// Remove element
// let remove = document.querySelector('li:last-child')
// remove.remove()

// let arr1 = [
//     {
//         id: 1,
//         slot: [
//             { dosage: " " },
//             { dosage: "hello" },
//         ]
//     },
//     {
//         id: 2,
//         slot: [
//             { dosage: "a" },
//             { dosage: "b" },
//         ]
//     },
// ]
// function filterObject(arr1){
//    let result = arr1.some(item=>{
//       return item.slot.some(slot=> slot.dosage.trim()=="")
//    });
//    return result;
// }
// console.log(filterObject(arr1))

//siblings
// let nextSibling = document.querySelector('.current')
// let next = nextSibling.nextElementSibling;
// console.log(next)

// let previous = document.querySelector('.current')
// let previousSibling = previous.previousElementSibling;
// console.log(previousSibling)

// let getSiblings = function (e) {
//     let siblings = []; 
//     if(!e.parentNode) {
//         return siblings;
//     }
//     let sibling  = e.parentNode.firstChild;
//     while (sibling) {
//         if (sibling.nodeType === 1 && sibling !== e) {
//             siblings.push(sibling);
//         }
//         sibling = sibling.nextSibling;
//     }
//     return siblings;
// };
// let siblings = getSiblings(document.querySelector('.current'));
// siblingText = siblings.map(e => e.innerHTML);
// console.log(siblingText);

// const a =3;
// const n=4;
// let sumOfAB = sum(a,b);
// const sum = (d1,d2)=>d1+d2;
// console.log(sumOfAB)  //=> cannot access sum

// function getName(obj,key){
//     return obj.key;
// }
// const obj1 ={name:"demo",age:23}
// let name = getName(obj1,'name');
// console.log(name) //=> ans will be undefined because key does not exist

// function abc(){
//     const ab=()=>40;
//     abcd(()=>ab());
// }
// function abcd(cd){
//     let a = cd();
//     console.log(a);
// }
// console.log(abc())

// const target={a:1};
// const source ={b:2}
// const result = Object.assign(target,source) //=> true
// const result = ({...source,...target}) //=>false
// console.log(result===target)

// let obj={df:56};
// let{a:df=45}=obj;
// console.log(df) //=>45

