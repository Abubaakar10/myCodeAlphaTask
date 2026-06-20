const songs = [

    {
        title: "Die Hard",
        artist: "Kendrick Lamar",
        src: "songs/Die Hard.mp3",
        cover: "images/cover1.jpg"
    },

    {
        title: "Hakuna Matata",
        artist: "Gunna",
        src: "songs/Hakuna Matata.mp3",
        cover: "images/cover2.jpg"
    },

    {
        title: "Red Leather (feat J. Cole)",
        artist: "Future & Metro Boomin",
        src: "songs/Red Leather (feat J. Cole).mp3",
        cover: "images/cover3.jpg"
    }

];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

const volume = document.getElementById("volume");

const playlist = document.getElementById("playlist");

let index = 0;
let playing = false;

loadSong(index);

function loadSong(i) {

    audio.src = songs[i].src;

    title.textContent = songs[i].title;
    artist.textContent = songs[i].artist;
    cover.src = songs[i].cover;

}

playBtn.onclick = () => {

    if (playing) {

        audio.pause();

        playBtn.innerHTML = '<i class="fas fa-play"></i>';

    } else {

        audio.play();

        playBtn.innerHTML = '<i class="fas fa-pause"></i>';

    }

    playing = !playing;

};

nextBtn.onclick = () => {

    index++;

    if (index >= songs.length)
        index = 0;

    loadSong(index);

    audio.play();

    playing = true;

    playBtn.innerHTML = '<i class="fas fa-pause"></i>';

};

prevBtn.onclick = () => {

    index--;

    if (index < 0)
        index = songs.length - 1;

    loadSong(index);

    audio.play();

    playing = true;

    playBtn.innerHTML = '<i class="fas fa-pause"></i>';

};

audio.addEventListener("timeupdate", () => {

    progress.value = (audio.currentTime / audio.duration) * 100;

    current.textContent = format(audio.currentTime);

    duration.textContent = format(audio.duration);

});

progress.oninput = () => {

    audio.currentTime = (progress.value / 100) * audio.duration;

};

volume.oninput = () => {

    audio.volume = volume.value;

};

audio.onended = () => {

    nextBtn.click();

};

function format(time) {

    let min = Math.floor(time / 60) || 0;

    let sec = Math.floor(time % 60) || 0;

    if (sec < 10) sec = "0" + sec;

    return min + ":" + sec;

}

songs.forEach((song, i) => {

    const li = document.createElement("li");

    li.textContent = `${song.title} - ${song.artist}`;

    li.onclick = () => {

        index = i;

        loadSong(i);

        audio.play();

        playing = true;

        playBtn.innerHTML = '<i class="fas fa-pause"></i>';

    };

    playlist.appendChild(li);

});