const signIn = document.querySelector('.overlay-container .sign-in');
const signUp = document.querySelector('.overlay-container .sign-up');
const overlayContainer = document.querySelector('.overlay-container');
const formContainer = document.querySelector('.form-container');
signIn.addEventListener('click', function (){
    overlayContainer.style.left = "50%";
    formContainer.style.left = "-50%";
});
window.addEventListener('DOMContentLoaded', function(){
    formContainer.style.left = "-50%";
    overlayContainer.style.right = "-50%"
})
signUp.addEventListener('click', function (){
    overlayContainer.style.left = "-50%";
    formContainer.style.left = "50%";
});