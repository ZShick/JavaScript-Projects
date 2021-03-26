function type_Of() {
    document.write(typeof "Word");
    document.write(typeof 3);
    document.write("10" + 5);
    document.getElementById("TypeOf").innerHTML;
}

function infinite() {
    document.getElementById("Infinity").innerHTML = (3E310);
}

function neginfinite() {
    document.getElementById("NegInfinity").innerHTML = (-3E310);
}

function andt() {
    document.getElementById("ANDtrue").innerHTML = (5 > 2);
}

function andf() {
    document.getElementById("ANDfalse").innerHTML = (4 < 1);
}

function consoleLog() {
    console.log(2 + 2);
    document.getElementById("console").innerHTML;
}

function ConBooFal() {
    console.log(6 > 8);
    document.getElementById("consoleBoolF").innerHTML;
}

function EqualT() {
    document.getElementById("equalT").innerHTML = ((5 + 4) == 9);
}

function EqualF() {
    document.getElementById("equalF").innerHTML = ((5 + 11) == 19);
}

function TripleEqual1() {
    X = 19;
    Y = 19;
    document.getElementById("TE1").innerHTML = (X === Y);
}

function TripleEqual2() {
    X = 19;
    Y = "19";
    document.getElementById("TE2").innerHTML = (X === Y);
}

function TripleEqual3() {
    X = "Doggy";
    Y = 5;
    document.getElementById("TE3").innerHTML = (X === Y);
}

function TripleEqual4() {
    X = 9;
    Y = 19;
    document.getElementById("TE4").innerHTML = (X === Y);
}

function andT() {
    document.getElementById("AndT").innerHTML = (5 > 2 && 10 > 4);
}

function andF() {
    document.getElementById("AndF").innerHTML = (5 > 10 && 10 > 4);
}

function orT() {
    document.getElementById("OrT").innerHTML = (5 > 10 || 10 > 4);
}

function orF() {
    document.getElementById("OrF").innerHTML = (5 > 10 || 10 > 20);
}

function notF_Function() {
    document.getElementById("NotF").innerHTML = !(5 > 10);
}

function notT_Function() {
    document.getElementById("NotT").innerHTML = !(5 > 10);
}