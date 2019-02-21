const li = document.querySelectorAll('.technics_description_li');
for(let i = 0; i<li.length;i++) {
    li[i].addEventListener(
        'click',
        function () {
            if(li[i].classList.contains('isOpen'))
                li[i].classList.remove('isOpen')
            else{
                if (document.querySelectorAll('.isOpen').length > 0){
                    document.querySelector('.isOpen').classList.remove('isOpen')
                }
                li[i].classList.add('isOpen')
            }
        }
    )
}
