const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hours = dateToday.getHours()
    let minutes = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    if (hours < 10) hours = '0 + hours'

    if (minutes < 10) minutes = '0 + minutes'

    if (sec < 10) sec = '0 + sec'

    horas.textContent = hours
    minutos.textContent = minutes
    segundos.textContent = sec
})