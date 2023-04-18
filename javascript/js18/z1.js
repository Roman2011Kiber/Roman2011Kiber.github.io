let users = [
	{
		name: "Олег",
		email: "olegivanov@.gmail.com"
	},
	{
		name: "Таня",
		email: "taniavit@.gmail.com"
	},
	{
		name: "Тарас",
		email: "tarik95@.gmail.com"
	},
	{
		name: "Оксана",
		email: "oksana2002@.gmail.com"
	}
];

function showError(text){
    document.getElementById('message').innerHTML = `<div class="alert alert-danger col-6">${text}</div>`
	setTimeout(function(showError){
		document.getElementById('message').innerHTML = ''
	},3000)
}
//showError('За довгий пароль')

function showSuccess(text){
	document.getElementById('message').innerHTML = `<div class="alert alert-success col-6">${text}</div>`
	setTimeout(function(showSuccess){
		document.getElementById('message').innerHTML = ''
	},3000)
}
//showSuccess('Успішна реєстрація')

function checkName(){
	let name = document.getElementById('name').value;

	for(i=0;i<users.length;i++){
		if(name == users[i].name){
			showError(`Користувач з ім'ям ${name} вже зареєстрований`)
		}
	}
}

function checkEmail(){
	let email = document.getElementById('email').value;

	for(i=0;i<users.length;i++){
		if(email == users[i].email){
			showError(`Користувач з таким @gmail ${email} вже зареєстрований`)
		}
	}
}

function register(){
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	if(name.length >= 3){
		if(email.includes('@gmail.com')){
			if(password.length >= 6){
				showSuccess('Успішна реєстрація')
			}else{
				showError('Пароль повинен бути не менше 6 символів.')
			}
		}else{
			showError('Не вірна пошта @gmail. Пошта повина бути @gmail.com')
		}
	}else{
		showError('Імя повине бути не менше 3 символів.')
	}
}