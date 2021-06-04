// UI для формы

const viewForm = (function() {

    // Переносим селекторы в VIEW, возвращаем их оттуда
    let DOMdata = {
        inputName: '#name',
        inputPhone: '#phone',
        inputEmail: '#email',
        inputProduct: '#exampleFormControlSelect1',
        form: '.container-fluid'
    }

    // Создаем метод, который получает данные с полей и возвращает их в виде объекта
    function getInput() {
        return {
            product: document.querySelector(DOMdata.inputProduct).value,
            name: document.querySelector(DOMdata.inputName).value,
            email: document.querySelector(DOMdata.inputEmail).value,
            phone: document.querySelector(DOMdata.inputPhone).value
        }
    }

    // Очистка полей формы
    function clearFields() {
        const form = document.querySelector('form');
        form.reset();
    }

    return {
        clearFields: clearFields,
        getInput: getInput,
        getDomData() {
            return DOMdata;
        }
    }

})();