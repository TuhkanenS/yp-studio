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

function versions() {
    let p = document.querySelectorAll(".map_versions_block");
    for(let i = 0; i < p.length; i++) {
        p[i].innerHTML = p[i].innerHTML.split(" ").map(w => "<h5 class=\"map_versions\">" + w + "</h5>").join(" ");
    }
}

document.addEventListener('DOMContentLoaded', onload)

document.addEventListener('DOMContentLoaded', versions)