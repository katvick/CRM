const controllerTable = (function(model, uiTable) {

    const setupEventListener = function() {
        // Получаем селекторы
        const DOM = uiTable.getDOMdata();
        // Обрабатываем выбор клик по элементу продукта
        document.querySelector(DOM.productsFiltr).addEventListener('change', ctrlFiltrProducts);
        // Обрабатываем выбор клик по статусу в левой панели 
        document.querySelector(DOM.leftPanelNavigation).addEventListener('click', ctrlFiltrStatus);
    }
    
    function addRequestOnTable() {
        // Получаем данные из LS
        const requests = model.getData('requests') || [];
        // Добавляем заявки в UI 
        requests.forEach(item => uiTable.renderListRequest(item))
    }

    // Фильтр по статусу
    function ctrlFiltrStatus(event) {
        let filtr = model.getFiltr();
        // проверяем какой выбран статус в фильтре
        const activeStatusFiltr = event.target.id;
        // меняем status в объекте filtr
        if (activeStatusFiltr != '') {
            filtr.status = activeStatusFiltr;
            uiTable.updateActiveStatus(event.target);
        }
        addTableByFiltr();
    }

    // Фильтр по продуктам
    function ctrlFiltrProducts(event) {
        let filtr = model.getFiltr();
        // проверяем какой выбран курс в фильтре
        const activeCourseFiltr = event.target.value;
        // меняем course в объекте filtr
        if (activeCourseFiltr != undefined) {
            filtr.product = activeCourseFiltr;
        }
        addTableByFiltr();
    }

    function addTableByFiltr() {
        // Очищаем таблицу
        uiTable.clearTable();
        // Генерируем таблицу с отфильтрованным списком
        const filteredList = model.filtrReq();
        filteredList.forEach(item => uiTable.renderListRequest(item));
    }

    function updateCountNewRequest() {
        // 1. считаем в модели количество заявок по статусам
        const count = model.countRequests();
        // 2. Обновляем счетчик в ui
        uiTable.updateCountRequest(count);
    }


    return {
        init: function() {
            console.log('App started');
            addRequestOnTable();
            setupEventListener();
            updateCountNewRequest();
        }
    }

})(model, viewTable)

controllerTable.init();