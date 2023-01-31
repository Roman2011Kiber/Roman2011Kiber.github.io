let numbers = [25,78,21,59,1,96]
let max = numbers[0];
let min = numbers[0];

for(i=0;i<numbers.length;i++){
    if(max < numbers[i]){
        max = numbers[i]
    }
}
for(i=0;i<numbers.length;i++){
    if(min > numbers[i]){
        min = numbers[i]
    }
}

console.log(numbers)
console.log(`Максемальне число - ${max}`)
console.log(`Мінімальне число - ${min}`)