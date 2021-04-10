function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the Order of " + character.innerHTML + ".");
}