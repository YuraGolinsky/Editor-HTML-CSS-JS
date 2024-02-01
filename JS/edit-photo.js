
// Получение элементов из DOM
let canvas = document.getElementById('canvas'); // холст
let ctx = canvas.getContext('2d'); // контекст рисования
let imageInput = document.getElementById('imageInput'); // input для выбора изображения
let filterControls = document.getElementById('filterControls'); // контейнер элементов управления фильтрами

let image; // переменная для хранения изображения

// Функция начала редактирования (вызывается при нажатии кнопки)
function startEditing() {
    imageInput.click(); // вызываем клик на input для выбора изображения
}

// Функция загрузки изображения после выбора файла
function loadImage(event) {
    let file = event.target.files[0]; // получаем выбранный файл

    if (file) {
        let reader = new FileReader(); // создаем объект FileReader для чтения файла

        reader.onload = function (e) {
            image = new Image(); // создаем объект изображения
            image.onload = function () {
                canvas.width = image.width; // устанавливаем ширину холста равной ширине изображения
                canvas.height = image.height; // устанавливаем высоту холста равной высоте изображения
                ctx.drawImage(image, 0, 0); // рисуем изображение на холсте
                filterControls.style.display = 'block'; // отображаем контейнер управления фильтрами
            };
            image.src = e.target.result; // устанавливаем источник изображения
        };

        reader.readAsDataURL(file); // читаем файл как Data URL
    }
}

// Функция применения фильтра к изображению
function applyFilter(filter, value) {
    ctx.filter = `${filter}(${value}%)`; // устанавливаем фильтр с заданным значением
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // рисуем изображение с примененным фильтром
}

// Функция сброса всех фильтров
function resetFilters() {
    ctx.filter = 'none'; // сбрасываем все фильтры
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // рисуем изображение без фильтров
    resetFilterControls(); // вызываем функцию сброса значений элементов управления фильтрами
}

// Функция сброса значений элементов управления фильтрами
function resetFilterControls() {
    let rangeInputs = filterControls.querySelectorAll('input[type="range"]'); // выбираем все элементы input типа range
    rangeInputs.forEach(input => {
        input.value = 0; // устанавливаем значение 0 для каждого элемента
    });
}

// Функция скачивания отредактированного изображения
function downloadImage() {
    let link = document.createElement('a'); // создаем элемент <a> для скачивания
    link.href = canvas.toDataURL('image/png'); // устанавливаем ссылку на изображение в формате PNG
    link.download = 'edited_image.png'; // устанавливаем имя файла для скачивания
    link.click(); // вызываем клик на элементе <a> для начала скачивания
}

// Обработчики событий для элементов управления фильтрами
document.getElementById('grayscaleRange').addEventListener('input', function () {
    applyFilter('grayscale', this.value); // применяем фильтр grayscale с заданным значением
});

document.getElementById('sepiaRange').addEventListener('input', function () {
    applyFilter('sepia', this.value); // применяем фильтр sepia с заданным значением
});

document.getElementById('invertRange').addEventListener('input', function () {
    applyFilter('invert', this.value); // применяем фильтр invert с заданным значением
});

document.getElementById('blurRange').addEventListener('input', function () {
    applyFilter('blur', this.value); // применяем фильтр blur с заданным значением
});

document.getElementById('brightnessRange').addEventListener('input', function () {
    applyFilter('brightness', this.value); // применяем фильтр brightness с заданным значением
});

document.getElementById('contrastRange').addEventListener('input', function () {
    applyFilter('contrast', this.value); // применяем фильтр contrast с заданным значением
});
