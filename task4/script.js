const textChanger = document.querySelector('#textChanger');

textChanger.addEventListener('click', function(event) {
    newText = prompt('Введите текст');
    this.textContent = newText;
    event.preventDefault();
})