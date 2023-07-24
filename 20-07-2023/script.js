// document.querySelector('.enter p').addEventListener('mouseenter', entering);
// document.querySelector('.enter p').addEventListener('mouseleave', leaving);
// function entering(ev){
//     ev.currentTarget.style.borderColor = 'gold';
//     console.log('mouseenter p');
// }
// function leaving(ev){
//     ev.currentTarget.style.borderColor = 'black';
//     console.log('mouseleave p');
// }
// document.querySelector('.over p').addEventListener('mouseover', overing);
// document.querySelector('.over p').addEventListener('mouseout', outing);
// function overing(ev){
//     ev.currentTarget.style.borderColor = 'gold';
//     console.log('mouseover p');
// }
// function outing(ev){
//     ev.currentTarget.style.borderColor = 'black';
//     console.log('mouseout p');
// }
// //children

// document.querySelector('.enter').addEventListener('mouseenter', function(ev){
//     ev.currentTarget.classList.add('blue');
//     console.log('mouseenter div. Add blue.');
// });
// document.querySelector('.enter').addEventListener('mouseleave', function(ev){
//     ev.currentTarget.classList.remove('blue');
//     console.log('mouseleave div. Remove blue.');
// });

// document.querySelector('.over').addEventListener('mouseout', function(ev){
//     ev.currentTarget.classList.remove('blue');
//     console.log('mouseout div. Remove blue.');
// });
// document.querySelector('.over').addEventListener('mouseover', function(ev){
//     ev.currentTarget.classList.add('blue');
//     console.log('mouseover div. Add blue.');
// });

// nodes in javascript
// let result = document.getElementById('myid');
// next sibling and next element sibling
// console.log(result.firstChild.nextSibling)
// console.log(result.firstChild.nextElementSibling)
// result.firstChild.nextElementSibling.textContent = "I am learning javascript"

//previous sibling and previous element sibling 
// console.log(result.lastChild.previousSibling)
// console.log(result.lastChild.previousElementSibling)
// console.log(result.lastChild.previousSibling)
// console.log(result.lastChild.previousElementSibling)
// result.lastChild.previousElementSibling.textContent = "I am learning javascript"

//first child and first element child
// console.log(result.firstChild)
// console.log(result.firstElementChild)
// result.firstChild.textContent = "I am learning javascript DOM"

// parenode and parent element 
// let result = document.getElementById('my');
// console.log(result.parentNode)
// console.log(result.parentElement)

// let demoi = document.getElementById("denmo");
// console.log(demoi.innerHTML)
// console.log(demoi.textContent)
// console.log(demoi.innerText = "<h1>sdfsd</h1>")