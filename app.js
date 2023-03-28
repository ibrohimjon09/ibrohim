function btn1() {
    document.querySelector("body").style.background = "linear-gradient(45deg, rgb(0, 177, 0), rgb(46, 255, 46), rgb(82, 255, 82), rgb(159, 255, 159))"
}
function btn2() {
    document.querySelector("body").style.background = "linear-gradient(45deg, yellow,rgb(255, 255, 7), rgb(255, 255, 82), rgb(255, 255, 100), rgb(255, 255, 120))"
    document.querySelector("#h11").innerHTML = "Yellow"
}
function btn3() {
    document.querySelector("body").style.background = "linear-gradient(45deg, gray,rgb(172, 172, 172),rgb(220, 220, 220))"
    document.querySelector("#h11").innerHTML = "Gray"
}
function btn4() {
    document.querySelector("body").style.background = "linear-gradient(45deg, blue,rgb(92, 92, 255),rgb(135, 135, 255))"
    document.querySelector("#h11").innerHTML = "Blue"
}


const option = document.getElementById('option')

function add() {
    document.querySelector("body").style.background = option.value
}
