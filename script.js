document.addEventListener('DOMContentLoaded', () => {
  console.log('Bayu Pratama - Personal Website');
  
  // Add hover effects to social links
  const socialLinks = document.querySelectorAll('.social-links a');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.querySelector('i').style.transform = 'scale(1.2) rotate(5deg)';
      link.querySelector('i').style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', () => {
      link.querySelector('i').style.transform = 'scale(1) rotate(0deg)';
    });
  });
});

// Function to toggle mobile menu
const toggleMobileMenu = () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    // Toggle animation for burger menu lines
    const lines = burgerMenu.querySelectorAll('div');
    if (burgerMenu.classList.contains('active')) {
        lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    }
};

// Function for smooth scrolling
const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 70; // Adjust for navbar height
    const duration = 1000;
    let start = null;

    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));
        if (progress < duration) window.requestAnimationFrame(step);
    };

    // Easing function for smooth animation
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    window.requestAnimationFrame(step);

    // Close mobile menu after clicking a link
    if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
};

// Form submission handler with validation
const handleFormSubmit = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;

    // Basic validation
    if (nameInput.value.trim() === '') {
        isValid = false;
        showError(nameInput, 'Name is required');
    } else {
        removeError(nameInput);
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInput.value)) {
        isValid = false;
        showError(emailInput, 'Please enter a valid email');
    } else {
        removeError(emailInput);
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        showError(messageInput, 'Message is required');
    } else {
        removeError(messageInput);
    }

    // If form is valid, you would typically send data to server
    if (isValid) {
        // Here you would normally send the form data to a server
        // For demo purposes, we'll just reset the form and show a success message
        alert('Form submitted successfully!');
        contactForm.reset();
    }
};

// Helper function to validate email format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Helper function to show error messages
const showError = (input, message) => {
    const formGroup = input.parentElement;
    let errorElement = formGroup.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = 'var(--error-color)';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '5px';
        formGroup.appendChild(errorElement);
    }
    
    input.style.borderColor = 'var(--error-color)';
    errorElement.textContent = message;
};

// Helper function to remove error messages
const removeError = (input) => {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        formGroup.removeChild(errorElement);
    }
    
    input.style.borderColor = '#ddd';
};

// Event Listeners
window.addEventListener('scroll', handleNavbarOnScroll);
burgerMenu.addEventListener('click', toggleMobileMenu);
navLinksItems.forEach(link => link.addEventListener('click', smoothScroll));

// Add form submission listener if the form exists
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Any additional initialization can go here
    console.log('ANYTech website loaded successfully!');
}); 