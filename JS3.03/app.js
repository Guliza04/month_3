// const doHomework = (subject, callback) => {
//     alert(`Starting my ${subject} homework`);
//     callback();
// };
//
// const alertFinished =() => {
//     alert("Done!!!");
// };
//
// doHomework(45, alertFinished);

const  btn = document.querySelectorAll("button");

console.log(btn);

btn.forEach((item) => {
    console.log(item);
    item.addEventListener("click", (event) => {
        console.log(event.target);
        if (event.target.classList.contains("red")) {
        }else {
            event.target.classList.add("red");
        }
    });
});

const wrapper = document.querySelector(".wrapper");
const newBtn= document.getElementById(".button");


wrapper.append(newBtn);
wrapper.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target);
        if (event.target.classList.remove("red")) {
        }else {
            event.target.classList.add("red");
        }
    }
});








