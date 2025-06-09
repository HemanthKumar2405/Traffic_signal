let forstop = document.getElementById("stopLight");
let forready = document.getElementById("readyLight");
let forgo = document.getElementById("goLight");

let one = document.getElementById("stopButton");
let two = document.getElementById("readyButton");
let three = document.getElementById("goButton");


function red() {
    forready.style.backgroundColor = "#4b5069";
    forgo.style.backgroundColor = "#4b5069";
    forstop.style.backgroundColor = "red";

    one.style.backgroundColor = "red";
    two.style.backgroundColor = "#4b5069";
    three.style.backgroundColor = "#4b5069";
}

function yel() {
    forstop.style.backgroundColor = "#4b5069";
    forgo.style.backgroundColor = "#4b5069";
    forready.style.backgroundColor = "yellow";

    one.style.backgroundColor = "#4b5069";
    two.style.backgroundColor = "yellow";
    three.style.backgroundColor = "#4b5069";
}

function green() {
    forstop.style.backgroundColor = "#4b5069";
    forready.style.backgroundColor = "#4b5069";
    forgo.style.backgroundColor = "green";

    one.style.backgroundColor = "#4b5069";
    two.style.backgroundColor = "#4b5069";
    three.style.backgroundColor = "green";
}
