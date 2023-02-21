let imena = [
    'Софія Грець',
    'Вадим Стельмах',
    'Іван Дмитрич',
    'Влад Бойчук',
    'Марія Федорів',
    'Андрій Семчишин',
    'Ігор Семенюк',
    'Валерій Порошенко',
    'Віталій Кузьма',
    'Владислав Колодій'
]

let spisok = document.getElementById('spisok');
let zuk = document.getElementById('zuk');

let imya = prompt('Кому галку?');

let spisok_html = '';

let number = 0;
let zuk_html = '';

let galochka = '';
for(i=0;i<imena.length;i++){
    if(imena[i].includes(imya)){
        galochka = 'checked'
        number++
    }else{
        galochka = ''
    }
        if(i%2 == 1){
        spisok_html += `
        <h3 class="chuvak yellow" style="width:350px;" >${i + 1}. ${imena[i]}<input type="checkbox" ${galochka}></h3>
        `
    }else{
        spisok_html += `
        <h3 class="chuvak" style="width:350px;">${i + 1}. ${imena[i]}<input type="checkbox" ${galochka}></h3>
        ` 
        }
    
}
zuk_html = `знайдено користувачів з імям ${imya} - ${number}`

spisok.innerHTML = spisok_html;
zuk.innerHTML = zuk_html;