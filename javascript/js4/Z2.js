let color = (prompt(`Який зараз на світлофорі колір`))

if(color == `Зелений` || color == `Green`){
    alert(`Можна їхати`)
}else if(color == `Жовтий` || color == `Yellow`){
    alert(`Приготуйся стояти чи їхати`)
}else if(color == `Червоний` || color == `Red`){
    alert(`Треба стояти`)
}else{
    alert(`Вети правильно колір`)
}