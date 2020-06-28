// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
let errorModal = document.querySelector(".hidden");

// Your JavaScript code goes here!
document.body.addEventListener("click", e => {
    if (!e.target.className.includes("activated-heart")) {      
      mimicServerCall()
      .then(changeHeart(e))
      .catch(err => revealErrorModal(err, e))
    } else {
      emptyHeart(e)
    }
});

function revealErrorModal(error, e) {
  errorModal.classList.remove("hidden")
  errorModal.innerText = error;
  setTimeout(() => errorModal.className = "hidden", 5000);
  emptyHeart(e);
}

function changeHeart(e) {
  if(e.target.className.includes("activated-heart")) {
    emptyHeart(e);
  }
  else if(e.target.className.includes("like-glyph")) {
    fullHeart(e);
  }
}
function emptyHeart(e) {
  e.target.innerText = EMPTY_HEART;
  e.target.classList.remove("activated-heart")
}
function fullHeart(e) {
  e.target.innerText = FULL_HEART;
  e.target.classList.add("activated-heart")
}

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
