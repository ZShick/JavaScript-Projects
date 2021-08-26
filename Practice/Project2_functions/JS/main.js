function My_Second_Function() {
    var str = "This text is now purple!"; //defining a new string var
    var result = str.fontcolor("purple"); //defining a new result var which will be the text color changing to purple
    document.getElementById("Purple_Text").innerHTML = result; //telling the function what element to grab by its id so it know what to change to purple after the button is clicked
}

function myFunction() {
    var sentence = "I am learning"; //defining a new sentence vaiable
    sentence += " a lot from this course!"; //concatenating the sentence with an additional string
    document.getElementById("Concatenate").innerHTML = sentence; //telling the script what ID to I was it to display the function result in.
}