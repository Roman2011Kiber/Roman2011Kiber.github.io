let warning = document.getElementById(`warning`);
let imya = document.getElementById(`imya`);

let gmail = '';
let login = true;
let parol = 123456789;
/*if(confirm(`Підтвертьте логін`) == login){
    warning.innerHTML = `<h1 align="center">Вітаю Петро Іванов! На вашу поштову скриньку StudiLink@gmail.com відправлено лист із підтвердженям</h1>`;
    imya.innerHTML = `Петро Іванов`;
}else{
    warning.innerHTML = `<h1 align="center">Будь-ласка увійдіть у свій акаунт або створіть новий</h1>`;
    imya.innerHTML = `<a href="">Увійти</a>`;
}*/
if(prompt(`Ведіть пароль`) == parol){
    warning.innerHTML = `<h1 align="center">Вітаю Петро Іванов! На вашу поштову скриньку StudiLink@gmail.com відправлено лист із підтвердженям</h1>`;
    imya.innerHTML = `Петро Іванов`;
}else{
    gmail = gmail + prompt(`Ведіть @gmail`);
    warning.innerHTML = `<h1 align="center">На ваш @gmail - ${gmail} відправлено інформацію для выдновленю паролю</h1>`;
    imya.innerHTML = `<a href="">Увійти</a>`;
}



