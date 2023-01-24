let repeat = true;
let syma = 0
let kilc = 0

while(repeat == true){
kilc = kilc + Number(prompt('Ведіть ціну товару'))
repeat = confirm('Продовжити покупки')
syma++
}
alert(`Ви придбали ${syma} товарів на загальну вартість - ${kilc} грн.`)



