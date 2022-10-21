const block = document.querySelector(".block");

let positionX =0;
let positionY =0;

const move = function () {
    let rad ={
        radius: 190,
        speed:30
    }
    let f=0;
    let s=2 *Math.PI/ 100
    setInterval(function () {
        f += s;
        block.style.left = 180+ rad.radius * Math.sin(f) +'px';
        block.style.top = 180+ rad.radius * Math.cos(f) +'px';
    }, rad.speed)
}

let counter =0;

function myinterval() {
    counter++;
    console.log(counter +'секунд');
    if (counter >= 30) {
        clearInterval(ctop);
    }
}
ctop = setInterval(myinterval, 1000);

requestAnimationFrame(move);







