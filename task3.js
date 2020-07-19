'use strict'

const table = {
    tableBody: $("#mainTableBody"),
    numberOfRows: 3,
    renderFirstRow: function ({name, date}) {
        return this.tableBody.html("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
    },
    renderSubsequentRow: function ({name, date}) {
        return  this.tableBody.append("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
    },
    renderTable: function (courses) {
        this.renderFirstRow(courses[0]);
        for (let i = 1; i < this.numberOfRows; i++) {
            this.renderSubsequentRow(courses[i]);
        }
        return true;
    }
}

table.renderFirstRow({name: "Событие 12", date: "25.08.2019"});
table.renderSubsequentRow({name: "Событие 22", date: "25.08.2019"});
table.renderSubsequentRow({name: "Событие 32", date: "25.08.2019"});

table.renderTable([  {
    name: 'Противодействие коррупции',
    date: '28.02.2018'
},
    {
        name: 'Обучение JS. Часть 1',
        date: '27.02.2018'
    },
    {
        name: 'Рекурсивные запросы MS SQL Server 2012',
        date: '02.02.2019'
    },
    {
        name: 'Управление IT-инфраструктурой (ITSM)',
        date: '11.05.1992'
    }
]);