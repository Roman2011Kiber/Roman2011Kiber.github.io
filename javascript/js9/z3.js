let arr_1 = [1, 2, 3, 4];
let arr_2 = [3, 8, 1, 9, 10];
let arr_3 = [];

for(i=0;i<arr_1.length;i++){
    if(arr_3.indexOf(arr_1[i]) == -1){
        arr_3.push(arr_1[i])
    }
}
for(i=0;i<arr_2.length;i++){
    if(arr_3.indexOf(arr_2[i]) == -1){
        arr_3.push(arr_2[i])
    }
}

console.log(arr_1)
console.log(arr_2)
console.log(arr_3)