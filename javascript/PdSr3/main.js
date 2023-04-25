function reg(){
    let log = document.getElementById('log').value;
    let password = document.getElementById('password').value;

    const user_danni = {
        passwords: password,
        login: log
    }

    user_danni.status = 'noadmin'

    //console.log(user_danni)

    localStorage.setItem('user',JSON.stringify(user_danni))
}