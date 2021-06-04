// Все, что происходит на странице редактирования

const controllerEditor = (function(model, uiEditor) {

    const setupEventListener = function() {
        // Получаем селекторы
        const DOM = uiEditor.getDOMdata();
        // Прослушка по клику по кнопке сохранения
        document.querySelector(DOM.save).addEventListener('click', saveReq);
        // Прослушка по клику по кнопке удаления
        document.querySelector(DOM.remove).addEventListener('click', sendToArchive);
    }



    // Получаем заявку для редактирования и отправляем в ui
    const id = window.location.search.split('=')[1]
    // Получаем массив с заявками
    const requests = model.getData('requests');
    // Находим в нем нужную заявку по id
    let reqForEdit = requests.find(item => item.id == id)
    // Отправляем в рендер
    uiEditor.renderReqEditor(reqForEdit);

    // Обновляем счетчик новых заявок
    function updateCountNewRequest() {
        // 1. Получаем число новых заявок из LS
        const count = model.getData('countRequests');
        // 2. Обновляем счетчик в ui
        uiEditor.updateCountRequest(count);
    }

    // Сохраняем заявку после редактирования
    function saveReq() {
        const input = uiEditor.getInput();
        Object.assign(reqForEdit, input);
        // Дополняем продукт и статус
        if (reqForEdit.status.name === '') {
            reqForEdit.status = model.statuses.archive;
        } else {
            reqForEdit.status = model.statuses[reqForEdit.status.name]
        }
        reqForEdit.product = model.products[reqForEdit.product.name]

        model.saveData('requests', requests);
    }

    function sendToArchive() {
        reqForEdit.status = model.statuses.archive;
        model.saveData('requests', requests);
    }

    return {
        init: function() {
            console.log('App started');
            setupEventListener();
            updateCountNewRequest();
        }

    }

})(model, viewEditor)

controllerEditor.init();