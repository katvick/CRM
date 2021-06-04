// UI для страницы редактирования

const viewEditor = (function() {

    let DOMdata = {
        inputId: '#id-request',
        inputDate: '#date-request',
        inputProduct: '#inputGroupSelect01',
        inputName: '#name-request',
        inputEmail: '#email-request',
        inputPhone: '#phone-request',
        inputStatus: '#inputGroupSelect02',

        listStatuses: '#listStatuses',

        save: '#save',
        remove: '#remove'
    }

    // Получаем данные с полей после редактирования
    function getInput() {

        return {
            product: {
                name: document.querySelector(DOMdata.inputProduct).value
            },

            name: document.querySelector(DOMdata.inputName).value,
            email: document.querySelector(DOMdata.inputEmail).value,
            phone: document.querySelector(DOMdata.inputPhone).value,
        
            status: {
                name: document.querySelector(DOMdata.inputStatus).value
            }
        }
    }

    // Заполняем редактор актуальными данными
    function renderReqEditor(obj) {
        document.querySelector(DOMdata.inputId).textContent = `Заявка №${obj.id}`;
        document.querySelector(DOMdata.inputDate).textContent = obj.date;
        document.querySelector(DOMdata.inputProduct).value = obj.product.name;
        document.querySelector(DOMdata.inputName).value = obj.name;
        document.querySelector(DOMdata.inputEmail).value = obj.email;
        document.querySelector(DOMdata.inputPhone).value = obj.phone;
        document.querySelector(DOMdata.inputStatus).value = obj.status.name; 
    }

    // Обновляем счетчик новых заявок в меню слева
    function updateCountRequest (obj) {
        const listBadges = document.querySelector(DOMdata.listStatuses).querySelectorAll('.badge');
        listBadges.forEach(item => item.textContent = obj[item.id])
    }

    return {
        updateCountRequest: updateCountRequest,
        renderReqEditor: renderReqEditor,
        getInput: getInput,
        getDOMdata() {
            return DOMdata;
        }
    }
})()