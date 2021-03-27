var X = 10;

function Add_numbers_1() {
    document.getElementById("Global1").innerHTML = "X + 20 = " + (20 + X + "<br>");
}

function Add_numbers_2() {
    document.getElementById("Global2").innerHTML = "X + 100 = " + (X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var Y = 10;
    console.log(20 + Y);
    document.getElementById("Local1").innerHTML = "20 + Y = " + (20 + Y + "<br>");
}

function Add_numbers_4() {
    console.log(Y + 100);
    document.getElementById("Local2").innerHTML = "Y + 100 = " + (Y + 100);
}
Add_numbers_3();
Add_numbers_4();