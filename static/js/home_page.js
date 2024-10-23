// Selecting all book covers and the elements to update the book details
const bookCovers = document.querySelectorAll('.book');
const bookTitle = document.getElementById('book-title');
const bookSummary = document.getElementById('book-summary');
const selectedBookCover = document.getElementById('selected-book-cover');

// Updating book details when hovering over a book cover
bookCovers.forEach(book => {
    book.addEventListener('mouseover', () => {
        const title = book.getAttribute('data-title');
        const summary = book.getAttribute('data-summary');
        bookTitle.innerText = title;
        bookSummary.innerText = summary;
        selectedBookCover.src = book.src;
    });
});

// Scroll functionality for the book slider
const slider = document.querySelector('.book-list');
const bookListWidth = slider.scrollWidth;  // Total width of all books
const visibleWidth = slider.clientWidth;    // Width of the visible area in the book slider

let scrollAmount = 0;  // Variable to track the current scroll position

// Left scroll button functionality
document.querySelector('.slider-btn.left').addEventListener('click', () => {
    scrollAmount -= visibleWidth / 2;  // Scroll half of the visible width
    if (scrollAmount < 0) scrollAmount = 0;  // Prevent scrolling past the start
    slider.style.transform = `translateX(-${scrollAmount}px)`;  // Apply the scroll effect
});

// Right scroll button functionality
document.querySelector('.slider-btn.right').addEventListener('click', () => {
    scrollAmount += visibleWidth / 2;  // Scroll half of the visible width
    if (scrollAmount > bookListWidth - visibleWidth) scrollAmount = bookListWidth - visibleWidth;  // Prevent scrolling past the end
    slider.style.transform = `translateX(-${scrollAmount}px)`;  // Apply the scroll effect
});
