var screen1 = document.querySelector(".screen1");
var screen2 = document.querySelector(".screen2");
var close1 = document.querySelector(".close");
var clear = document.getElementById("clear");
var a, b, counter = 1,checkDot = 0; // Counter is for clearing the main screen when we enter a new number and CheckDot is for checking the number of (.)dots in given number
screen2.innerHTML = "0";
close1.addEventListener("click",function(){
    close();
})
function calculate(element) {
    if ((element.innerHTML >= 1 || element.innerHTML == ".")) {
        if ((counter == 1 || screen2.innerHTML == "0") && element.innerHTML != ".") {
            screen2.innerHTML = "";
        }

        counter++;
        if (element.innerHTML == "." && checkDot < 1){
            checkDot ++;
            screen2.innerHTML += element.innerHTML;
        } else if (element.innerHTML != "."){
            screen2.innerHTML += element.innerHTML;            
        }
        clear.innerHTML = "C";
    } else if (element.innerHTML == "0") {
        if (screen2.innerHTML != "0") {
            screen2.innerHTML += element.innerHTML;
            checkDot = 1;
        }
    } else if (element.innerHTML == "C") {
        screen2.innerHTML = "";
        clear.innerHTML = "AC";
        checkDot = 0;
        screen2.innerHTML = "0";
    } else if (element.innerHTML == "AC") {
        screen1.innerHTML = "&nbsp;";
        checkDot = 0;
        screen2.innerHTML = "0";
    } else if ((element.innerHTML == "+" || element.innerHTML == "-" || element.innerHTML == "÷" || element.innerHTML == "×") && screen2.innerHTML != "") {
        a = screen2.innerHTML.trim();
        screen1.innerHTML = screen2.innerHTML + " " + element.innerHTML;
        counter = 1;
        checkDot = 0;
    } else if (element.innerHTML == "+/-") {
        if (screen2.innerHTML.split("")[0] != "-") {
            screen2.innerHTML = "-" + screen2.innerHTML;
            console.log(screen2.innerHTML.split("")[0])
        }
        else {
            screen2.innerHTML = - parseFloat(screen2.innerHTML);
        }
    } else if (element.innerHTML == "%") {
        screen2.innerHTML = parseFloat(screen2.innerHTML) / 100;
        checkDot = 1;
    }
}
function calc() {
    if (screen1.innerHTML.trim().split(" ")[1] == "+") {
        b = screen2.innerHTML.trim();
        var temp;
        temp = b;
        b = addition(parseFloat(a), parseFloat(b));
        screen2.innerHTML = b;
        screen1.innerHTML = a + " + " + temp + " = ";
        a = b;
        counter = 1;
        checkDot = 0;
    } else if (screen1.innerHTML.trim().split(" ")[1] == "-") {
        b = screen2.innerHTML.trim();
        var temp;
        temp = b;
        b = subtraction(parseFloat(a), parseFloat(b));
        screen2.innerHTML = humanize(b);
        screen1.innerHTML = a + " - " + temp + " = ";
        a = b;
        counter = 1;
        checkDot = 0;
    } else if (screen1.innerHTML.trim().split(" ")[1] == "÷") {
        b = screen2.innerHTML.trim();
        var temp;
        temp = b;
        if (b != 0) {
            b = division(parseFloat(a), parseFloat(b));
            screen2.innerHTML = humanize(b);
        } else {
            screen2.innerHTML = "Infinity";
        }
        screen1.innerHTML = a + " ÷ " + temp + " = ";
        a = b;
        counter = 1;
        checkDot = 0;
    } else if (screen1.innerHTML.trim().split(" ")[1] == "×") {
        b = screen2.innerHTML.trim();
        var temp;
        temp = b;
        b = multiplication(parseFloat(a), parseFloat(b));
        screen2.innerHTML = humanize(b);
        screen1.innerHTML = a + " × " + temp + " = ";
        // a = b;
        counter = 1;
        checkDot = 0;
    }
}
function addition(a, b) {
    return a + b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {

    return a / b;
}
function subtraction(a, b) {
    return a - b;
}
function humanize(x) {
    return x.toFixed(3).replace(/\.?0*$/, '');
}