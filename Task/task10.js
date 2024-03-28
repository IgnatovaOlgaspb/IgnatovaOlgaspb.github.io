//todo:  Задан произвольный url необходимо получить его домен.

// Пеример:
// var url = "http://www.ozon.ru/context/detail/id/19677670/"
// Домен: www.ozon.ru*/

let url = document.createElement('a');
url.href = "http://www.ozon.ru/context/detail/id/19677670/";

console.log('Домен: ' + url.hostname); 



