function addition_Function() {
    var Addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + Addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication_Function() {
    var Multiplication = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + Multiplication;
}

function division_Function() {
    var Division = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + Division;
}

function mix_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = "The additive inverse of 10 is " + -x;
}

function increment() {
    var X = 5;
    X++;
    document.getElementById("Math8").innerHTML = "Adding an increment of 1 to the number 5 gives you " + X; //adds 1 to X
}

function decrement() {
    var X = 5.25;
    X--;
    document.getElementById("Math9").innerHTML = "Subtracting a decrement of 1 from the number 5.25 gives you " + X; //subtracts 1 from X
}

function random_Basic() { //gives random number between 0 and 1
    window.alert(Math.random());
}

function random_100() { //gives random number between 0 and 100
    window.alert(Math.random() * 100);
}

function display_Pi() { //displays value of Pi
    document.getElementById("Math12").innerHTML = "The value of Pi is equal to " + Math.PI;
}

function round_Up() { //rounds up to the nearest integer
    document.getElementById("Math13").innerHTML = "8.93 rounded up to the nearest integer is " + Math.ceil(8.93);
}