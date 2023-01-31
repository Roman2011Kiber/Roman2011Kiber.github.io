let arr_1 = ['Пн', 'Вт', 'Ср','Чт', 'Пт', 'Сб', 'Нд'];
let arr_2 = [];
let dob = 0;
let maxday = [];
let minday = [];

for(i=0;i<7;i++){
    arr_2.push(Number(prompt('Ведіть Скільки заробили за день')))
}
let max = arr_2[0];
let min = arr_2[0];
console.log(`День - Прибуток`);
for(i=0;i<arr_1.length;i++){
    console.log(`${arr_1[i]} - ${arr_2[i]}`);
    dob = dob + arr_2[i]
    if(max < arr_2[i]){
        max = arr_2[i]
        maxday = arr_1[i]
    }
    if(min > arr_2[i]){
        min = arr_2[i]
        minday = arr_1[i]
    }
}
console.log(`Загальний прибуток за тиждень - ${dob}`);
console.log(`Найбільше зароблено ${max} у ${maxday}`);
console.log(`Найменше зароблено ${min} у ${minday}`);