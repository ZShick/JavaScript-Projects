function Hobbit_Function() {
    var Hobbit_Output;
    var Hobbits = document.getElementById("Hobbit_Input").value;
    var Hobbit_String = " is a wonderful Hobbit!";
    switch (Hobbits) {
        case "Frodo":
            Hobbit_Output = "Frodo" + Hobbit_String;
            break;
        case "Bilbo":
            Hobbit_Output = "Bilbo" + Hobbit_String;
            break;
        case "Pippin":
            Hobbit_Output = "Pippin" + Hobbit_String;
            break;
        case "Samwise":
            Hobbit_Output = "Samwise" + Hobbit_String;
            break;
        case "Merry":
            Hobbit_Output = "Merry" + Hobbit_String;
            break;
        case "Rosie":
            Hobbit_Output = "Rosie" + Hobbit_String;
            break;
        default:
            Hobbit_Output = "Please enter a Hobbit's name exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Hobbit_Output;
}

function ClassFunction() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

function circleCanvas() {
    var c = document.getElementById("CanvasTest");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function fillColor() {
    var c = document.getElementById("CanvasTest");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 150, 0);
    grd.addColorStop(0, "purple");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 150, 100);
}