// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", e =>{
  const modal =  document.querySelector("#modal")

  document.addEventListener("click",e=>{
    if (e.target.className === "like-glyph"){
      mimicServerCall()
      .then(resp => {
        console.log(e.target)
        toggleClass(e.target,"activated-heart")
      })
      .catch(err =>{
        displayErrorMessage(modal,err)
      })
    }
  })
  
})

function toggleClass(object,className){
  object.classList.toggle(className)
}

function displayErrorMessage(object,message){
  object.querySelector("p").textContent = message
  toggleClass(modal,"hidden")
  setTimeout(toggleClass(modal,"hidden"),5000)

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
