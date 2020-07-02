// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(e){
  // hideError()
  clickHandler()
  const url = 'https://dog.ceo/api/breeds/image/random'
})
const errorModal = document.querySelector("div#modal")

// const hideError = () => {
//   errorModal.className = "hidden"
// }

const clickHandler = () => {
  document.addEventListener("click", function(e){
    const clicked = e.target
    if(checkForHeart(clicked)){
      heartClickHandler(e.target)        
    }
  })
}

const checkForHeart = clicked => {
  const clickedClass = clicked.className
  return (clickedClass === "like-glyph" || clickedClass === "activated-heart")
}
const heartClickHandler = (heart) => {
  if (heart.textContent === EMPTY_HEART){
    likeHandler(heart)
  } else if (heart.textContent === FULL_HEART){
    unlike(heart)
  }
}

likeHandler = (heart) => {
  mimicServerCall("bogusUrl")
    .then(promise => {
      heart.className = "activated-heart"
      heart.textContent = FULL_HEART
    })
    .catch(error => {
      errorHandler(error)
    })
}

const unlike = heart => {
  mimicServerCall("bogusUrl")
    .then(promise => {
      heart.textContent = EMPTY_HEART
      heart.className = "like-glyph"
    })
    .catch(error => {
      errorHandler(error)
    })
}

const errorHandler = (error) => {
  const p = errorModal.lastChild
  p.textContent = error
  errorModal.className = ""
  window.setTimeout(() => {
    errorModal.className = "hidden"
  }, 5 * 1000)
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
