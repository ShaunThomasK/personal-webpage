const form = document.getElementById('contactform');
const confirmation = document.getElementById('confirmation');

const showError = (id, message) => {
    const errorEl = document.getElementById(id);
    errorEl.textContent = message;
    errorEl.hidden = false;
}

const clearErrors = () => {
    document.querySelectorAll('.error').forEach(el => {
        el.textContent = '';
        el.hidden = true;
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (name === '') {
        alert('Please enter your name!');
        valid = false;
    } 
    else if (email === '') {
        alert('Please enter your email!');
        valid = false;
    } 
    else if (!emailRegex.test(email)) {
        alert('Please enter a valid email!');
        valid = false;
    } 
    else if (message === '') {
        alert('Please enter a message!');
        valid = false;
    }
    else if (phone !== '' && !phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number!');
        valid = false;
    }
    if (valid) {
        form.hidden = true;
        confirmation.hidden = false;
    }
});