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
function enter(test){
    let reg = JSON.parse(localStorage.getItem('user'))
    let vhid_email = document.getElementById('email').value
    let vhid_password = document.getElementById('password').value

    if(reg.email == vhid_email && reg.password == vhid_password){
        reg.loged = 'True'
        showSuccess('Успішна реєстрація')
        localStorage.setItem('user',JSON.stringify(reg))
    }else(
        showError('Такого акаунта не існує')
    )
}