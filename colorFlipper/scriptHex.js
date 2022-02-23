const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const compClr = document.querySelector(".complementary-clr");

btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);
    color.textContent = hexColor;
    color.style.color = complementaryColor(hexColor);
    compClr.textContent = complementaryColor(hexColor);
    compClr.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;
});
//get random value from array
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

//get complementary color
function complementaryColor(color) {
    let complementaryClr = "#";

    for (let i = 1; i < color.length; i++) {
        let letter = getInverted(color[i]);
        complementaryClr += letter;
    }
    return complementaryClr;
}
console.log(complementaryColor("#47870F"));
//find inverted char
function getInverted(clr) {
    if (clr == 0) {
        return "F";
    }
    if (clr == 1) {
        return "E";
    }
    if (clr == 2) {
        return "D";
    }
    if (clr == 3) {
        return "C";
    }
    if (clr == 4) {
        return "B";
    }
    if (clr == 5) {
        return "A";
    }
    if (clr == 6) {
        return 9;
    }
    if (clr == 7) {
        return 8;
    }
    if (clr == 8) {
        return 7;
    }
    if (clr == 9) {
        return 6;
    }
    if (clr == "A") {
        return 5;
    }
    if (clr == "B") {
        return 4;
    }
    if (clr == "C") {
        return 3;
    }
    if (clr == "D") {
        return 2;
    }
    if (clr == "E") {
        return 1;
    }
    if (clr == "F") {
        return 0;
    }
}

//get inverted index //!does not work inside the function, same as switch case
function index(x) {
    let index = hex.length - hex.indexOf(x) - 1;
    let ltr = hex[index];
    return ltr;
}