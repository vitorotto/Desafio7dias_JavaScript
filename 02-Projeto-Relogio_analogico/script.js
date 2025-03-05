let digitalElement = document.querySelector('.digital')
let segElement = document.querySelector('.p_s')
let minElement = document.querySelector('.p_m')
let horElement = document.querySelector('.p_h')

function updateClock() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()

    digitalElement.innerHTML = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(seconds)}`

    let sDeg = ((360 / 60) * seconds) - 90
    let mDeg = ((360 / 60) * minute) - 90
    let hDeg = ((360 / 12) * hour) - 90
    
    segElement.style.transform = `rotate(${sDeg}deg)`
    minElement.style.transform = `rotate(${mDeg}deg)`
    horElement.style.transform = `rotate(${hDeg}deg)`
}

const formatTime = (time) => time < 10 ? `0`+time : time

setInterval(updateClock, 1000)
updateClock()