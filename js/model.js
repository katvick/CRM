// Модель - xранит все данные

const model = (function() {
    
    // Создаем структуру данных в модели
    // Класс-Конструктор для объектов типа заявка
    class Request {
        constructor(product, name, email, phone) {
            this.name = name,
            this.email = email,
            this.phone = phone,
            this.status = statuses.new,
            this.id = this.generateId();
            this.date = this.generateDate();
            this.product = products[product];
        }

        generateId() {
            let ID;
            // Генерируем ID
            if (listRequests.length > 0) {
                // находим индекс последнего эл-та
                const lastIndex = listRequests.length - 1;
                // получаем id следующего эл-та
                ID = listRequests[lastIndex].id + 1;
            } else {
                ID = 1
            }

            return ID;
        }

        generateDate() {
            const date = new Date();
            const newDate = new Intl.DateTimeFormat('ru').format(date);

            return newDate;
        }
    }

    function addRequest(product, name, email, phone) {
        listRequests = getData('requests') || [];
        let newRequest = new Request(product, name, email, phone)
        listRequests.push(newRequest);
        saveData('requests', listRequests);
    }

    // Ф-я для сохранения данных в LS
    function saveData(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    // Ф-я для получения данных из LS
    function getData(name) {
        return JSON.parse(localStorage.getItem(name));
    }

    // Считаем заявки для счетчиков
    function countRequests() {
        // 1. Получаем заявки
        const requests = getData('requests');
        // 2. Сортируем заявки
        requests.forEach(item => countReq[item.status.name]++)
        // 3. Считаем все заявки
        countReq.all = requests.length;
        // 4. сохраняем в LS
        saveData('countRequests', countReq);
        // 5. Возвращаем объект с счетчиками
        return countReq;
    }

    function filtrReq() {
        let requests = getData('requests');
        let arrFiltr = [];

        requests.forEach(item => {
            if ((item.status.name == filtr.status || filtr.status == 'all') && (item.product.name == filtr.product || filtr.product == 'all')) {
                arrFiltr.push(item);
            } 
        });

        return arrFiltr;
    }

    // Переменная-массив, в котором будут находиться все заявки в виде объектов
    let listRequests = [];

    // Счетчик заявок по статусам
    let countReq = {
        all: 0,
        new: 0,
        inWork: 0,
        success: 0,
        archive: 0,
    }

    const statuses = {
        new: {
            name: 'new',
            label: 'Новая',
            badgeClass: 'badge-danger'
        },
        
        inWork: {
            name: 'inWork',
            label: 'В работе',
            badgeClass: 'badge-warning'
        },

        success: {
            name: 'success',
            label: 'Завершена',
            badgeClass: 'badge-success'
        },

        archive: {
            name: 'archive',
            label: 'Архив',
            badgeClass: ''
        }
    }

    const products = {
        courseHtml: {
            name: 'courseHtml',
            label: 'Курс по верстке',
        },
        
        courseJS: {
            name: 'courseJS',
            label: 'Курс по JavaScript',
        },

        courseVue: {
            name: 'courseVue',
            label: 'Курс по VUE JS',
        },

        coursePhp: {
            name: 'coursePhp',
            label: 'Курс по PHP',
        },

        courseWordpress: {
            name: 'courseWordpress',
            label: 'Курс по WordPress',
        }
    }

    // Фильтр
    const filtr = {
        status: 'all',
        product: 'all'
    }

    return {
        addRequest: addRequest,
        countRequests: countRequests,
        saveData: saveData,
        getData: getData,
        filtrReq: filtrReq,
        getFiltr: function() {
            return filtr;
        },
        statuses: statuses,
        products: products,
        // ф-я для проверки listRequests
        test: function() {
		    console.log("TCL: model -> listRequests", listRequests)
        }
    }

})();