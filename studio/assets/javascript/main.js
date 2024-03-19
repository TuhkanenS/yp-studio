function darkmode() {
    const body = document.body

    const wasDarkmode = localStorage.getItem('darkmode') == "true"

    localStorage.setItem('darkmode', !wasDarkmode)
    body.classList.toggle('dark_mode', !wasDarkmode)
}

document.querySelector('.switch').addEventListener('click', darkmode)

function onload() {
    document.body.classList.toggle('dark_mode', localStorage.getItem('darkmode') == "true")
}

document.addEventListener('DOMContentLoaded', onload)