// todo: Задана форма пользовательского профиля. 
// Поля: Имя, фамилия, возраст, образование, биография.
// Релизовать логику сохранения формы через sessionStorage.
// При перезагрузки страницы, данные введенные пользователем
// должны сохраняться. При нажатии на кнопку очистить, форма
// очищается. 

if(window.sessionStorage) {
    const formName = 'form'
    function init() {
        let form = {
            name: '',
            surname: '',
            age: '',
            education: '',
            biography: '',
        };
        sessionStorage.setItem(formName, JSON.stringify(form));
    }

    function fillForm() {
        let form = JSON.parse(sessionStorage.getItem(formName));
        document.querySelector('#name').value = form.name;
        document.querySelector('#surname').value = form.surname;
        document.querySelector('#education').value = form.education;
       
        document.querySelector('#age').value = form.age;
        document.querySelector('#biography').value = form.biography;
         console.log(sessionStorage)
        
    }
    if(!sessionStorage.getItem(formName)) {
        init();
    }
    fillForm();

    function addToSessionStorage(e) {
        let form = JSON.parse(sessionStorage.getItem(formName));
        form[e.target.name] = e.target.value;
        sessionStorage.setItem(formName, JSON.stringify(form));
    }

    function clear() {
        sessionStorage.clear()
    }

    for(input of document.querySelectorAll('.input-box')) {
        input.addEventListener('input', addToSessionStorage);
    }
    document.querySelector('button').addEventListener('click', clear);
    document.querySelector('.input-box textarea').addEventListener('input', addToSessionStorage);
}
