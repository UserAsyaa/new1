const openCallButton = document.querySelector(".left-aside__button--call");   
const callModal = document.querySelector(".call-modal");                     
const closeCallButton = document.querySelector(".call-modal__button-close");   
const mainContent = document.querySelector('.block--big');  
                             

openCallButton.addEventListener("click", function(evt){                    
    evt.preventDefault();
    callModal.classList.toggle("call-modal--open"); 
    mainContent.classList.add("call-blur");
                        
});


 closeCallButton.addEventListener("click", function(){
    callModal.classList.remove("call-modal--open");
    mainContent.classList.remove("call-blur");
    
 })             
