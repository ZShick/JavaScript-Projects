var X = 10; //defining X as a universal variable so that all functions can use X

function Add_numbers_1() { //adding 20 to X
    document.getElementById("Global1").innerHTML = "X + 20 = " + (20 + X + "<br>");
}

function Add_numbers_2() { //adding 100 to X
    document.getElementById("Global2").innerHTML = "X + 100 = " + (X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { //defining Y locally and then adding 20 to it
    var Y = 10;
    console.log(20 + Y);
    document.getElementById("Local1").innerHTML = "20 + Y = " + (20 + Y + "<br>");
}

function Add_numbers_4() { //adding 100 to Y but Y was not defined globally or locally in this fucntion so it will not work
    console.log(Y + 100);
    document.getElementById("Local2").innerHTML = "Y + 100 = " + (Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function get_Date() { //an if function that only displays the text if it is before 5pm
    if (new Date().getHours() < 17) {
        document.getElementById("Hello").innerHTML = "Goodday to you.";
    }
}

function Age_Function() { //an if else function that tells you whether or not you are old enough to vote after you type in your age
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Donut_Function() { //a humorous function that asks you how many donuts you would like and chastises you for requesting any more than 1
    Donut = document.getElementById("Donut").value;
    if (Donut > 1) {
        Response = "Pretty selfish of you...";
    } else {
        Response = "Alright! Here you are.";
    }
    document.getElementById("How_many").innerHTML = Response;
}

function Time_function() { //an if, else if, else function that gives you a 1 of 3 different drink recommendations depending on the time of day.
    var Time = new Date().getHours();
    var Drink;
    if (Time < 12 == Time > 0) {
        Drink = "Good morning! Have a mug of coffee.";
    } else if (Time >= 12 == Time < 18) {
        Drink = "Good afternoon! Have a can of soda.";
    } else {
        Drink = "Good Evening! Have a glass of wine.";
    }
    document.getElementById("Time_of_day").innerHTML = Drink;
}