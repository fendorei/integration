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

const sliderImages = document.querySelectorAll('.sliderContainer img')
const sliderContainer = document.querySelector('.sliderContainer')
let step = -960,
    time = 3000,
    pos = 0

let slide = setInterval(
    function(){
        pos = (pos+1)%sliderImages.length
        sliderContainer.style.left = pos*step+'px'
    },
    time
)

sliderContainer.addEventListener('mouseover', function (){
    clearInterval(slide)
})
sliderContainer.addEventListener('mouseout', function(){
    setInterval()
})

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