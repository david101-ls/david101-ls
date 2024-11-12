// Smooth Scroll to Sections
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Hover Effect on Articles
document.querySelectorAll('article').forEach(article => {
    article.addEventListener('mouseenter', () => {
        article.style.transform = 'scale(1.05)';
    });
    article.addEventListener('mouseleave', () => {
        article.style.transform = 'scale(1)';
    });
});

// Modal Functionality for Article Images
document.querySelectorAll('article img').forEach(img => {
    img.addEventListener('click', (e) => {
        showModal(e.target.src);
    });
});

// Function to Show Modal
function showModal(imageSrc) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img src="${imageSrc}" alt="Modal Image">
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}
// Form Validation and Submission
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Basic validation
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required.";
        formMessage.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    // If validation passes, display success message
    formMessage.textContent = "Thank you for your feedback! We’ll get back to you soon.";
    formMessage.style.color = "green";

    // Clear the form
    document.getElementById('feedbackForm').reset();
});

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
