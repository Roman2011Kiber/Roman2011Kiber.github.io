let user_names = prompt(`Яке твоє імя`)
let Predmet = prompt(`З якого предмена оцінки`)
let namber  = []

for(i=0;i<6;i++){
    namber[i] = Number(prompt(`Які в тебе оцінки`))
}

console.log(`Вітаю ${user_names}! Кілбкість оцінок з предмету ${Predmet} рівна ${namber.length}. Останя оцінка - ${namber[namber.length-1]}`)