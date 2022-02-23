//check if touch device
// const isTouchDevice = () => {
//     return window.matchMedia("(pointer: coarse)").matches;
// };

// script
const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
        // if (isTouchDevice) {
        //     btn.style.transform = "rotate(90deg)";
        // }
    });
});

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         let question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });