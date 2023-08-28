//1
function areArraysEqual(num1, num2){
    return num1.every ((value, index) => value === num2[index]);  
}
// every - это метод массивы, которому можно задавать условия и он проверяет каждый элемент массива на выполнение заданного условия.
// index - числа от 0, value - в этом примере "содержания" массива

const num1 = [1, 2, 3, 4, 5];
const num2 = [1, 2, 3, 4, 5];

console.log(areArraysEqual(num1, num2)); // true

//2
function nums(chislo, stepen){
    return Math.pow(chislo, stepen); // math.pow - встроенная функция объекта, для возведения числа в степень. работает с 2 аргументами: 1) основное (число), 2) показатель степени (на которое возводится число).
}

const chislo = 2
const stepen = 4 
const result = nums(chislo, stepen); 

console.log(result); // 16 выведет

//3 
function countChar(str){
    const length = str.length; // ну, тут все ясно
    console.log(length);
}

const text = 'Либо js действительно настолько сложный, либо я тупая как пробка'
countChar(text);

//Доп 1 

function removeDuplicatesAndSort(arr) {
    const uniqueArray = Array.from(new Set(arr));
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
}

const inputArray = [1, 1, 1, 2, 3, 5, 5, 7, 8, 3];
const resultArray = removeDuplicatesAndSort(inputArray);

console.log(resultArray); // Выведет [1, 2, 3, 5, 7, 8] 

//Доп 2

function sendSMS(phoneNumber, message) {
    alert(`Отправлено SMS на номер ${phoneNumber}: ${message}`);
}

const phoneNumber = "+996500101010";
const message = "что-нибудь";

sendSMS(phoneNumber, message); // Выведет "Отправлено SMS на номер +996500101010: что-нибудь"


