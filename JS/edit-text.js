// Функция для удаления запятых из текста
function removeCommas() {
    let textInput = document.getElementById('text-input');
    textInput.value = textInput.value.replace(/,/g, '');
}

// Функция для замены больших дефисов на маленькие
function replaceDashes() {
    let textInput = document.getElementById('text-input');
    textInput.value = textInput.value.replace(/—/g, '-');
}

// Функция для удаления цифр из текста
function removeNumbers() {
    let textInput = document.getElementById('text-input');
    textInput.value = textInput.value.replace(/\d+/g, '');
}



// Функция для подсчета количества символов в тексте
function countCharacters() {
    let textInput = document.getElementById('text-input');
    alert('Количество символов: ' + textInput.value.length);
}

