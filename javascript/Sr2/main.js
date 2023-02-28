let users = [
	"Андрусишин Олег",
	"Балицький Олексій",
	"Барановський Ігор",
	"Бей Тетяна",
	"Білас Всеволод",
	"Білоус Андрій",
	"Бордун Галина",
	"Буба Євген",
	"Вантух Володимир",
	"Васьків Роман",
	"Вервега Тарас",
	"Візняк Юрій",
	"Гагалюк Богдан",
	"Ганущин Олександр",
	"Гичка Михайло",
	"Гірняк Володимир",
	"Голуб Юрій",
	"Грабінський Ігор",
	"Грицик Ольга",
	"Гудима Юрій",
	"Дворянин Парасковія",
	"Дейнека Анатолій",
	"Демчина Роман",
	"Дзюдзь Михайло"
];
let table = document.getElementById('table')
let namber = document.getElementById('namber')
let user_html = ''
let imya = prompt('Кому відправити лист')
let galochka = ''
let nambers = 0;

for(i=0;i<users.length;i++){
    if(users[i].includes(imya)){
        galochka = 'checked'
        nambers++
    }else{
        galochka = ''
    }
    if(i%2 == 0){
        user_html += `
            <tr>
                <td>${i + 1}</td>
                <td>${users[i]}</td>
                <th><input type="checkbox" ${galochka}></th>
            </tr>
        `
    }else{
        user_html += `
            <tr class="grey">
                <td>${i + 1}</td>
                <td>${users[i]}</td>
                <th><input type="checkbox" ${galochka}></th>
            </tr>
        `
    }
}

table.innerHTML = user_html;
namber.innerHTML = `Знайдено користувачів з ім'ям ${imya} - ${nambers}`;
