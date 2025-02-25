const words = ["legends", "nightmares"];
let index = 0;

setInterval(() => {
    index = (index + 1) % words.length;
    document.getElementById('changing').textContent = words[index];
}, 2000); // Changes every 2 seconds

function setupButtons(){
    // Initialize elements
    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");
  
    // Checks if the elements exist on the current page
    if(scrollContainer && nextBtn && backBtn){
      
      // Lets user scroll gallery instead of using buttons
      scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault(); // Prevent default scrolling behavior
        console.log("Whoah we scrollin!");
        scrollContainer.scrollBy({
          left: evt.deltaY, // Use deltaY for horizontal scrolling
          behavior: "auto" // Disable smooth scrolling for wheel events
        });
      });
    
      nextBtn.addEventListener("click", ()=> {
        console.log("Next button clicked");
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
      });
    
      backBtn.addEventListener("click", ()=> {
        console.log("Next button clicked");
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
      });
    }
  }

  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    
    const countDown = new Date('june 25, 2025 11:00:00').getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
         
        }, 1000); // Update every second
    }());

// DOMContentLoaded: Executes when HTML document has been completely loaded
// Need this to make sure that our JS code runs AFTER the elements (buttons, forms, etc)
// has loaded, otherwise error will occur cause they don't exist yet.
  document.addEventListener("DOMContentLoaded", function () {
    setupButtons();
  });