// Модуль для тестовых данных

const generateTestData = (function() {

    const ExampleRequest = function(name, phone, email, course) {
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.course = course
    }

    const testData = [
        new ExampleRequest('Елена Андреева', '89126045786', 'lena@mail.ru', 'courseHtml'),
        new ExampleRequest('Андрей Лермонтов', '89286119931', 'andrey@mail.ru', 'courseJS'),
        new ExampleRequest('Сергей Булочкин', '89087776455', 'serega@mail.ru', 'courseVue'),
        new ExampleRequest('Екатерина Светлая', '89228220103', 'kat@mail.ru', 'courseJS'),
        new ExampleRequest('Александр Пряхин', '89641598465', 'sanya@mail.ru', 'courseJS'),
        new ExampleRequest('Виктория Полищук', '89117523280', 'vika@mail.ru', 'coursePhp'),
        new ExampleRequest('Анастасия Казанцева', '89995321190', 'nastya@mail.ru', 'coursePhp'),
        new ExampleRequest('Валерия Сыробогатова', '89041213162', 'lerka@mail.ru', 'courseWordpress'),
        new ExampleRequest('Виктор Окунев', '89168059061', 'vitek@mail.ru', 'courseWordpress'),
    ];

    // вставляем тестовый пример в UI
    function insertInUI() {
        const random = Math.floor(Math.random() * testData.length);
        const randomItem = testData[random];

        document.querySelector('#name').value = randomItem.name;
        document.querySelector('#phone').value = randomItem.phone;
        document.querySelector('#email').value = randomItem.email;
        document.querySelector('#exampleFormControlSelect1').value = randomItem.course;
    }

    return {
        init: insertInUI,
    }
})();
    
generateTestData.init();


