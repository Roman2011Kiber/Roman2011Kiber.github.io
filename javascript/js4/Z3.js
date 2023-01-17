let number =  prompt(`Веди число`)

if(number == 0){
    alert(`Не додатнє і не від'ємне`)
}else if (number < 0 && number % 2 == 0){
    alert(`Від'ємне і парне`)
}else if(number > 0 && number % 2 == 0){
    alert(`Додатнє і парне`)
}else if (number < 0 && number % 2 == -1){
    alert(`Від'ємне і не парне`)
}else if(number > 0 && number % 2 == 1){
    alert(`Додатнє і  не парне`)
}else{
    alert(`Не є правельне число`)
}