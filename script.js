// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm(e) {
    e.preventDefault();
    // Retrieving the values of form elements 
    let email = document.emailForm.email.value;
    let emailField = document.querySelector('.emailField');
    let errorIcon = document.querySelector('.error-icon');
    let regex = /^\S+@\S+\.\S+$/;
    let emailErr = true;

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
        emailField.classList.add('email-error');
        errorIcon.classList.remove('no-show');
    } else if (regex.test(email) === false) {
        printError("emailErr", "Please enter a valid email address");
        emailField.classList.add('email-error');
        errorIcon.classList.remove('no-show');
    } else {
        printError("emailErr", "");
        emailErr = false;
        emailField.classList.remove('email-error');
        errorIcon.classList.add('no-show');
    }
}