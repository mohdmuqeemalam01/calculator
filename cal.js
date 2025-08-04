
let inp = document.getElementsByTagName("input")[0];
let sound = new Audio("tic.mp3");


function clean() {
    inp.value = '';

    sound.play();

}

function seven() {
    inp.value += 7;

    sound.play();
}
function eight() {
    inp.value += 8;

    sound.play();
}
function nine() {
    inp.value += 9;

    sound.play();
}
function six() {
    inp.value += 6;

    sound.play();
}
function five() {
    inp.value += 5;

    sound.play();
}
function four() {
    inp.value += 4;

    sound.play();
}
function three() {
    inp.value += 3;

}
function two() {
    inp.value += 2;

}
function one() {
    inp.value += 1;

    sound.play();
}
function zero() {
    inp.value += 0;

}

function del() {
    inp.value = inp.value.slice(0, -1);
    sound.play();
}


function dots() {
    let lastNumber = inp.value.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes(".")) {
        inp.value += ".";
        sound.play();
    }

}

function root() {
    inp.value += "√";

    sound.play();
}

function add() {
    inp.value += "+";
    sound.play();
}

function sub() {
    inp.value += "-";
    sound.play();
}
function multi() {
    inp.value += "*";
    sound.play();
}
function divide() {
    inp.value += "/";
    sound.play();
}
function mod() {
    inp.value += "%";
    sound.play();
}
function equal() {
    sound.play();

    try {
        inp.value = eval(inp.value);
    } catch {
        inp.value = "Error";
    }
}
