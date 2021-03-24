var Family = "The Shicks", //assigning string values to multiple variables
    Dad = "David",
    Mom = "Pamela",
    Daughter = "Carly",
    Son1 = "Benjamin",
    Son2 = "Zachary";


var Family = Family.fontcolor("blue"); //adding color to the text and the using document write to display
document.write(Family);
var Dad = Dad.fontcolor("green");
document.write(Dad);
var Mom = Mom.fontcolor("yellow");
document.write(Mom);
var Daughter = Daughter.fontcolor("red");
document.write(Daughter);
var Son1 = Son1.fontcolor("orange");
document.write(Son1);
var Son2 = Son2.fontcolor("purple");
document.write(Son2);

document.write(Son2 + Dad); //concatenate example

window.alert("Hello World!") //window alert example

function My_First_Function() { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("green"); //Using the fontcolor method on str variable. Also is an expression.
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result into HTML element with "Green_Text" id
}