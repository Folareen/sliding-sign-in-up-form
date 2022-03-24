const SIGN_IN = document.querySelector('.overlay-container .sign-in');
const SIGN_UP = document.querySelector('.overlay-container .sign-up');
const overlayContainer = document.querySelector('.overlay-container');
const formContainer = document.querySelector('.form-container');
SIGN_IN.addEventListener('click', function (){
    overlayContainer.style.bottom = "0";
    formContainer.style.top = "-80%";
    overlayContainer.style.zIndex = "1";
    formContainer.style.zIndex = "2";
});
// window.addEventListener('DOMContentLoaded', function(){
//     formContainer.style.left = "-50%";
//     overlayContainer.style.right = "-50%"
// });
SIGN_UP.addEventListener('click', function (){
    overlayContainer.style.bottom = "-20%";
    formContainer.style.top = "0";
    overlayContainer.style.zIndex = "2";
    formContainer.style.zIndex = "1";
});

// if (document.querySelector('.container').style.width == 500){
//     alert("yayyy")
// }

// console.log(document.querySelector('.container').style.width)