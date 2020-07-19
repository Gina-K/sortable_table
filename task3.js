'use strict'

const table = {
    tableBody: $("#mainTableBody"),
    numberOfRows: 3,
    renderFirstRow: function (name, date) {
        return this.tableBody.html("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
    },
    renderSubsequentRow: function (name, date) {
        return  this.tableBody.append("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
    }
}

table.renderFirstRow("Событие 1", "25.08.2019");
table.renderSubsequentRow("Событие 2", "15.08.2020");
table.renderSubsequentRow("Событие 3", "15.08.1990");