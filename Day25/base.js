
var carousel = document.querySelector(".carousel")
var carouselInner = document.querySelector(".carousel-inner")
var nextBtn = carousel.querySelector(".next")
var prevBtn = carousel.querySelector(".prev")
var carouselItems = carouselInner.querySelectorAll(".item")
var carouselSwitch = document.querySelector(".carousel-switch")


var currentIndex = 0;
var position = 0;

// Lay kich thuoc 1 item
var itemWidth = carouselInner.clientWidth;

// Lay tat ca item
var items = carouselInner.children;
var totalWidth = items.length * itemWidth;

// Cap nhat css cho carosel inner
carouselInner.style.width = `${totalWidth}px`

// Render so nut tuong ung vs anh
if (carouselItems.length > 0) {
    var s = ""
    carouselItems.forEach(function(item, itemIndex) {
        s += `
        <span class="${itemIndex === 0 ? "switch-active" : ""}" index="${itemIndex}"></span>
        `
    })
    carouselSwitch.innerHTML = s
// Xu ly chuyen anh khi bam vao nut switch 

    var carouselSwitchAll = carouselSwitch.querySelectorAll("span")
    carouselSwitchAll.forEach(function(but, index) {
        but.addEventListener('click', function(e) {
            carouselSwitchAll[currentIndex].classList.remove("switch-active")
            e.target.classList.add("switch-active")
            position += (currentIndex - index) * itemWidth
            carouselInner.style.translate = `${position}px`
            currentIndex = index
        })
    })
}

nextBtn.addEventListener('click', function() {
    if ((Math.abs(position) < totalWidth - itemWidth)) {
        position -= itemWidth
        carouselInner.style.translate = `${position}px`
        carouselSwitchAll[currentIndex].classList.remove("switch-active")
        ++currentIndex
        carouselSwitchAll[currentIndex].classList.add("switch-active")

    }
})

prevBtn.addEventListener('click', function() {
    if (Math.abs(position) > 0) {
        position += itemWidth
        carouselInner.style.translate = `${position}px` 
        carouselSwitchAll[currentIndex].classList.remove("switch-active")
        --currentIndex
        carouselSwitchAll[currentIndex].classList.add("switch-active")
    }
})

