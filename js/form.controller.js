const controllerForm = (function(model, uiForm) {
    // model - модуль Model
    // uiForm - модуль View для формы

    function setupEventListeners() {
        const DOM = uiForm.getDomData();
        document.querySelector(DOM.form).addEventListener('submit', ctrlAddRequest);
    }

    function ctrlAddRequest(event) {
        event.preventDefault();
        const input = uiForm.getInput();
        // Добавляем полученные данные в модель
        model.addRequest(input.product, input.name, input.email, input.phone);
        // uiForm.clearFields();
        generateTestData.init();
        model.test();
    }

    return {
        init: function() {
            console.log('App started');
            setupEventListeners();

        }
    }

})(model, viewForm);

controllerForm.init();