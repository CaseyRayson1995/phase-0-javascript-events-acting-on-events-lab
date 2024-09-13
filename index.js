// Your code here


const dodger = document.getElementById('dodger');

// Add an event listener to listen for the 'keydown' event
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});

// Define the function to move the DODGER to the left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // expects the 200 value below to be < 179.      if >179 the test fails
    if (left < 200) {
      dodger.style.left = `${left + 10}px`;
    }
  }

