let databaseNew = JSON.parse(localStorage.getItem('regUser')) || []
let myDisplay = document.querySelector('.firstCont')
let songListed = document.querySelector('.songList')
let soundList = document.querySelector('.soundCheckList')
let popList = document.querySelector('.popList')
let player = document.querySelector('aside')
let section = document.querySelector('section')
let allMusic = document.querySelectorAll('.dad')
let allMusicTwo = document.querySelectorAll('.dadUnos')
let allMusicThree = document.querySelectorAll('.singer')
let myFirstView = document.querySelector('.loader')
let output = document.querySelector('.reply')
let playButton = document.querySelector(".playBTN")
let koMaGbonButton = document.querySelector(".koMaGbon")
let osheyButton = document.querySelector(".osheyButton")
let audioPlayer = document.getElementById('audioPlayer')
let waiter = document.querySelector('.waiter')
let currentTime = document.querySelector('.current-time')
let totalTime = document.querySelector('.total-time')
let pushName = document.querySelector('.infoTitle')


if (!databaseNew) {
    alert('Please Create an Account')
    window.location.href = `index.html`
} else {
    console.log(databaseNew);
    let last = databaseNew.length - 1
    let lastUser = databaseNew[last]
    console.log(last);

    if (!lastUser || !lastUser.name) {
        alert('Please Create an Account')
        window.location.href = `index.html`
    } else {
        output.innerHTML = `<marquee class="fw-bold fs-6 text-white text-center">Hello ${databaseNew[last].name} Welcome to HitVerse!</marquee>`
        setTimeout(() => {
            output.innerHTML = '';
        }, 8000);
    }
}

allMusic.forEach((element) => {
    element.addEventListener('click', () => {
        player.style.display = 'block'
    })
})
allMusicTwo.forEach((element) => {
    element.addEventListener('click', () => {
        player.style.display = 'block'
    })
})
allMusicThree.forEach((element) => {
    element.addEventListener('click', () => {
        player.style.display = 'block'
    })
})


myFirstView.style.display = 'flex'

setTimeout(() => {
    myFirstView.style.display = 'none'
}, 3000);

function songList() {
    if (myDisplay.style.display === '' || myDisplay.style.display === `block`) {
        myDisplay.style.display = `none`
        songListed.style.display = `block`
    } else {
        myDisplay.style.display = `block`
    }
}
function showSongList() {
    if (songListed.style.display === `block`) {
        songListed.style.display = `none`
        myDisplay.style.display = `block`
    } else {
        songListed.style.display = `block`
    }
}
function dispSoundCheck() {
    if (soundList.style.display === `block`) {
        soundList.style.display = `none`
    } else {
        soundList.style.display = `block`
    }
}
function dispPop() {
    if (popList.style.display === `block`) {
        popList.style.display = `none`
    } else {
        popList.style.display = `block`
    }
}
function remPlayer() {
    if (player.style.display === '' || player.style.display === `block`) {
        player.style.display = `none`
        section.style.display = `block`
    } else {
        player.style.display = `block`
    }
}
playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play()
        playButton.innerHTML = `<i class="fa-solid fa-pause text-white"></i>`
        console.log("Resumed");
    } else {
        audioPlayer.pause()
        playButton.innerHTML = `<i class="fa-solid fa-play text-white"></i>`
        console.log("Paused");
    }
})
koMaGbonButton.addEventListener("click", () => {
    audioPlayer.src = "koMaGbon.mp3"    
    audioPlayer.play()
    pushName.textContent = `Ko Ma Gbon` 
    playButton.innerHTML = `<i class="fa-solid fa-pause text-white"></i>`
    console.log("Playing");
})

osheyButton.addEventListener("click", () => {
    audioPlayer.src = "Oshey.mp3"    
    audioPlayer.play()
    pushName.textContent = `Oshey` 
    playButton.innerHTML = `<i class="fa-solid fa-pause text-white"></i>`
    console.log("Playing");
})


audioPlayer.addEventListener('timeupdate', () => {
    let current = audioPlayer.currentTime
    let duration = audioPlayer.duration
    waiter.value = (current / duration) * 100
    currentTime.textContent = formatTime(current)
})

waiter.addEventListener('input', () => {
    let duration = audioPlayer.duration
    audioPlayer.currentTime = (waiter.value / 100) * duration
})

audioPlayer.addEventListener('loadedmetadata', () => {
    totalTime.textContent = formatTime(audioPlayer.duration)
})

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60)
    let secs = Math.floor(seconds % 60)
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
}

function likeSong() {
    let likeButton = document.getElementById('likeButton')
    likeButton.classList.toggle('text-danger')
}

window.addEventListener('DOMContentLoaded' , likeSong)
console.log('hello');