document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the button
    const button = document.getElementById('menuButton');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // URL of the page containing the image
        const imagePageUrl = 'menu.html'; 
        window.open(imagePageUrl, '_blank'); // Open the image page in a new tab
    });
    document.querySelector('.cappcino').addEventListener('click', function(event) {
        event.preventDefault();  // Prevents the default form submission
        window.location.href = 'cappcino.html';  // Redirects to cappcino.html
    });
    
});