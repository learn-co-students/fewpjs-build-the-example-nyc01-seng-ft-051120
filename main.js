// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', e=>{
liker()
})
function liker(){
  document.addEventListener('click', e=>{
     if(e.target.className==='like-glyph'){
      e.target.innerHTML=	FULL_HEART
      e.target.style.color='red'
      e.target.className='liked-glyph'
    }else if(e.target.className==='liked-glyph'){
      e.target.innerHTML=EMPTY_HEART
      e.target.style.color='grey'
      e.target.className='like-glyph'
    }
  })
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
