let passwort = 1234;
let trys = 3;
for(i=0;i<3;i++){
    if(prompt(`Напиши пароль. Залишилося спроб - ${trys}`) == passwort){
    break
}else{
    trys--
}
    if(trys==1){
        alert(`Підказка пароль 12**`)
    }
}
