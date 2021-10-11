//console.log('ABC Optical');

/* OVERALL */
// Subscribe Submit Feature
function onSubmit(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    console.log(email);
}

// Hamburger Features
function showBurgerMenu() {
    document.getElementById('main-menu').style.display = 'block'
    document.getElementById('main-menu').setAttribute('hidden', 'visible');
}

function hideBurgerMenu() {
    document.getElementById('main-menu').style.display = 'none'
    document.getElementById('main-menu').removeAttribute('hidden');
}

/* CONTACT */
// Submit function to handle the form submission
function contactOnSubmit(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('form-email').value;
    let message = document.getElementById('contact-message').value;
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);
}