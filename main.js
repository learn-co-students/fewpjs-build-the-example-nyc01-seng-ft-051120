// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = Array.from(document.querySelectorAll(".like-glyph"))
const modal = document.getElementById("modal")

heartClick ()

function heartClick() {
  hearts.forEach(heart => listen(heart))
  function listen(heart) {
    heart.addEventListener('click', e => {
      mimicServerCall(url="http://mimicServer.example.com", config={})
      .then(response => response)
      .then(json => console.log(json))
      .then(toggle())
      .catch((error) => {
        modal.classList.remove("hidden")
        modal.lastElementChild.innerText = error
        setTimeout(function(){modal.classList.add("hidden")}, 5000)
      });
      function toggle() {
        if (heart.classList.contains('activated-heart')) {
          heart.classList.remove("activated-heart")
        } else {
          heart.classList.add("activated-heart")
        }
      }
    })
  }
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




 