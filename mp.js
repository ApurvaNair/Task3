let currentMusic = 0;
let input = document.getElementById("headshell");
let audio = document.getElementById("player");
const seekbar = document.querySelector('.seek-bar');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('#play');
const title = document.getElementById("title");
const forwardBtn = document.querySelector('#next');
const backwardBtn = document.querySelector('#prev');
input.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        audio.currentTime = 0;
        input.innerHTML = "";
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    } else {
        audio.pause();
        input.innerHTML = "Play";
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    }
});

const songs = [
    {
        name: "music1",
        title: "FLOATING ABSTRACT",
    },
    {
        name: "music2",
        title: "SUMMER WALK",
    },
    {
        name: "music3",
        title: "COME WITH ME",
    },
];

function playSong() {
    audio.play();
    playBtn.innerHTML = 'fa-pause';
}

const loadSong = (songs) => {
    title.textContent = songs.title;
    music.src = `${ songs.name }.mp3`;
    currentTime.innerHTML = '00.00';
};

songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
};
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
function audioVolume(amount) {
    let changevolume = document.getElementsByTagName("audio")[0];
    changevolume.volume = amount;
}

