// Function to show the lightbox
function showLightbox(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const lightboxId = event.target.closest('a').getAttribute('href');
    const lightbox = document.querySelector(lightboxId);
    if (lightbox) {
        lightbox.style.display = 'flex';
    }
}

// Function to hide the lightbox
function hideLightbox(event) {
    if (event.target.classList.contains('lightbox-close')) {
        event.preventDefault();
        const lightbox = event.target.closest('.lightbox');
        if (lightbox) {
            lightbox.style.display = 'none';
        }
    }
}

// Add event listeners to image links
document.querySelectorAll('.image-container a').forEach(anchor => {
    anchor.addEventListener('click', showLightbox);
});

// Add event listener to the document for clicks outside the lightbox
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('lightbox')) {
        event.target.style.display = 'none';
    }
});

// Add event listeners to lightbox close buttons
document.querySelectorAll('.lightbox-close').forEach(button => {
    button.addEventListener('click', hideLightbox);
});

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const backButton = document.querySelector('.back-button');

    // Function to handle scroll events
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll < lastScrollTop) {
            // Scrolling up
            backButton.classList.add('visible');
        } else {
            // Scrolling down
            backButton.classList.remove('visible');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});


