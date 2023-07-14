//adding new elements
// function addElement(langName) {
//     const li = document.createElement('li')
//     let addText = document.createTextNode(langName)
//     li.appendChild(addText);
//     document.querySelector('.language').appendChild(li)
// }
// addElement('CSS');
// addElement('Javascript')

function addElement(langName){
    let li = document.createElement('li')
    li.innerHTML=`${langName}`
    document.querySelector('.language').appendChild(li)
}
addElement('CSS');
addElement('JavaScript')

//Edit values
document.querySelector()