//todo: Задано число. Проверить на  истинность (true или false) что 
// сумма цифр данного трехзначного числа является четным числом. Числа меняются !
// Пример:

let num = 552;

// Сумма чисел: 5 + 5 + 2 = 12 
// 12 - четное число (true)

let arr = String(num).split('');
let sum = 0;
    for(let digit of arr) {
        sum += Number(digit);
}
 console.log(sum);

   if (sum % 2 === 0 ) {
    console.log( true );
    } else {
        console.log( false )
    }
  
