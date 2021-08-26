function full_Sentence() { //just like we concatenate all the elements to summon Captain Planet, so too does this function concatenate parts into a whole.
    var part_1 = "Earth! ";
    var part_2 = "Fire! ";
    var part_3 = "Wind! ";
    var part_4 = "Water! ";
    var part_5 = "Heart! ";
    var part_6 = "By your powers combined... I AM CAPTAIN PLANET!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5, part_6);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //slices out the word "sentence" from the sentence
    var Sentence = "A part of this sentence will be sliced out.";
    var Section = Sentence.slice(15, 24);
    document.getElementById("Slice").innerHTML = Section;
}

function uppercase() { //turns the text up[percase by pressing a button]
    var S1 = document.getElementById("Turn2Up").innerHTML;
    var S2 = S1.toUpperCase();
    document.getElementById("Turn2Up").innerHTML = S2;
}

function waldosearch() { //searches the sentence in the HTML document for where the word "Waldo" starts which is at the 9th character in the string.
    var S3 = document.getElementById("searching").innerHTML;
    var S4 = S3.search("Waldo");
    document.getElementById("searching").innerHTML = S4;
}

function string_Method() { //writes out 800 as a string
    var X = 800;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //cuts down the number to being only 10 characters long
    var X = 3564.889711127445896102;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function Only_3_decimals() { //rounds the number given to the nearest thousandths place (or only 3 decimals)
    var X = 45.26554891;
    document.getElementById("fixing").innerHTML = X.toFixed(3);
}

function Vof() { //assigns X the value of 13, then creates the vaiable Y. Y is equal to the value of X which means Y is also 13. Then the value of Y is displayed
    var X = 13;
    var Y = X.valueOf();
    document.getElementById("value_of").innerHTML = Y;
}