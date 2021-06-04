// UI для таблицы с заявками

const viewTable = (function() {

    let DOMdata = {
        tableContainer: '#requests__list',
        productsFiltr: '#inputGroupSelect01',
        statusGroupFiltr: '.btn-group',
        leftPanelNavigation: '.left-panel__navigation',
        listStatuses: '#listStatuses'
    }

    function renderListRequest(obj) {

        const containerElement = DOMdata.tableContainer;
        
        const newHtml = `<tr>
                            <th scope="row">${obj.id}</th>
                            <td>${obj.date}</td>
                            <td id='product' class=${obj.product.name}>${obj.product.label}</td>
                            <td>${obj.name}</td>
                            <td>${obj.email}</td>
                            <td>${obj.phone}</td>
                            <td>
                                <div class="badge badge-pill ${obj.status.badgeClass}" id=${obj.status.name}>${obj.status.label}</div>
                            </td>
                            <td>
                                <a href="03-crm-edit-bid.html?id=${obj.id}">Редактировать</a>
                            </td>
                        </tr>`

        document.querySelector(containerElement).insertAdjacentHTML('beforeend', newHtml);
    }

    // Обновление активного статуса
    function updateActiveStatus(element) {
        document.querySelector('.active').classList.remove('active');
        element.classList.add('active');
    }

    // Очистка таблицы
    function clearTable() {
        document.querySelector('tbody').innerHTML = '';
    }

    // Обновляем счетчик новых заявок в меню слева
    function updateCountRequest (obj) {
        const listBadges = document.querySelector(DOMdata.listStatuses).querySelectorAll('.badge');
        listBadges.forEach(item => item.textContent = obj[item.id])
    }

    return {
        renderListRequest: renderListRequest,
        updateCountRequest: updateCountRequest,
        updateActiveStatus: updateActiveStatus,
        clearTable: clearTable,
        getDOMdata() {
            return DOMdata;
        }
    }
})()
