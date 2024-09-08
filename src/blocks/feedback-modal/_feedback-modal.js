const openFeedbackButton = document.querySelector(".left-aside__button--chat");  
 const feedbackModal = document.querySelector(".feedback-modal");                     
 const closeFeedbackButton = document.querySelector(".feedback-modal__button-close");   
              
 
 
 openFeedbackButton.addEventListener("click", function(evt){                    
     evt.preventDefault();
     feedbackModal.classList.toggle("feedback-modal--open");  
     mainContent.classList.toggle("call-blur");                       
 });
 
 
  closeFeedbackButton.addEventListener("click", function(){
     feedbackModal.classList.remove("feedback-modal--open");
     mainContent.classList.remove("call-blur");  
  })      