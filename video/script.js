const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
btn.addEventListener("click", function() {
    if (!btn.classList.contains("slide")) {
        video.pause();
        btn.classList.add("slide");
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});

//preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
});