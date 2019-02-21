const slider = document.querySelector('.sliderContainer')
const sliderImages = document.querySelectorAll('.contentSlider img')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
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
        3000
    )
}

previous.addEventListener(
    'click',
    function(){
        pos--
        if (pos < 0){
            pos = sliderImages.length-1
        }
        sliderContainer.style.left = pos*step + 'px'
    }
)

next.addEventListener(
    'click',
    function(){
        pos++
        if (pos > sliderImages.length-1){
            pos = 0
        }
        sliderContainer.style.left = pos*step + 'px'
    }
)

