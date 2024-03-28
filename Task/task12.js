//todo: Написать функцию анаграммы

// 'finder', 'friend' === true
// 'test', 'sets' === false
// 'abc', 'aaa' === false
// 'abb', 'aab' === false

  const sort = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  const isAnagram = (original, test) => original.trim() === test.trim() ? false : sort(original) === sort(test);

    console.log('finder', 'friend' + '===' + isAnagram('finder', 'friend')); 
    console.log('test', 'sets' + '===' + isAnagram('test', 'sets')); 
    console.log('abc', 'aaa'  + '===' + isAnagram('abc', 'aaa' )); 
    console.log('abb', 'aab'  + '===' + isAnagram('abb', 'aab' )); 
    
    