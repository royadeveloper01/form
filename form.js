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

    usernameInput == "" ? setErrorFor(username):setSuccessFor(username)
    nameInput == "" ? setErrorFor(name):setSuccessFor(name)
    emailInput == "" ? setErrorFor(email):setSuccessFor(email)
    passwordInput == "" ? setErrorFor(password):setSuccessFor(password)
    password2Input == "" ? setErrorFor(password2):setSuccessFor(password2)


}

let setErrorFor = (input) => {

    const formControls = input.parentElement;
    formControls.className = 'form-control error';

    // let Small = input.querySelector('small');

    // //  show error message
    // Small.innerText = message;

   // add error class
    
}

let setSuccessFor = (input) => {

    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
