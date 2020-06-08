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
    const nameInput = name.value;
    const emailInput = email.value;
    const passwordInput = password.value;
    const password2Input = password2.value;

    usernameInput === '' ? setSuccessFor(username) : setErrorFor(username, `Username can't be blank`);
}

const setErrorFor = (input, message) => {

    const formControl = input.parentElement; 
    const small = input.querySelector(small);

    //  show error message
    small.innerText = message;

   // add error class
    formControl.className = 'form-control error';
}

const setSuccessFor = (input) => {

    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}