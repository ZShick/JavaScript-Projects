function my_Dictionary() { //List of my favorite things in each category
    var Favorite = {
        Book: "The Lord of the Rings",
        Movie: "La La Land",
        VideoGame: "Donkey Kong Country",
        Drink: "Iced Coffee",
        Food: "Chocolate Ice Cream",
        Sport: "Basketball",
        Team: "Trail Blazers"
    };
    delete Favorite.VideoGame; //deletes Donkey Kong Country from the list right before it is call by the next step
    document.getElementById("Dictionary").innerHTML = Favorite.VideoGame; //will appear as "undefined" due to VideoGame being deleted
}