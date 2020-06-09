const form = document.getElementById('form');
const username = document.getElementById('username');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


const checkInputs = () => {
    // get the values from the inputs
    const usernameInput = username.value;
    const nameInput = name.value.trim();
    const emailInput = email.value.trim();
    const passwordInput = password.value.trim();
    const password2Input = password2.value.trim();

    // Username Validation
    usernameInput == "" ? setErrorFor(username, "Username cannot be blank") : setSuccessFor(username);
    // Full Name Validation
    nameInput == "" ? setErrorFor(name, "Name cannot be blank") : setSuccessFor(name);
    // Email Validation
    emailInput == ""
        ? setErrorFor(email, 'Email cannot be blank')
        : !isEmailValid(emailInput) ? setErrorFor(email, "Email is not valid") 
            : setSuccessFor(email)
    // Password Validation 
    
    // passwordInput == "" ? setErrorFor(password):setSuccessFor(password)
    // password2Input == "" ? setErrorFor(password2):setSuccessFor(password2)


}

let setErrorFor = (input, message) => {

    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');

    // show error message
    small.innerText = message;
    
}

let setSuccessFor = (input) => {

    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}