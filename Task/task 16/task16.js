//todo: По массиву дат (task15) сгенерировать динамически сетку с датами на заданный месяц см. файл table.png

let Cal = function (divId) {

  this.divId = divId;
  this.DaysOfWeek = [
    'ПН',
    'ВТ',
    'СР',
    'ЧТ',
    'ПТ',
    'СБ',
    'ВС'
  ];

  this.Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  let d = new Date();

  this.currMonth = d.getMonth('3');
  this.currYear = d.getFullYear('2024');
  this.currDay = d.getDate('21');
};

Cal.prototype.nextMonth = function () {
  if (this.currMonth == 11) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

Cal.prototype.previousMonth = function () {
  if (this.currMonth == 0) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

Cal.prototype.showcurr = function () {
  this.showMonth(this.currYear, this.currMonth);
};

Cal.prototype.showMonth = function (y, m) {

  let html = '<table>';
  html += '<thead><tr>';
  html += '<td class="monthWithYear" colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';

  html += '<tr class="daysOfWeek">';
  for (var i = 0; i < this.DaysOfWeek.length; i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';

  let monthFirstDayOfWeek = (new Date(this.currYear, this.currMonth, 1).getDay() + 6) % 7

  for (let i = 1; i <= 42; i++) {
    let shiftedIndex = i - monthFirstDayOfWeek
    let currentDate = new Date(y, m, shiftedIndex)
    let dow = currentDate.getDay();
    if (dow == 1) {
      html += '<tr>';
    }

    if (currentDate.getMonth() != this.currMonth) {
      html += '<td class="days not-current">' + currentDate.getDate() + '</td>';
    }
    else {

      let now = new Date();
      let nowY = now.getFullYear();
      let nowM = now.getMonth();
      if (nowY == this.currYear && nowM == this.currMonth && i == this.currDay) {
        html += '<td class="days today">' + currentDate.getDate() + '</td>';
      } else {
        html += '<td class="days normal">' + currentDate.getDate() + '</td>';
      }
    }

    if (dow == 0) {
      html += '</tr>';
    }
  }

  html += '</table>';

  document.getElementById(this.divId).innerHTML = html;
};

window.onload = function () {

  let c = new Cal("divCal");
  c.showcurr();


  getId('btnNext').onclick = function () {
    c.nextMonth();
  };
  getId('btnPrev').onclick = function () {
    c.previousMonth();
  };
}

function getId(id) {
  return document.getElementById(id);
}
