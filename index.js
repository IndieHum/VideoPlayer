const TheVideo = document.querySelector("video");
const PlayButton = document.getElementById("play-btn");
const PlayButtonicon = PlayButton.querySelector("span");
const StopButton = document.getElementById("stop-btn");
const VolumeButton = document.getElementById("volume-btn");
const VolumeButtonIcon = VolumeButton.querySelector("span");
const TimeRange = document.getElementById("time-range");
const TimeStamps = document.getElementById("time-stamps");
const TimeTotal = document.getElementById("time-total");
const ForwardButton = document.getElementById("forward-btn");
const RewindButton = document.getElementById("rewind-btn");

const ToggleVideoHandler = () => {
    if (!TheVideo.currentSrc) return alert("Video not found!");

    if (TheVideo.paused) {
        TheVideo.play();
        PlayButtonicon.innerText = "pause_circle";
    } else {
        TheVideo.pause();
        PlayButtonicon.innerText = "play_circle";
    }
};

const StopButtonHandler = () => {
    TheVideo.pause();
    TheVideo.currentTime = 0;
};

const TimeStringFixer = (type) => {
    // two entry : total & stamps

    const TimeToggle = `${
        type == "stamps" ? TheVideo.currentTime : TheVideo.duration
    }`;

    let min = (TimeToggle / 60).toFixed();
    if (min < TheVideo.duration) min = `${min < 10 ? "0" : ""}${String(min)}`;
    let sec = (TimeToggle % 60).toFixed();
    if (sec < TheVideo.duration) sec = `${sec < 10 ? "0" : ""}${String(sec)}`;

    return `${min}:${sec}`;
};

const ProgressBarHandler = () => {
    TimeTotal.innerText = TimeStringFixer("total");
    TimeStamps.innerText = TimeStringFixer("stamps");
    TimeRange.value = (TheVideo.currentTime / TheVideo.duration) * 100;
};

const TimeRangeHandler = () => {
    TheVideo.currentTime = (+TimeRange.value * TheVideo.duration) / 100;
};

const VolumeButtonHandler = () => {
    if (VolumeButtonIcon.innerText.includes("up")) {
        VolumeButtonIcon.innerText = "volume_off";
        TheVideo.volume = 0;
    } else {
        VolumeButtonIcon.innerText = "volume_up";
        TheVideo.volume = 1;
    }
};

const ForwardTimeHandler = () => {
    TheVideo.currentTime += 10;
};

const RewindTimeHandler = () => {
    TheVideo.currentTime -= 10;
};

TheVideo.addEventListener("click", ToggleVideoHandler);
TheVideo.addEventListener("timeupdate", ProgressBarHandler);
TimeRange.addEventListener("change", TimeRangeHandler);
PlayButton.addEventListener("click", ToggleVideoHandler);
StopButton.addEventListener("click", StopButtonHandler);
VolumeButton.addEventListener("click", VolumeButtonHandler);
window.addEventListener("keypress", (e) => {
    if (e.key == " ") ToggleVideoHandler();
});
ForwardButton.addEventListener("click", ForwardTimeHandler);
RewindButton.addEventListener("click", RewindTimeHandler);
