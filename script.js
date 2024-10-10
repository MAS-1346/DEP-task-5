// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const dateError = document.getElementById('dateError');
    
    // Validation Rules
    const namePattern = /^[a-zA-Z\s]{3,}$/;
    const phonePattern = /^[0-9]{10}$/;
    
    // Event Listeners for Real-Time Validation
    nameInput.addEventListener('input', () => validateField(nameInput, namePattern, nameError, 'Please enter at least 3 characters.'));
    emailInput.addEventListener('input', () => validateEmail());
    phoneInput.addEventListener('input', () => validateField(phoneInput, phonePattern, phoneError, 'Please enter a valid 10-digit phone number.'));
    dateInput.addEventListener('input', () => validateDate());

    // Validate Form on Submit
    form.addEventListener('submit', (event) => {
        if (!validateAll()) {
            event.preventDefault();
        }
    });

    function validateField(input, pattern, errorElement, errorMessage) {
        if (input.value === '') {
            errorElement.textContent = 'This field is required.';
            errorElement.style.visibility = 'visible';
            return false;
        } else if (!pattern.test(input.value)) {
            errorElement.textContent = errorMessage;
            errorElement.style.visibility = 'visible';
            return false;
        } else {
            errorElement.style.visibility = 'hidden';
            return true;
        }
    }

    function validateEmail() {
        if (emailInput.validity.typeMismatch) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.visibility = 'visible';
            return false;
        } else {
            emailError.style.visibility = 'hidden';
            return true;
        }
    }

    function validateDate() {
        if (dateInput.value === '') {
            dateError.textContent = 'Please select a date.';
            dateError.style.visibility = 'visible';
            return false;
        } else {
            dateError.style.visibility = 'hidden';
            return true;
        }
    }

    function validateAll() {
        const nameValid = validateField(nameInput, namePattern, nameError, 'Please enter at least 3 characters.');
        const emailValid = validateEmail();
        const phoneValid = validateField(phoneInput, phonePattern, phoneError, 'Please enter a valid 10-digit phone number.');
        const dateValid = validateDate();

        return nameValid && emailValid && phoneValid && dateValid;
    }
});