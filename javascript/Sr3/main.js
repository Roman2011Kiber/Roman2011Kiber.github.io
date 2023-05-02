function showSuccess(text){
    document.getElementById('message').innerHTML = `<div class="alert alert-success col-6">${text}</div>`
    setTimeout(function(showSuccess){
        document.getElementById('message').innerHTML = ''
    },3000)
}
function showError(text){
    document.getElementById('message').innerHTML = `<div class="alert alert-danger col-6">${text}</div>`
    setTimeout(function(showError){
        document.getElementById('message').innerHTML = ''
    },3000)
}
function register(test){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let users = {
        name: name,
        email: email,
        password: password
    }
    if(users.name.length >= 3){
        if(users.email.includes('@gmail.com') ){
            if(users.password.length >= 6){
                localStorage.setItem('user',JSON.stringify(users))
                showSuccess('Успішна реєстрація')
            }else{
                showError('Пароль повинен бути не меньше 6 букв')
            }
        }else{
            showError('Електрона адреса повина бути @gmail')
        }

    }else{
        showError('Імя повине бути не меньше 3 букв')
    }
}