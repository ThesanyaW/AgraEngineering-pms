// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the sign-up button
    document.getElementById('sign-up').addEventListener('click', function() {
        window.location.href = 'userType.html';  // Redirect to the userType.html page
    });
});
