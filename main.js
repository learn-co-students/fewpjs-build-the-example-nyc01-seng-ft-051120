document.addEventListener("DOMContentLoaded", function(){
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  
  // Your JavaScript code goes here!
  
  
  document.addEventListener('click',function(e){
    mimicServerCall("bogusUrl")
    .then(function(serverMessage){
    if (e.target.textContent === '♡'){
     e.target.style.color = 'red'
    e.target.textContent = FULL_HEART
    
    }
     else if (e.target.textContent === '♥'){
    e.target.textContent = EMPTY_HEART
    }
    })
    .catch(function(error) {
      document.getElementById("modal").className = ""
    })});
  
  //------------------------------------------------------------------------------
  // Ignore after this point. Used only for demo purposes
  //------------------------------------------------------------------------------
  
  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }
  })