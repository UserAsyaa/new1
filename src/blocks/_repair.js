let showMoreBtn = document.querySelector('.show-more__btn')   
let sliderMenu = document.querySelector('.slider-menu')       
let showMoreImg = document.querySelector('.show-more__img')   

showMoreBtn.addEventListener('click', function() {             
    if( showMoreBtn.innerHTML === 'Показать все') {            
        sliderMenu.style.maxHeight = 'max-content'             
        showMoreImg.style.transform = 'rotate(180deg)'         
        showMoreBtn.textContent = 'Скрыть'                     
    } else {
        sliderMenu.style.maxHeight = '140px'                    
        showMoreImg.style.transform = 'rotate(0deg)'            
        showMoreBtn.textContent = 'Показать все'                
    }
});