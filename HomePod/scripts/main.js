const slider = document.querySelector('.sliderContainer')
const sliderImages = document.querySelectorAll('.contentSlider img')
const step = -960
let pos = 0
let action

function locationSlide() {
    pos = (pos + 1) % sliderImages.length
    setPosition(pos)
}

playSlider()

slider.addEventListener('mouseover', stopSlider)
slider.addEventListener('mouseout', playSlider)

function setPosition(pos) {
    slider.style.left = pos * step + 'px'
}

function stopSlider() {
    clearInterval(action)
}

function playSlider() {
    action = setInterval(
        function() {
            pos = (pos + 1) % sliderImages.length
            setPosition(pos)
        },
        5000
    )
}

