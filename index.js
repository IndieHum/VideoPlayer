const TheVideo = document.querySelector("video");
const PlayButton = document.getElementById("play-btn");
const PlayButtonicon = PlayButton.querySelector("span");
const StopButton = document.getElementById("stop-btn");
const VolumeButton = document.getElementById("volume-btn");
const VolumeButtonIcon = VolumeButton.querySelector("span");
const TimeRange = document.getElementById("time-range");
const TimeStamps = document.getElementById("time-stamps");
const TimeTotal = document.getElementById("time-total");

const ToggleVideoHandler = () => {
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

const ProgressBarHandler = () => {
    TimeRange.value = (TheVideo.currentTime / TheVideo.duration) * 100;

    let min = (TheVideo.currentTime / 60).toFixed();
    if (min < TheVideo.duration) min = `${min < 10 ? "0" : ""}${String(min)}`;
    let sec = (TheVideo.currentTime % 60).toFixed();
    if (sec < TheVideo.duration) sec = `${sec < 10 ? "0" : ""}${String(sec)}`;

    TimeStamps.innerText = `${min}:${sec}`;

    console.log(min, sec);
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

TheVideo.addEventListener("click", ToggleVideoHandler);
TheVideo.addEventListener("timeupdate", ProgressBarHandler);
TimeRange.addEventListener("change", TimeRangeHandler);
PlayButton.addEventListener("click", ToggleVideoHandler);
StopButton.addEventListener("click", StopButtonHandler);
VolumeButton.addEventListener("click", VolumeButtonHandler);
