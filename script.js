function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Add form submission functionality (optional)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    alert('Thank you for your message!');
    this.reset(); // Reset the form fields
});
