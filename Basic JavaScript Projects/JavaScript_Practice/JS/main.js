function multiplication() {
    num1 = document.getElementById("N1").value;
    num2 = document.getElementById("N2").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function division() {
    num1 = document.getElementById("N1").value;
    num2 = document.getElementById("N2").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Function() {
    document.write(2E310);