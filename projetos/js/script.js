const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const millisecondsEl = document.querySelector('#milliseconds')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector('#resetBtn')

let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false

startBtn.addEventListener('click', starTimer)
pauseBtn.addEventListener('click', pauseTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)

function starTimer() {

    /* executa repetidamente uma função ou um bloco em um intervalo de tempo fixo */
    interval = setInterval(() => {

        if(!isPaused) {
            milliseconds += 10

            if(milliseconds === 1000) {
                seconds ++
                milliseconds = 0
            }

            if (seconds === 60) {
                minutes++
                seconds = 0
            }

            minutesEl.textContent = formaTime(minutes)
            secondsEl.textContent = formaTime(seconds)
            millisecondsEl.textContent = formatMillisecons(milliseconds)
        }

    }, 10)

    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
}

function resumeTimer() {
    isPaused = false
    pauseBtn.style.display = 'block'
    resumeBtn.style.display = 'none'
}

function resetTimer() {
    clearInterval(interval) /* Limpa o intervalo */
    minutes = 0
    seconds = 0
    milliseconds = 0

    minutesEl.textContent = '00'
    secondsEl.textContent = '00'
    millisecondsEl.textContent = '000'

    startBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'none'

}

function formaTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMillisecons(time) {
    return time < 100 ? `${time}`.padStart(3, '0') : time
    /* o padStart adiciona caractéres ou números até que  atinja o comprimento desejado */
    /* `${time}` adicionando isso no código, retorna o valor como string de maneira rápida */
}