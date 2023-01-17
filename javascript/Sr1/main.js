let baller = 0;

let user = prompt(`Яке твоє імя`)
if(prompt(`1.Скільки буде -5 + 5`) == 0){
    baller = baller + 0.5;
}
if(confirm(`2.Чи правельно написано слово Їжак`) == true){
    baller = baller + 0.5;
}
if(prompt(`3.Скільки буде 11 * 11`) == 121){
    baller = baller + 1;
}
let cccp  = prompt(`4.Кого року розвалився союз ссср`)
if(cccp == 1991 || cccp == `1991р` || cccp == `1991року` ){
    baller = baller + 1;
}else if(confirm(`5.Чи тобі -5 років`) == false){
    baller = baller + 1;
}
let Uk = prompt(`6.Якого року почалася війна в Україні`)
if(Uk == 2014 || Uk == `2014р` || Uk == `2014року`){
    baller = baller + 1;
}
if(prompt(`7.Скільки тут питань`) == 7){
    baller = baller + 1;
}
let color = prompt(`8.Який колір текста`)
if(color == `Чорний` || color == `чорний`){
    baller = baller + 1.5;
}
if(confirm(`9.Ти любиш брат чи сестру`) == true){
    baller = baller + 1.5;
}
let air = prompt(`10.Якого кольору повітря`)
if(air == 'Ніякого' || air == 'ніякого'){
    baller = baller + 2;
}
if(1>baller && 6<baller){
    alert(`Вибачте ${user}, ви не склали тест`)
}
if(7>baller && 9<baller){
    alert(`Поздравляю ${user}, ви склали тест`)
}
if(10>baller&& 12<baller){
    alert(`Поздравляю ${user}, ви склали тест на відміно`)
}
