const TheVideo = document.querySelector("video");
const PlayButton = document.querySelector(".play-btn");
const PauseButton = document.querySelector(".pause-btn");
const NavTime = document.querySelector(".nav-time");
const NavButton = NavTime.children[0];

let VideoTime = 10;

function NavTimeHandler() {
    setInterval(() => {
        NavButton.style.left = `${VideoTime}%`;
        while (TheVideo.currentTime < TheVideo.duration) {
            NavButton.style.left = `${VideoTime++}%`;
        }
    }, TheVideo.duration.toFixed() * 1000);
}

function PlayHandler() {
    TheVideo.play();
    PlayButton.style.display = "none";
    PauseButton.style.display = "inherit";
    NavTimeHandler();
    console.dir(TheVideo.currentTime);
    console.dir(TheVideo.duration);
}

function PauseHandler() {
    TheVideo.pause();
    PauseButton.style.display = "none";
    PlayButton.style.display = "inherit";
}

PlayButton.addEventListener("click", PlayHandler);
PauseButton.addEventListener("click", PauseHandler);
