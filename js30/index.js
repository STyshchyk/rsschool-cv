
let isPlaying = false;
let currentTrack = 0;


currentTrack = localStorage.getItem("track") ?  localStorage.getItem("track") : 0;

const imgScr = ['assets/imgs/FFDP.jpg', 'assets/imgs/anvil.jpg', 'assets/imgs/diamond.jpg'];
const audioLinks = ['assets/mp3/track3.mp3', 'assets/mp3/track2.mp3', 'assets/mp3/track1.mp3'];
let songNames = {
    [0]: {
        songName: "FFDP ",
        songTitle: "Under And Over it"
    },
    [1]: {
        songName: "Lorn ",
        songTitle: "Anvil"
    },
    [2]: {
        songName: "Lorn ",
        songTitle: "Diamond"
    }
}

let getAudio = new Audio(audioLinks[currentTrack])
const BtnPlay = document.querySelector('.btn-play')
const songTitle = document.querySelector('.track-title')
const songName = document.querySelector('.track-name')
const forward = document.querySelector('.icono-forward')
const backward = document.querySelector('.icono-rewind')


function checkPlayStatus() {
    if (isPlaying) {
        isPlaying = false;
      let promise =   getAudio.play();
        BtnPlay.classList.remove('icono-play');
        BtnPlay.classList.add('icono-pause');
    } else {
        isPlaying = true;
        getAudio.pause();
        BtnPlay.classList.add('icono-play');
        BtnPlay.classList.remove('icono-pause');

    }
}


BtnPlay.addEventListener("click", checkPlayStatus);

getAudio.addEventListener(
    "loadeddata",
    () => {

        document.querySelector('.trackDuration').textContent = getTimeCodeFromNum(getAudio.duration);
        document.querySelector(".controls .volume-percentage").style.width = 75 + '%';
        getAudio.volume = 0.75;
    },
    false
);

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}

setInterval(() => {
    let percent = Math.floor((getAudio.currentTime) * 100 / (getAudio.duration))
    document.querySelector('.currentTime').textContent = getTimeCodeFromNum(getAudio.currentTime)
    document.querySelector('.progressBar').style = `width: ${percent}%;`

}, 1000)

let styles = function (index) {
    return `    
background: url(${imgScr[parseInt(index)]});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;`
};

function setName(index) {
    runOnce = false;

    let title = songNames[index].songTitle, name = songNames[index].songName;
    songTitle.textContent = title + "  ";
    songName.textContent = name;
    document.querySelector('.img').style = styles(index);
    document.querySelector('.gb-img').style = styles(index)
    localStorage.setItem("track", index)
}

let runOnce = true;
if (runOnce) setName(currentTrack)
else runOnce = false;


forward.addEventListener("click", () => {
    currentTrack++;
    if (currentTrack > imgScr.length - 1) currentTrack = 0;
    getAudio.currentTime = 0;
    isPlaying = false;
    checkPlayStatus()
    getAudio = new Audio(audioLinks[currentTrack]);
    setName(currentTrack)

})
backward.addEventListener("click", () => {
    currentTrack--;
    if (currentTrack < 0) currentTrack = 2;
    getAudio.currentTime = 0;
    isPlaying = false;
    checkPlayStatus()
    getAudio = new Audio(audioLinks[currentTrack]);
    setName(currentTrack)
})


const volume = document.querySelectorAll(".volume-button, .volume-slider")

volume.forEach(elem => {
    elem.addEventListener("mouseover", () => {
       volume[1].style.display = "block"
    })
})
volume.forEach(elem => {
    elem.addEventListener("mouseout", () => {
        volume[1].style.display = "none"
    })
})


document.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = document.querySelector(".volume");
    getAudio.muted = !getAudio.muted;
    if (getAudio.muted) {
         volumeEl.classList.remove("icono-volumeMedium");
        volumeEl.classList.add("icono-volumeMute");
    } else {
        volumeEl.classList.add("icono-volumeMedium");
        volumeEl.classList.remove("icono-volumeMute");
    }
});



const volumeSlider = document.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    getAudio.volume = newVolume;
    document.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)


const timeline = document.querySelector(".timeline");
timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
     getAudio.currentTime =   e.offsetX / parseInt(timelineWidth) * getAudio.duration;
}, false);