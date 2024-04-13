const inputField = document.querySelector('#inputField');
const duplicateField = document.querySelector('#duplicateField');
const submitButton = document.querySelector('#submitButton')

inputField.addEventListener('input', (newValue) => {
    duplicateField.textContent = newValue.target.value;
})

submitButton.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log(inputField.value);
    inputField.value = null;
    duplicateField.textContent = null;
})