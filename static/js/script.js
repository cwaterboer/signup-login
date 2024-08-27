// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the form elements
    const signupForm = document.querySelector('form[action="/signup"]');
    const loginForm = document.querySelector('form[action="/login"]');

    // Function to check if passwords match
    function validatePasswords() {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        if (password && confirmPassword) {
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity('Passwords do not match');
            } else {
                confirmPassword.setCustomValidity('');
            }
        }
    }

    // Add event listener for password fields in signup form
    if (signupForm) {
        document.getElementById('password').addEventListener('input', validatePasswords);
        document.getElementById('confirm-password').addEventListener('input', validatePasswords);
    }

    // Optional: Handle form submission to add custom behavior
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            // Example: Show a loading spinner or disable the submit button
            console.log('Login form submitted');
        });
    }
});

// Example: Change content dynamically (could be used on the profile page)
document.addEventListener('DOMContentLoaded', function () {
    const profileContent = document.getElementById('profile-content');
    
    // Assuming profileContent is an element where you might want to update content dynamically
    if (profileContent) {
        profileContent.innerHTML = '<p>Dynamic content loaded!</p>';
    }
});

// Example: Simple tooltips
document.addEventListener('DOMContentLoaded', function () {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener('mouseenter', function () {
            const tooltipText = tooltip.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;
            document.body.appendChild(tooltipElement);

            const rect = tooltip.getBoundingClientRect();
            tooltipElement.style.left = `${rect.left + window.scrollX}px`;
            tooltipElement.style.top = `${rect.bottom + window.scrollY}px`;
        });

        tooltip.addEventListener('mouseleave', function () {
            const tooltips = document.querySelectorAll('.tooltip');
            tooltips.forEach(function (tooltip) {
                tooltip.remove();
            });
        });
    });
});
