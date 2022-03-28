const SIGN_IN = document.querySelector('.overlay-container .sign-in');
const SIGN_UP = document.querySelector('.overlay-container .sign-up');
const overlayContainer = document.querySelector('.overlay-container');
const formContainer = document.querySelector('.form-container');

SIGN_IN.addEventListener('click', signIn);
SIGN_UP.addEventListener('click', signUp);

function signIn(){
    if (window.getComputedStyle(document.querySelector('.container')).width == "300px"){
        overlayContainer.style.bottom = "0";
        formContainer.style.top = "-75%";
        overlayContainer.style.zIndex = "1";
        formContainer.style.zIndex = "2";
    }
    else{
        overlayContainer.style.left = "50%";
        formContainer.style.left = "-50%";
        overlayContainer.style.zIndex = "1";
        formContainer.style.zIndex = "2";
    }
};

function signUp(){
    if (window.getComputedStyle(document.querySelector('.container')).width == "300px"){
        overlayContainer.style.bottom = "-25%";
        formContainer.style.top = "0";
        overlayContainer.style.zIndex = "2";
        formContainer.style.zIndex = "1";
    }
    else{
        overlayContainer.style.left = "-50%";
        formContainer.style.left = "50%";
        overlayContainer.style.zIndex = "2";
        formContainer.style.zIndex = "1";
    }

}