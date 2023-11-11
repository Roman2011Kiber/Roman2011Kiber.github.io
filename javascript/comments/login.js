function login(){
    let user = {
        email: email.value,
        pass: pass.value
    }
    db.collection('users_test').get().then(res =>{
        res.forEach(doc => {
            
            if(user.email == doc.data().email){
                if(user.pass == doc.data().password){
                    localStorage.setItem('user_login',JSON.stringify(user))
                    setTimeout(function(){
                        window.location.href="index.html"
                    },1000);
                }
            }
        });
    })
}