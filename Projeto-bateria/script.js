document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
})

document.querySelector('#btnTocar').addEventListener('click', () => {
    let song = document.querySelector('#inputCompose').value
    if (song !== '') {
        playComposition(song)
    }
})

function playComposition(song) {
    const arrSong = song.split('')

    let wait = 0
    for (let songItem of arrSong) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)
        wait += 250
    }
}

function playSound(keySound) {
    const soundElement = document.querySelector(`#s_${keySound}`)
    const keyElement = document.querySelector(`#${keySound}`)

    if (soundElement) {
        soundElement.currentTime = 0
        soundElement.play()
    }

    if (keyElement) {
        keyElement.classList.add('active')
        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 150)
    }
}

// Adaptação Para Mobile
document.querySelector('#keyq').addEventListener('click', () => { playSound('keyq') })
document.querySelector('#keyw').addEventListener('click', () => { playSound('keyw') })
document.querySelector('#keye').addEventListener('click', () => { playSound('keye') })
document.querySelector('#keya').addEventListener('click', () => { playSound('keya') })
document.querySelector('#keys').addEventListener('click', () => { playSound('keys') })
document.querySelector('#keyd').addEventListener('click', () => { playSound('keyd') })
document.querySelector('#keyz').addEventListener('click', () => { playSound('keyz') })
document.querySelector('#keyx').addEventListener('click', () => { playSound('keyx') })
document.querySelector('#keyc').addEventListener('click', () => { playSound('keyc') })