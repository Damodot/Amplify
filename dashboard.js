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
        output.innerHTML = `<marquee behavior="scroll" direction="left" class="fw-bold fs-6 text-white">Hello ${databaseNew[last].name} Welcome to HitVerse!</marquee>`
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
console.log('hello');