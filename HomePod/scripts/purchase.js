const color = document.querySelectorAll('.choose_color')

for (let i=0; i<color.length; i++){
    color[i].addEventListener(
        'click',
        function(){
            if (this.classList.contains('isSelect')){
                this.classList.remove('isSelect')
            }
            else {
                let temp = document.querySelector('.isSelect')
                if (temp != null){
                    temp.classList.remove('isSelect')
                }
            }
            this.classList.add('isSelect')
        }
    )
}

const slider = document.querySelector('.sliderContainer')
const sliderImages = document.querySelectorAll('.sliderContainer  img')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
const sliderContainer = document.querySelector('.contentSlider')
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
        setPosition(pos)
    }
)

next.addEventListener(
    'click',
    function(){
        pos++
        if (pos > sliderImages.length-1){
            pos = 0
        }
        setPosition(pos)
    }
)

const previousHomeKit = document.querySelector('.previousHomeKit')
const nextHomeKit = document.querySelector('.nextHomeKit')
const sliderImagesHomeKit = document.querySelectorAll('.sliderContainer_homekit img')
const sliderContainerHomeKit = document.querySelector('.sliderContainer_homekit')
let step2 = -300,
    time2 = 3000,
    pos2 = 0

let slide2 = setInterval(
    function(){
        pos2 = (pos2+1)%sliderImagesHomeKit.length
        sliderContainerHomeKit.style.left = pos2*step2+'px'
    },
    time2
)

sliderContainerHomeKit.addEventListener('mouseover', function (){
    clearInterval(slide2)
})
sliderContainerHomeKit.addEventListener('mouseout', function(){
    setInterval()
})

previousHomeKit.addEventListener(
    'click',
    function(){
        pos2--
        if (pos2 < 0){
            pos2 = sliderImagesHomeKit.length-1
        }
        sliderContainerHomeKit.style.left = pos2*step2 + 'px'
    }
)

nextHomeKit.addEventListener(
    'click',
    function(){
        pos2++
        if (pos2 > sliderImagesHomeKit.length-1){
            pos2 = 0
        }
        sliderContainerHomeKit.style.left = pos2*step2 + 'px'
    }
)