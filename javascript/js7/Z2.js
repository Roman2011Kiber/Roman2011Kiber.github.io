let nambers = [1,3,5]
let nambers_old = nambers.slice();
for(i=0;i<5;i++){
    let chislo = Number(prompt(`Вгадайте число`))
    if(nambers.indexOf(chislo) == -1){
        nambers.push(chislo)
    }else{
        nambers[nambers.indexOf(chislo)] = '*'
    }
}
console.log(nambers)
console.log(nambers_old)
if(nambers.length <= 5){
    alert(`Перемога! Вгадано числа: ${nambers_old}`)
}