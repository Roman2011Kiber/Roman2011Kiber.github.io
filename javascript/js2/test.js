/*let number1 = 5;
let number2 = 4;
let suma = number1 % number2;

console.log(`Результат - ${suma}`)*/

let tovar = 4000;
let garaty = 350;
let dostavca = 60;
let names = 'Петро';
let Bay = 'Anrpods 2';
let rick = 5;
let kilcist_tovaru = 3;

console.log(`Вітаю, ${names}! Ваше замовлення:

${Bay} За ціною - ${tovar}ГРН ${kilcist_tovaru} штук
Гарантія на ${rick} рік вартістю - ${garaty}ГРН ${kilcist_tovaru} штук
ВАртість доставки - ${dostavca}ГРН

прийнято та буде оброблено протягом 24 годин

Загальна вартість - ${tovar * kilcist_tovaru + garaty * kilcist_tovaru + dostavca}ГРН`)