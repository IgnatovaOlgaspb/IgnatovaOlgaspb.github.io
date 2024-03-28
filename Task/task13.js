//todo: В массиве размерности 10, найти минимальный и максимальный элементы, поменять их местами.

const array = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9],
    minIndex = array.indexOf(Math.min(...array)),
    maxIndex = array.indexOf(Math.max(...array));
console.log("Исходный массив: ", array);
[array[minIndex], array[maxIndex]] = [array[maxIndex], array[minIndex]]

console.log("Индекс максимального элемента: ", maxIndex)
console.log("Индекс минимального элемента: ", minIndex)
console.log("Новый массив: ", array)
