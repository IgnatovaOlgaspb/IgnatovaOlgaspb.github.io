/*todo: Задан произвольный url необходимо получить router, action и id
Пример:
var url = "http://www.ozon.ru/context/detail/id/19677670/"
router: context
action: detail
id: 19677670*/

let url = "http://www.ozon.ru/context/detail/id/19677670/"
let mass = url.split("/")
console.log("router: " + mass[3])
console.log("action: " + mass[4])
console.log("id: " + mass[6])








