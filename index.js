const TheVideo = document.querySelector("video");

console.dir(TheVideo);

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        TheVideo.play();
    }, 5000);
});
