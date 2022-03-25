const SIGN_IN = document.querySelector('.overlay-container .sign-in');
const SIGN_UP = document.querySelector('.overlay-container .sign-up');
const overlayContainer = document.querySelector('.overlay-container');
const formContainer = document.querySelector('.form-container');

if (window.getComputedStyle(document.querySelector('.container')).width == "300px"){
    SIGN_IN.addEventListener('click', function (){
        overlayContainer.style.bottom = "0";
        formContainer.style.top = "-75%";
        overlayContainer.style.zIndex = "1";
        formContainer.style.zIndex = "2";
    });
    SIGN_UP.addEventListener('click', function (){
        overlayContainer.style.bottom = "-25%";
        formContainer.style.top = "0";
        overlayContainer.style.zIndex = "2";
        formContainer.style.zIndex = "1";
    });
}

// window.addEventListener('DOMContentLoaded', function(){
//     formContainer.style.left = "-50%";
//     overlayContainer.style.right = "-50%"
// });