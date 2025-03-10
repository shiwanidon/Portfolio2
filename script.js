// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll
        });
    });
});

// Back-to-top button
const backToTopButton = document.getElementById('btn-back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show button after scrolling 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });
});

// Contact form validation
const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate name
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        alert('Please enter a valid 10-digit phone number.');
        phoneInput.focus();
        return;
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        messageInput.focus();
        return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    contactForm.reset(); // Clear the form
});

// Initialize AOS Library
AOS.init({
    duration: 1000, // Animation duration
    offset: 50, // Offset (in px) from the original trigger point
    once: true, // Whether animation should happen only once
});