function type_Of() {
    document.write(typeof "Word");
    document.write(typeof 3);
    document.write("10" + 5);
    document.getElementById("TypeOf").innerHTML; //writes all 3 answers next to each other
}

function infinite() {
    document.getElementById("Infinity").innerHTML = (3E310); //causes a positive infinity
}

function neginfinite() {
    document.getElementById("NegInfinity").innerHTML = (-3E310); //causes a negative infitity
}

function boolt() {
    document.getElementById("BOOLtrue").innerHTML = (5 > 2); //Boolean true
}

function boolf() {
    document.getElementById("BOOLfalse").innerHTML = (4 < 1); //Boolean false
}

function consoleLog() {
    console.log(2 + 2);
    document.getElementById("console").innerHTML; //answer of 4 appears in console log when clicked
}

function ConBooFal() {
    console.log(6 > 8);
    document.getElementById("consoleBoolF").innerHTML; // Boolean answer of false appears in console log when clicked
}

function EqualT() {
    document.getElementById("equalT").innerHTML = ((5 + 4) == 9); //statement is true as they are equal
}

function EqualF() {
    document.getElementById("equalF").innerHTML = ((5 + 11) == 19); //statement is false as they are not equal
}

function TripleEqual1() {
    X = 19;
    Y = 19;
    document.getElementById("TE1").innerHTML = (X === Y); //variables are the same so true is returned as answer
}

function TripleEqual2() {
    X = 19;
    Y = "19";
    document.getElementById("TE2").innerHTML = (X === Y); //variables are same value but different data types, so false
}

function TripleEqual3() {
    X = "Doggy";
    Y = 5;
    document.getElementById("TE3").innerHTML = (X === Y); //variables are different values and data types, so false
}

function TripleEqual4() {
    X = 9;
    Y = 19;
    document.getElementById("TE4").innerHTML = (X === Y); //variables are same data type but different values, so false
}

function andT() {
    document.getElementById("AndT").innerHTML = (5 > 2 && 10 > 4); //Both sides are true and it is an AND comparison, so true
}

function andF() {
    document.getElementById("AndF").innerHTML = (5 > 10 && 10 > 4); //at least one side is not true and it is an AND comparison, so false
}

function orT() {
    document.getElementById("OrT").innerHTML = (5 > 10 || 10 > 4); //at least one side is true and it is an OR comparison, so true
}

function orF() {
    document.getElementById("OrF").innerHTML = (5 > 10 || 10 > 20); //both sides are false and it is an OR comaparsion, so false
}

function notF_Function() {
    document.getElementById("NotF").innerHTML = !(5 > 10); //the statement is true which give us a false result
}

function notT_Function() {
    document.getElementById("NotT").innerHTML = !(5 > 10); //the statement is false which gives us a true result
}