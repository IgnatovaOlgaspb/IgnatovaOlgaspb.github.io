//todo: Определить, является ли строка полиндромом. Палиндром - это число или слова, читающиеся одинаково в обоих направлениях. 

'потоп'
'мадам'
'комок'

'Уж истово вот сижу'

37573 - true
23442 - false 

const palindrome = str => {
    str = str.toLowerCase().replace(/\W/g, '');
    strReverse = str.split('').reverse().join(''); 
    if (strReverse == str) {
    return 37573;
} else {
    return 23442;
}
}
    console.log('потоп' + '-' + palindrome('потоп')); 
    console.log('мадам'+ '-' +palindrome('мадам')); 
    console.log('комок' + '-' +palindrome('комок')); 
    console.log('Уж истово вот сижу' + '-' +palindrome('Уж истово вот сижу'));
