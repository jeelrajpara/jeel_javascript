// let element = document.getElementById('div-03')
// console.log(element.closest('#div-02'))
// console.log(element.closest('#div-01')) //provided selector is empty
// console.log(element.closest('div div'))
// console.log(element.closest('article>div'))

//-------------------------------------------Practice questions--------------------------------------------------//
// Write a JavaScript function that returns a string that has letters in alphabetical order.
// function alphabeticalOrder(str){
//     return str.split('').sort().join('')
// }
// console.log(alphabeticalOrder('webmaste')) //abeemstw

//  Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// function longestWord(str){
//     let words = str.split(' ');
//     let longWord = "";
//     for(let i = 0;i<words.length;i++){
//        let word = words[i];
//        if(word.length>longWord.length){
//          longWord=word;
//        }
//     }
//     return longWord;
// }
// console.log(longestWord('Web development'))

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// function findVowel(str){
//     let count = 0;
//     for(let i =0;i<str.length;i++){
//         if('aeiouAEIOU'.includes(str[i])){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(findVowel('The quick brown fox'))

//  Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
function isPrime(num) {
    if (num < 2) {
        return `${num} its not a prime number`;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} its not a prime number`;
        }
    }
    return `${num} its a prime number`;
}
console.log(isPrime(10))