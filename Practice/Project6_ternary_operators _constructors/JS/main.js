function Vote_Function() { // ternary operation example. If Age is less than 18 the left message will display. otherwise, the one on the right will display.
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young " : "You are old enough ";
    document.getElementById("Vote").innerHTML = Can_vote + "to vote.";
}

function Vehicle(Make, Model, Year, Color) { //use of New and This from the course
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() { //finds the requested values and links them together into a sentence to display in the HTML.
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactored in " + Erik.Vehicle_Year;
}

function Stormlight(Title, Pages, Date, Character) { // My version of the above but with my favorite book series and its entries.
    this.Stormlight_Title = Title;
    this.Stormlight_Pages = Pages;
    this.Stormlight_Date = Date;
    this.Stormlight_Character = Character;
}
var Book1 = new Stormlight("The Way of Kings", 1001, "August 31, 2010", "Kaladin");
var Book2 = new Stormlight("Words of Radiance", 1080, "March 4, 2014", "Shallan");
var Book3 = new Stormlight("Oathbringer", 1233, "November 14, 2017", "Dalinar");
var Book4 = new Stormlight("Rhythm of War", 1232, "November 17, 2020", "Eshonai and Venli");

function Book3info() {
    document.getElementById("book").innerHTML =
        "Book 3 of the Stormlight Archive is titled " + Book3.Stormlight_Title + ". It was released on " +
        Book3.Stormlight_Date + " and focused on the character Dalinar. It has " +
        Book3.Stormlight_Pages + " pages."
}

function count_Function() { //nested function example. the HTML call on the count_Function which in turn calls on the Count function. Count is defined and given a starting point and an increment to add to it before giving us a return.
    document.getElementById("Nested_Function").innerHTML = Count();

    function Count() {
        var Starting_point = 12;

        function Plus_two() { Starting_point += 2; }
        Plus_two();
        return Starting_point;
    }
}