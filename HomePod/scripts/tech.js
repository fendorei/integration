const li = document.querySelectorAll('.technics_description_li')

for(let i=0; i<li.length; i++){
    li[i].addEventListener(
        'click',
        function(){
            if (this.classList.contains('isOpen')){
                this.classList.remove('isOpen')
            }
            else {
                let temp = document.querySelector('.isOpen')
                if (temp != null){
                    temp.classList.remove('isOpen')
                }
            }
            this.classList.add('isOpen')
        }
    )
}
