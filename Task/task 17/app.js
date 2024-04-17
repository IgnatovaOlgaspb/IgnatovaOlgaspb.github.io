// todo: См строки 35, 36, 37

const игровоеПоле = document.querySelector('div[name="поле"]');
console.log(игровоеПоле);

const СЛОВА = [{
    слово: "мама",
    описание: "Контекст выполнения"
}]
const ЧИСЛО_ПОПЫТОК = 10

let кнопкаГО = document.querySelector('button[name="go"]');
let кнопкаПроверка = document.querySelector('button[name="проверить"]');
let счётчикПопыток = document.querySelector('#счётчик');
let скрытыйСчётчикПопыток = document.querySelector('#скрытый-счётчик');
let полеВвода = document.querySelector('[name="буква"]');

кнопкаПроверка.addEventListener("click", (событие) => {
    let сосед = событие.target.previousElementSibling
    console.log(сосед)
    проверкаБуквы(сосед.value);
    let победили = Array.from(document.querySelectorAll('[name="поле"] > div'))
        .every((element) =>
            element.innerHTML.length != 0
        );
    console.log("Проверили победили ли мы")
    if (победили) {
        конецИгры(true)
    }
})

скрытыйСчётчикПопыток.addEventListener('change', (событие) => {
    let счётчик = событие.target.value
    счётчикПопыток.innerHTML = "Осталось попыток " + счётчик + "/" + ЧИСЛО_ПОПЫТОК
    if (счётчик === "0") {
        конецИгры(false)
    }
});

кнопкаГО.addEventListener("click", (событие) => {
    событие.target.style.visibility = 'hidden';
    начатьИгру();
})

// фабрика
function создатьПоле(индекс) {
    let поле = document.createElement('div')
    поле.setAttribute('data-id', индекс)
    поле.classList.add('field')
    игровоеПоле.appendChild(поле)
}

function проверкаБуквы(буква) {
    // todo: Проверить что буква одна что это не цифра, удалить пробелы при их наличии.
    // todo: Реализовать подсчет неудачных попыток и проигрыша в случае 10 попыток.
    // todo: Реализовать выдачу приза и конца игры в случае открытия всех букв.

    let мИндексов = []
    let мбукв = СЛОВА[0].слово.split("")
    let букваБезПробелов = буква.replaceAll(' ', '')

    if (!букваЛи(букваБезПробелов)) {
        alert("Ожидалась одна русcкая буква!")
    }

    мбукв.forEach((element, index) => {
        console.log(element)
        if (букваБезПробелов == element) {
            мИндексов.push(index)
        }
    })

    if (мИндексов.length != 0) {
        мИндексов.forEach((index) => {
            let узел = document.querySelector('div[data-id="' + index + '"]')
            узел.innerHTML = букваБезПробелов
            console.log("Девушка открыла букву: " + узел.innerHTML)
        });
    } else {
        скрытыйСчётчикПопыток.value = скрытыйСчётчикПопыток.value - 1;
    }
    скрытыйСчётчикПопыток.dispatchEvent(new Event('change'))
    console.log(мИндексов);
    console.log('Буква', букваБезПробелов)
}

let букваЛи = (str) => /^[А-Яа-яёЁ]$/.test(str);

function начатьИгру() {
    let элем = СЛОВА[0]
    мбукв = элем.слово.split("")
    скрытыйСчётчикПопыток.value = ЧИСЛО_ПОПЫТОК
    кнопкаПроверка.removeAttribute('hidden');
    полеВвода.removeAttribute('hidden');
    скрытыйСчётчикПопыток.dispatchEvent(new Event('change'))
    console.log(мбукв)
    мбукв.forEach((element, index) => {
        создатьПоле(index)
    });
}


function конецИгры(победили) {
    console.log("конецИгры")
    очиститьДанные()
    console.log("очистили данные")
    if (победили) {
        alert("Вы выиграли!");
    } else {
        alert("Игра окончена! Вы проиграли!");
    }
}

function очиститьДанные() {
    document.querySelector('[name="поле"]').innerHTML = ""
    кнопкаГО.style.visibility = 'visible'
    console.log("Чистка данных")
    счётчикПопыток.innerHTML = ""
    полеВвода.value = ""
    кнопкаПроверка.setAttribute('hidden', true);
    полеВвода.setAttribute('hidden', true);
}


