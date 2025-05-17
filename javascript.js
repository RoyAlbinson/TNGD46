//--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~words changing on hemsida h1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--//
function wordAnimation() {
  const changingElement = document.getElementById('changing');
  if (changingElement) {
    const words = ["legender", "mardrömmar"];
    let index = 0;
  
    setInterval(() => {
        index = (index + 1) % words.length;
        changingElement.textContent = words[index];
    }, 2500);   
  }
}

//--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~gallery buttons next/back~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--//

function setupButtons(){
  // Initialize elements
  let scrollContainer = document.querySelector(".gallery");
  let backBtn = document.getElementById("backBtn");
  let nextBtn = document.getElementById("nextBtn");

  // Checks if the elements exist on the current page
  if(scrollContainer && nextBtn && backBtn){
    nextBtn.addEventListener("click", ()=> {
      console.log("Next button clicked");
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += scrollContainer.clientWidth;
    });
  
    backBtn.addEventListener("click", ()=> {
      console.log("Back button clicked");
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= scrollContainer.clientWidth;
      // clientWidth to calculate scroll distance for different screen sizes
      // Gallery couldn't scroll if using pixels for bigger screens
    });
  }
}

//--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~countdown~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--//
function countDown() {
  // Check if countdown elements exist
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  if (days && hours && minutes && seconds) {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    const countDownDate = new Date('June 21, 2025 11:00:00').getTime(),
    timer = setInterval(function() {
      const now = new Date().getTime(),
            distance = countDownDate - now;

      days.innerText = Math.floor(distance / day);
      hours.innerText = Math.floor((distance % day) / hour);
      minutes.innerText = Math.floor((distance % hour) / minute);
      seconds.innerText = Math.floor((distance % minute) / second);
    }, 1000); 
  }
}

function setupForm(){
  // Initialize element
  const form = document.getElementById("email_form");
  
  // Checks if the form element exist on the current page
  if(form){
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents page reload

      // Collect form data
      const userData = {
          email: document.getElementById("email").value
      };

      console.log(userData);                // Console msg
      alert("Tack för ditt köp!");  // Confirmation alert
      form.reset();                         // Clear the form fields
    });
  }
}
//--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~java maintenance~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--//

// DOMContentLoaded: Executes when HTML document has been completely loaded
// Need this to make sure that our JS code runs AFTER the elements (buttons, forms, etc)
// has loaded, otherwise error will occur cause they don't exist yet.
  document.addEventListener("DOMContentLoaded", function () {
    setupForm();
    setupButtons();
    countDown();
    wordAnimation();
  });