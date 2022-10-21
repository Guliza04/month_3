// let string = prompt("Tell me your name");
//
// let regExp= /y/gi;
// console.log(string.match(regExp));

// const  letter = "21456735268532617";
//  const  regExp = /\d/g;
// console.log(letter.match(regExp));
// console.log(letter.replace(regExp,"*"));

// phoneInput.value ="+996"
// const phoneInput = document.querySelector(".phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");
//
// const phoneRegExp = /^\+996\d{3}-\d{2}-\d{2}-\d{2}$/;
//
// phoneCheck.addEventListener("click", ()=>{
//     if (phoneRegExp.test(phoneInput.value)) {
//         phoneResult.innerText = "ok";
//         phoneResult.style.color = "green";
//     } else {
//         phoneResult.innerText = "not ok";
//         phoneResult.style.color = "red";
//
// phoneCheck.addEventListener("click");

phoneInput.value ="+996"
const phoneInput = document.querySelector("phoneInput");
const phoneResult = document.querySelector("phoneResult");
const phoneCheck = document.querySelector("phoneCheck");

const phoneRegExp = /^\+996\d{3}-\d{2}-\d{2}-\d{2}$/;
 phoneCheck.addEventListener("click", ()=> {
     if (phoneRegExp.test(phoneInput.value)) {
         phoneResult.innerText = "V";
         phoneResult.style.color = "green";
     } else {
         phoneCheck.innerText = "X";
         phoneCheck.style.color = "red";

     }

     phoneCheck.addEventListener("click");
     console.log(phoneRegExp)












