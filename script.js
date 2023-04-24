console.log("Welcome to Spotify");

//variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songName'));

let songArray = [
    { songName: 'Salam-e-ishq', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg'},
    { songName: 'Warrior', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg'},
    { songName: 'Powada', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg'},
    { songName: 'Dil kya kare', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg'},
    { songName: 'Maroons', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg'},
    { songName: 'Just like that', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg'},
    { songName: 'Friends', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg'},
    { songName: 'Dont let me down', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg'},
    { songName: 'Girlfriend', filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg'},
]

console.log("elements", songItems);
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName; 
});

//play/pause-button behaviour
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//eventlisteners
audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})