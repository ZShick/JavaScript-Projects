function validateForm() {
    var x = document.forms["myForm"]["Name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["Email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    var z = document.forms["myForm"]["Company"].value;
    if (z == "") {
        alert("Company must be filled out");
        return false;
    }
    var q = document.forms["myForm"]["Message"].value;
    if (q == "") {
        alert("Message must be filled out");
        return false;
    }
}