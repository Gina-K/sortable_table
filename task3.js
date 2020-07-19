'use strict'

const table = {
    tableBody: $("#mainTableBody"),
    numberOfRows: 3,
    renderFirstRow: function ({name, date}) {
        return this.tableBody.html("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
    },
    renderSubsequentRow: function ({name, date}) {
        return  this.tableBody.append("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
    }
    // renderTable: function (courses) {
    //     this.renderFirstRow()
    // }
}

table.renderFirstRow({name: "Событие 12", date: "25.08.2019"});
table.renderSubsequentRow({name: "Событие 22", date: "25.08.2019"});
table.renderSubsequentRow({name: "Событие 32", date: "25.08.2019"});