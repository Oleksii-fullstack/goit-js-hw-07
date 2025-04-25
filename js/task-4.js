
const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', handleFormSubmit);

// function handleFormSubmit(event) {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const emailValue = form.elements.email.value.trim();
//     const passwordValue = form.elements.password.value.trim();
//     if (emailValue.length === 0 || passwordValue.length === 0) {
//         alert("All form fields must be filled in");
//         return
//     }  
//     const resultObj = { email: emailValue, password: passwordValue };
//     console.log(resultObj);
//     form.reset();
// }

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    if (userData.email.length === 0 || userData.password.length === 0) {
        alert("All form fields must be filled in");
        return
    }  
    console.log(userData);
    form.reset();
}

