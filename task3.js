'use strict'

const table = {
    tableBody: $("#mainTableBody"),
    numberOfRows: 3,
    renderFirstRow: function (name, date) {
        return this.tableBody.html("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
    }
}

table.renderFirstRow("Какое-то событие", "25.08.2019");