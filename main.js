// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("click", function(e){

  if (e.target.classList.contains("like-glyph")){  
  
    mimicServerCall("fakeUrl")
    .then(() => {

      if (e.target.classList.contains("activated-heart")){
        e.target.classList.remove("activated-heart")
        e.target.textContent = EMPTY_HEART
      } else {
        e.target.classList.add("activated-heart")
        e.target.textContent = FULL_HEART
      }

    })
    .catch(error => {
      const errorModal = document.getElementById("modal")
      errorModal.classList.remove("hidden")
      const errorMessage = document.getElementById("modal-message")
      errorMessage.textContent = error
      setTimeout(function() {errorModal.classList.add("hidden")}, 5000)
    })

  }

})



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
