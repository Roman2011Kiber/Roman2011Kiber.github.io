let slovo = 'Машина'
let pidkazki = ["Може їздити","Треба заправляти","Є двері"]
let number = 0
let sprop = 0
alert(`Є в 72% в кожного чоловіка,жінки. Вслові ${slovo.length} букв`)

while(prompt('Відгадай слово') != slovo){
    sprop++
    if(number < 3){
        if(confirm('Вам потрібна підказка') == true){
       alert(pidkazki[number])
       number++
    }
    }
    
}
alert(`Використано спроб - ${sprop}. Використано підказок - ${number}.`)