var link = JSON.stringify("https://www.youtube.com/watch?v=dQw4w9WgXcQ")

var container = document.querySelector(".container")
var countDown = container.querySelector(" .count-down")
var btnWrap = document.querySelector(".container .btn-wrap")
var btnGetLink = btnWrap.querySelector(".get-link")

var counter = 5
var timer = 0;
const interval = 1000;

function deQuy(currentTime) {
    if (timer <= currentTime) {
        countDown.innerText = `${counter}`
        --counter
        timer = currentTime + interval 
    }
    if (counter >= 0) {
        requestAnimationFrame(deQuy)
    } 
    if (counter === 0) {
        btnGetLink.classList.add("active")
        btnGetLink.addEventListener('click', function() {
            window.location.href= JSON.parse(link)
        })
    }
}

deQuy(0)





