'use strict'

const coursesData = [
    {
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
    },
    {
        name: '2.0 Эффективный менеджмент в организации',
        date: '11.05.1992'
    },
    {
        name: 'Подготовка к сертификации SOA (PEOPLECERT Intermediate SOA)',
        date: '28.03.2019'
    },
    {
        name: 'Эффективный тайм - менеджмент для специалиста с использованием Microsoft Outlook 2019/2016',
        date: '27.05.2019'
    },
    {
        name: '0.9 Эффективный тайм - менеджмент для специалиста с использованием Microsoft Outlook 2019/2016',
        date: '02.02.2019'
    },
    {
        name: '',
        date: '11.05.1992'
    },
    {
        name: 'Кибербезопасность 4.0',
        date: '11.05.1992'
    }
];


const table = {
    data: coursesData,
    currentPage: 2,
    tableBody: $("#mainTableBody"),
    numberOfRows: 3,
    renderFirstRow: function ({name, date}) {
        return this.tableBody.html("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
    },
    renderSubsequentRow: function ({name, date}) {
        return this.tableBody.append("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
    },
    renderTable: function (courses) {
        let firstRow = (this.currentPage - 1) * this.numberOfRows;
        let secondRow = (this.currentPage - 1) * this.numberOfRows + 1;
        this.renderFirstRow(courses[firstRow]);
        for (let i = secondRow; i < this.numberOfRows; i++) {
            this.renderSubsequentRow(courses[i]);
        }
        return true;
    }
}

table.renderFirstRow({name: "Событие 12", date: "25.08.2019"});
table.renderSubsequentRow({name: "Событие 22", date: "25.08.2019"});
table.renderSubsequentRow({name: "Событие 32", date: "25.08.2019"});

table.renderTable([{
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