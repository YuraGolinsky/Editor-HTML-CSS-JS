// Функция для конвертации текста в верхний регистр
function convertToUpperCase() {
    const inputText = document.getElementById("inputText").value;
    const outputText = inputText.toUpperCase();
    document.getElementById("outputText").value = outputText;
}

// Функция для конвертации текста в нижний регистр
function convertToLowerCase() {
    const inputText = document.getElementById("inputText").value;
    const outputText = inputText.toLowerCase();
    document.getElementById("outputText").value = outputText;
}

// Функция для форматирования текста как предложение (первая буква заглавная)
function convertToSentenceCase() {
    const inputText = document.getElementById("inputText").value;
    const outputText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
    document.getElementById("outputText").value = outputText;
}

// Функция для форматирования текста с заглавной буквой каждого слова
function convertToTitleCase() {
    const inputText = document.getElementById("inputText").value;
    const outputText = inputText.replace(/\b\w/g, c => c.toUpperCase());
    document.getElementById("outputText").value = outputText;
}

// Функция для чередования регистров в тексте
function convertToToggleCase() {
    const inputText = document.getElementById("inputText").value;
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
        outputText += i % 2 === 0 ? inputText[i].toLowerCase() : inputText[i].toUpperCase();
    }
    document.getElementById("outputText").value = outputText;
}

// Функция для случайного изменения регистра в тексте
function convertToRandomCase() {
    const inputText = document.getElementById("inputText").value;
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
        outputText += Math.random() < 0.5 ? inputText[i].toLowerCase() : inputText[i].toUpperCase();
    }
    document.getElementById("outputText").value = outputText;
}

// Функция для сохранения текста в текстовый файл
function saveToFile() {
    const outputText = document.getElementById("outputText").value;
    const blob = new Blob([outputText], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.download = "converted_text.txt";
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Функция для очистки полей
function clearFields() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
}
