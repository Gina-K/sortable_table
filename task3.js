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
    name: '	Эффективный тайм - менеджмент для специалиста с использованием Microsoft Outlook 2019/2016',
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
  data: coursesData.slice(),
  currentPage: 1,
  tableBody: $("#mainTableBody"),
  numberOfRows: 3,
  needSortByName: false,
  needSortByDate: false,
  highlightSorting: function () {
    let title = $("#column-name");
    let date = $("#column-date");
    title.removeClass("active-sort");
    date.removeClass("active-sort");
    if (this.needSortByName) {
      title.addClass("active-sort");
    } else if (this.needSortByDate) {
      date.addClass("active-sort")
    }
  },
  sortByName: function () {
    this.data.sort(compareByName);
  },
  sortByDate: function () {
    this.data.sort(compareByDate);
  },
  renderFirstRow: function ({name, date}) {
    return this.tableBody.html("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
  },
  renderSubsequentRow: function ({name, date}) {
    return this.tableBody.append("<tr><td>" + name + "</td><td>" + date + "</td></tr>");
  },
  render: function () {
    let firstRow = (this.currentPage - 1) * this.numberOfRows;
    let secondRow = (this.currentPage - 1) * this.numberOfRows + 1;
    navigation.setCurrentPageIndex();
    navigation.highlightCurrentPage();
    this.highlightSorting();
    if (!this.needSortByName && !this.needSortByDate) {
      this.data = coursesData.slice();
    } else if (this.needSortByName) {
      this.sortByName();
    } else {
      this.sortByDate();
    }

    this.renderFirstRow(this.data[firstRow]);
    for (let i = secondRow; i < (firstRow + this.numberOfRows); i++) {
      if (this.data[i]) {
        this.renderSubsequentRow(this.data[i]);
      }
    }
    return true;
  }
}

const navigation = {
  numberOfPages: Math.ceil(table.data.length / table.numberOfRows),
  pageIndexContainer: $("#page-index"),
  setCurrentPageIndex: function () {
    this.pageIndexContainer.html(table.currentPage);
  },
  highlightCurrentPage: function () {
    $("#page-numbers li").removeClass("current-page");
    $("#page-numbers li:contains(" + table.currentPage + ")").addClass("current-page");
  },
  renderNav: function () {
    for (let i = 1; i <= this.numberOfPages; i++) {
      $("#page-numbers").append("<li class='page-number'>" + i + "</li>");
    }
  }
}

$(init());

function init() {
  navigation.renderNav();
  table.render(table.data);
  document.querySelectorAll(".page-number").forEach(page => page.addEventListener("click", processPageNumber));
  $("#to-next-page").on("click", processNextPage);
  $("#to-previous-page").on("click", processPreviousPage);
  $("#column-name").on("click", processNameSorting);
  $("#column-date").on("click", processDateSorting);
}

function processNextPage() {
  if (table.currentPage < navigation.numberOfPages) {
    table.currentPage ++;
    table.render(table.data);
  }
}

function processPreviousPage() {
  if (table.currentPage > 1) {
    table.currentPage --;
    table.render(table.data);
  }
}

function processPageNumber() {
  table.currentPage = $(this).text();
  table.render(table.data);
}

function processNameSorting() {
  table.needSortByDate = false;
  table.currentPage = 1;
  table.needSortByName = !table.needSortByName;
  table.render(table.data);
}

function processDateSorting() {
  table.needSortByName = false;
  table.currentPage = 1;
  table.needSortByDate = !table.needSortByDate;
  table.render(table.data);
}

function compareByName(a, b) {
  let aTrimed = a.name.trim();
  let bTrimed = b.name.trim();
  if (aTrimed > bTrimed) return 1;
  else if (aTrimed < bTrimed) return -1;
  else return 0;
}

function compareByDate(a, b) {
  let dateA = Date.parse(a.date.split(".").reverse().join("-"));
  let dateB = Date.parse(b.date.split(".").reverse().join("-"));
  if (dateA > dateB) return 1;
  else if (dateA < dateB) return -1;
  else return 0;
}