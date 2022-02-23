const color = document.querySelectorAll(".color");

const colorName = document.querySelectorAll(".color-name");
const colorNameHex = document.querySelectorAll(".color-name-hex");

const NegColor = document.querySelectorAll(".neg-color");

const NegColorName = document.querySelectorAll(".neg-color-name");
const NegColorNameHex = document.querySelectorAll(".neg-color-name-hex");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    generateColors();
});

function generateColors() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(generate());
    }

    //create ready colors  rgb(0,0,0)
    for (let i = 0; i < 3; i++) {
        rgb.unshift(rgb.pop());
        let readyColor = "rgb(" + rgb.join() + ")";

        //change colors in html
        color[i].style.backgroundColor = readyColor;
        colorName[i].textContent = readyColor;
        colorNameHex[i].textContent = RGBToHex(rgb[0], rgb[1], rgb[2]);

        //create complementary color
        let negativeRgb = [];
        rgb.map(function(val) {
            let negative = 255 - val;
            negativeRgb.push(negative);
        });

        let NegReadyColor = "rgb(" + negativeRgb.join() + ")";

        //change colors in html
        NegColor[i].style.backgroundColor = NegReadyColor;
        NegColorName[i].textContent = NegReadyColor;
        NegColorNameHex[i].textContent = RGBToHex(
            negativeRgb[0],
            negativeRgb[1],
            negativeRgb[2]
        );
    }
}

//255.0.0
function generate() {
    return Math.floor(Math.random() * 255);
}

function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
}

let m = document.querySelector("main");
let b = window.getComputedStyle(m);
console.log(b.getPropertyValue("height"));