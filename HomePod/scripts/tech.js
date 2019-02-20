const techs = document.querySelectorAll('.technics_description_li')

for(let i=0; i<techs.length; i++){
    techs[i].addEventListener(
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