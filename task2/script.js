const consoleLog = document.querySelector('#consoleLog');

const alertA = document.querySelector('#alert');

const promptA = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль.');
});

alertA.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK.');
});

promptA.addEventListener('click', () => {
    alert(' Отображает диалоговое окно с запросом на ввод текста.');
})