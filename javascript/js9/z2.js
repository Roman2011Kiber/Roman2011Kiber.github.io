let numbers1 = [3,4,5,7,3,4,2,4,3,4,5,6,7,3,2,4,5,2,1,1,2,3,4,5];
let numbers2 = [];

for(i=0;i<numbers1.length;i++){
    if(numbers2.indexOf(numbers1[i]) == -1){
        numbers2.push(numbers1[i])
    }
}

console.log(numbers1)
console.log(numbers2)