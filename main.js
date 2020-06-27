// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function hideErrorDiv() {
  const divHidden = document.getElementById('modal')
  divHidden.className = 'hidden'
}

hideErrorDiv()

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function(){ 

//Deliverable 1 using .catch
// * Add the `.hidden` class to the error modal in the HTML so it
//   does not appear when the page first loads

const docBody = document.querySelector('body')
  docBody.addEventListener('click', function(e){
    // * When a user clicks on an empty heart ("Recognizing events")
    // //   * Invoke `mimicServerCall` to simulate making a server request
      const spanClicked = e.target
      if (spanClicked.className === 'like-glyph' || spanClicked.className == 'activated-heart') {
      
      // `mimicServerCall` randomly fails to simulate faulty network conditions
        //     * When the server returns a failure status
        //       * Respond to the error using a `.catch(() => {})` block after your
        //         `.then(() => {})` block.
        mimicServerCall()
        .then(response => {
          if (spanClicked.className === 'like-glyph') {
            spanClicked.className = 'activated-heart'
            spanClicked.textContent = FULL_HEART
            // const textN = document.createTextNode("\u0007")
            // spanClicked.innerHTML = textN
            // console.log(textN)
            // 'x &#x0007;'
          }
          else if (spanClicked.className === 'activated-heart') {
            spanClicked.className = 'like-glyph'
            spanClicked.textContent = EMPTY_HEART
            // const textN = document.createTextNode("\u2661")
            // spanClicked.innerHTML = textN
            //'x &#x2661;'
          }  
        })
        .catch((error) => {
          // * Display the error modal by removing the `.hidden` class
//       * Display the server error message in the modal
//       * Use `setTimeout` to hide the modal after 5 seconds (add the `.hidden` class)
          const divHidden = document.getElementById('modal')
          divHidden.className = ""
          const pHidden = document.getElementById('modal-message')
          pHidden.textContent = error
          setTimeout(function() {
            hideErrorDiv()
          }, 5000)
        })

      }



  })

 


})
//Deliverable 2 should actually be 1
//     * When the server returns a success status
//       * Change the heart to a full heart
//       * Add the `.activated-heart` class to make the heart appear red
// * When a user clicks on a full heart
//   * Change the heart back to an empty heart
//   * Remove the `.activated-heart` class
// * Keep all your styling rules entirely in `style.css`. Do not manipulate any `.style` properties.

// Only manipulate the DOM once the server requests respond. Do not make the
// heart full until you're inside a successful `.then` block.

// > Note: The tests will only check for the first part of the specification (adding the `hidden` class). 
// You should verify the rest of the behavior yourself, by checking the page in the browser.


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
