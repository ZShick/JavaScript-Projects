function count_To_Ten() { //X starts at 1 and then increments by 1 up, priniting the next number on a new line until it reaches 10 where the "while" loop stops.
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function String_Length() { //counts the number of characters (spaces included) in the given text string
    var str = "I'm ugly and I'm proud!"
    var X = str.length;
    document.getElementById("string_length").innerHTML = X;
}

var Recommendations = ["The Lord of the Rings", "The Stormlight Archive", "The Witcher", "Mistborn", "The Dresden Files", "The Hitchhikers Guide to the Galaxy"];
var Content = "";
var Y;
//lists out the content of the list with each entry on a new line until all the items are listed
function for_Loop() {
    for (Y = 0; Y < Recommendations.length; Y++) {
        Content += Recommendations[Y] + "<br>";
    }
    document.getElementById("List_of_BookSeries").innerHTML = Content;
}

function Profile_Pics() { //created different instances of the object "Profile_Pic" and then created a string to combine with the captions to form a complete sentence.
    var Profile_Pic = [];
    Profile_Pic[0] = "flirting with Queen Elizabeth";
    Profile_Pic[1] = "helping the Navy figure out how to find Bin Laden";
    Profile_Pic[2] = "teaching 420 orphans how to read and write";
    Profile_Pic[3] = "hosting the first Rock Concert on the ISS";
    document.getElementById("Me").innerHTML = "In this picture, I am " + Profile_Pic[3] + ".";
}

function constant_function() { //created a constant and then altered the color afterwards. Added a new price category and then strung the info together into a sentence to print
    const Kitchen_Untensil = { type: "knife", brand: "kitchenmade", color: "silver" };
    Kitchen_Untensil.color = "white";
    Kitchen_Untensil.price = "$35";
    document.getElementById("Constant").innerHTML = "The cost of the " + Kitchen_Untensil.type + " was " + Kitchen_Untensil.price + ".";
}

function Let_function() { //testing out using "let" rather than "var"
    var X = 51;
    document.getElementById("let_list1").innerHTML = X; {
        let X = 24;
        document.getElementById("let_list2").innerHTML = X;
    }
    document.getElementById("let_list3").innerHTML = X;
}

function Var_function() { //creating an identical function to the one above except I am using "var" here instead of "let" to see how the results differ.
    var X = 51;
    document.getElementById("var_list1").innerHTML = X; {
        var X = 24;
        document.getElementById("var_list2").innerHTML = X;
    }
    document.getElementById("var_list3").innerHTML = X;
}

function return_function() { //using the "return" statement and getting the function to do the multiplication for me and then print the result below the button.
    var X = myFunction(8, 9);

    function myFunction(a, b) {
        return a * b;
    }
    document.getElementById("answer").innerHTML = X;
}