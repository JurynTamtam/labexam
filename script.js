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

// for search bar

function searchBooks() {
    // Get the search term
    let input = document.getElementById('bookSearch').value.toLowerCase();
    let bookList = document.getElementById('bookList');
    let books = bookList.getElementsByClassName('book-item');

    // Loop through all book items and hide those that don't match the search term
    for (let i = 0; i < books.length; i++) {
        let title = books[i].getElementsByTagName("h3")[0];
        let author = books[i].getElementsByTagName("p")[0];
        let titleText = title.innerText.toLowerCase();
        let authorText = author.innerText.toLowerCase();

        if (titleText.includes(input) || authorText.includes(input)) {
            books[i].style.display = "";
        } else {
            books[i].style.display = "none";
        }
    }
}
