
const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
// const textInput = document.getElementById('name-input');


textInput.addEventListener('input', (event) => {
    const name = event.currentTarget.value.trim();
    if (name === "") {
        textOutput.textContent = "Anonymous";
    } else {
        textOutput.textContent = name;
    }
    // textOutput.textContent = name === "" ? "Anonymous" : name;
});

