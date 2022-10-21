const obj ={
    name: "John",
    age: "20"
};
const data = JSON.stringify(obj);

console.log(obj);
console.log(JSON.parse(data));

const btn = document.querySelector(".btn");

btn.addEventListener("click",() =>{
   const request = new XMLHttpRequest();//создание запроса
   request.open("GET", "data.json");//оьъявление метода
   request.setRequestHeader("Content-type", "application/json");//объявили тип данных
   request.send();//отправка запроса
   request.addEventListener("load", () => {
       const data = JSON.parse(request.response);
       console.log(data);
       document.querySelector(".name").innerHTML = data.name;
       document.querySelector(".age").innerHTML = data.age;
   });
});

// let http = requestAnimationFrame("http");
//
// http
//     .createServer((request, response) =>{
//         response.writeHead(200, {"Content-Type": "text/plain"});
//         response.end("Hello world");
//     })
//     .listen(8081);
//
// console.log("server running");
//







