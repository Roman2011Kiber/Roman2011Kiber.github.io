function vuvid(){
    let user = JSON.parse(localStorage.getItem('user'))

    if(user.status == 'noadmin'){
        alert('У вас не має доступу адміна')
        if(prompt('Який ключ в локального сховища') == 'user'){
            user.status = 'Admin'
            localStorage.setItem('user',JSON.stringify(user))
            console.log(user)
        }else{
            alert('Ви лишаєтеся звичайним користувачем')
        }
    }else{
        console.log(user)
    }
}