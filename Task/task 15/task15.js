// Cгенерировать массив 6(строк) на 7(колонок),  который должнем быть заполнен днями в текущем месяце (календарь на месяц).
// Месяц задается произвольно. Календарь должен включать дни недели предыдущего месяца и последующего.
// В решении задачи воспользоваться стандартными функциями работы с датой и временем.
https://learn.javascript.ru/datetime

daysOfWeek = [
  'ПН',
  'ВТ',
  'СР',
  'ЧТ',
  'ПТ',
  'СБ',
  'ВС'
];

let calendar = [[],[],[],[],[],[],[]]
calendar[0] = daysOfWeek
let year = 2024
let month = 4
let monthFirstDayOfWeek = (new Date(year, month, 1).getDay() + 6) % 7

for (let i = 1; i <= 42; i++) {
  let shiftedIndex = i - monthFirstDayOfWeek
  let rowIndex = Math.floor((i - 1) / 7)
  let colIndex = (i - 1) % 7
  calendar[rowIndex + 1][colIndex] = new Date(year, month, shiftedIndex)
} 
console.log(calendar)
