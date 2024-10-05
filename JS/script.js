// Get references to the button and the message display area
const button = document.getElementById('messageButton');
const messageElement = document.getElementById('message');

// Add an event listener to the button for the 'click' event
button.addEventListener('click', function() {
    // Display a message inside the <p> element
    messageElement.textContent = 'Hello, you clicked the button!';

    // Hide the button after it is clicked
    button.style.display = 'none';
});