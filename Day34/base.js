container = document.querySelector(".container")
imgZoom = container.querySelector("img") 
zoomResult = container.querySelector(".img-zoom")

lens = document.createElement("div")
lens.classList.add("img-lens")
lens.style = `
    position: absolute;
    background-color: #fff;
    opacity: 0.3;
    width: 100px;
    height: 100px
`

container.append(lens)

function handleMoveLens(e) {
    let pos, x, y
    const perX = zoomResult.offsetWidth / lens.offsetWidth
    const perY = zoomResult.offsetHeight/ lens.offsetHeight

    e.preventDefault()

    zoomResult.classList.add('active')

    function getCursorPosition(e) {
        let x, y
        const imgLeft = imgZoom.getBoundingClientRect().left
        const imgTop = imgZoom.getBoundingClientRect().top
        x = e.clientX - imgLeft
        y = e.clientY - imgTop
        return {x: x, y: y}
    } 
    
    document.addEventListener('mousemove', getCursorPosition)

    pos = getCursorPosition(e)

    // tính vị trí của lens 
    x = pos.x - (lens.offsetWidth / 2)
    y = pos.y - (lens.offsetHeight / 2)

    // check xem vị trí chuột có trong khung ảnh ko
    if (x > (imgZoom.width - lens.offsetWidth + imgZoom.getBoundingClientRect().left)) {
        x = imgZoom.width - lens.offsetWidth + imgZoom.getBoundingClientRect().left
    } else if (x < 0) {
        x = 0
    }

    if (y > (imgZoom.height - lens.offsetHeight + imgZoom.getBoundingClientRect().top)) {
        y = imgZoom.height - lens.offsetHeight + imgZoom.getBoundingClientRect().top
    } else if (y < 0) {
        y = 0
    }
    
    // set vi tri cua lens khi di chuyen con chuot
    lens.style.left = x + "px"
    lens.style.top = y + "px"

    // set phan anh zoom tai zoomResult
    zoomResult.style.backgroundSize = (imgZoom.width * perX) + "px " + (imgZoom.height * perY) + "px";
    zoomResult.style.backgroundPosition = "-" + (x * perX) + "px -" + (y * perY) + "px";

    // ẩn zoom ảnh khi thoát khỏi img 
    if (e.clientX > imgZoom.width) {
        zoomResult.classList.remove('active')
    }

    if (e.clientY > imgZoom.height) {
        zoomResult.classList.remove('active')
    }
}

imgZoom.addEventListener('mousemove', handleMoveLens)
lens.addEventListener('mousemove', handleMoveLens)

imgZoom.addEventListener('touchmove', handleMoveLens)
lens.addEventListener('touchmove', handleMoveLens)
