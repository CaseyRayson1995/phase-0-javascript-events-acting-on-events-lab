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

        dodger.style.left = `${left - 10}px`;
        //the line of code above determines how fast it moves across the screen to the left 
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // expects the 351 value below to be < 179.      if >179 the test fails
    //any values larger than the 351 number forces it to fall off the edge 
    if (left < 351) {

      dodger.style.left = `${left + 10}px`;
      //the line of code above determines how fast it moves across the screen to the right 
    }
  }

