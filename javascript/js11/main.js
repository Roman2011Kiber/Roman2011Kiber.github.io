let days = document.getElementById('days');
let vidro = '';
let month = prompt(`Для якого місяця потрібно календар`)
document.getElementById('month').innerHTML = `Календар для місяця ${month}`
let x = '';
if(month == 'Січень' || month == 'Липень' || month == 'Березень' || month == 'Травень' || month == 'Серпень' || month == 'Жовтень' || month == 'Грудень'){
    x = 32;
}
if(month == 'Лютий'){
    x = 29;
}
if(month == 'Квітень'|| month == 'Червень' || month == 'Вересень' || month == 'Листопад'){
    x = 31;
}

for(i=1;i<x;i++){
    if(i%7 == 0 || i%7 == 6){
        vidro += `
        </div><div class="day gray">
            <p align="center">${i}<br>${month}</p>
        </div>
        `
    }else{
        vidro += `
        </div><div class="day green">
            <p align="center">${i}<br>${month}</p>
        </div>
        `
    }
}

days.innerHTML = vidro;