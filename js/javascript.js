
const passwordSet = document.getElementById('userPassword');
const passwordConfirm = document.getElementById('confirmPassword');

passwordConfirm.addEventListener('input', e => checkPasswordMatch(e));
passwordSet.addEventListener('input', e => checkPasswordMatch(e));

function checkPasswordMatch(e){
    console.log(passwordConfirm.value + " " + passwordSet.value);
    if (passwordSet.value.length <= 0) passwordSet.setCustomValidity("Invalid Field");
    else if (passwordConfirm.value !== passwordSet.value) passwordSet.setCustomValidity("Invalid Field");
    else passwordSet.setCustomValidity("");
}