document.addEventListener("DOMContentLoaded", function () {
    // The word that will be typed
    const word = "Python Developer";
    let charIndex = 0;
    let currentWord = '';
    const typingSpeed = 100;
  
    // Function to type the word
    function type() {
        if (charIndex < word.length) {
            currentWord += word.charAt(charIndex); // Add the next character
            document.querySelector('.typing-animation').textContent = currentWord; // Display the typed word
            charIndex++;
            setTimeout(type, typingSpeed); // Call the function again to type the next character
        }
    }
  
    // Start typing when the page is loaded
    type();
  });
  
  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-done');
  
  progressBars.forEach(bar => {
      setTimeout(() => {
          bar.style.width = bar.getAttribute('data-done') + '%';
          bar.style.opacity = 1;
      }, 500);
  });
  
  // Animate circular skills
  const circles = document.querySelectorAll('.circle');
  
  circles.forEach(circle => {
      let percent = circle.getAttribute('data-percent');
      circle.style.setProperty('--percent', percent);
  });
  