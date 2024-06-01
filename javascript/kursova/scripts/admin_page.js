
function add_tovar(){
    let tovar = {
        name: document.getElementById('tovar_name').value,
        size: document.getElementById('tovar_size').value,
        opis: document.getElementById('tovar_opis').value,
        price: document.getElementById('tovar_price').value,
        type: document.getElementById('tovar_type').value,
        cloth: document.getElementById('tovar_cloth').value,
        color: document.getElementById('tovar_color').value,
        producer: document.getElementById('tovar_producer').value,
        season: document.getElementById('tovar_season').value,
        picture: document.getElementById('tovar_picture').value
    }
    db.collection('all_tovars').doc().set(tovar).then(res=>{
        console.log('Успіх')
    })
    hide('add_tovar')
}
function hide(id){
    let block = document.getElementById(id);
    block.style.display = 'none'
    getTovar()
}
function show_add_tovar(id){
    let block = document.getElementById(id);
    block.style.display = 'block'
}

function drawTovar(tovar,index){
    let tbody = document.getElementById('tbody');
    tbody.innerHTML += `
        <tr>
            <td  scope="row">${index}</td>
            <td>${tovar.name}</td>
            <td>${tovar.opis}</td>
            <td>${tovar.producer}</td>
            <td>${tovar.color}</td>
            <td>${tovar.type}</td>
            <td>${tovar.cloth}</td>
            <td>${tovar.size}</td>
            <td>${tovar.season}</td>
            <td>${tovar.price}$</td>
            <td>${tovar.picture}</td>
            <td><botton type="button" class="btn btn-outline-warning" onclick="infoTovar('${tovar.id}')">Редагувати</botton></td>
            <td><botton type="button" class="btn btn-outline-danger" onclick="delTovar('${tovar.id}')">X</batton></td>
        </tr>
    `
}
function getTovar(){
    let index = 1
    tbody.innerHTML = ''
    db.collection('all_tovars').get().then(res=>{
        res.forEach(doc=>{
            let one_tovar = doc.data();
            one_tovar.id = doc.id;
            drawTovar(one_tovar,index)
            index++
        });
    })
}
getTovar()

function delTovar(tovar_id){
    db.collection('all_tovars').doc(tovar_id).delete().then(res=>{
        getTovar()
    })
}

function infoTovar(tovar_id){
    db.collection('all_tovars').doc(tovar_id).get().then(res=>{
            let tovar = res.data();
            tovar.id = res.id;
            document.getElementById('edit_tovar_name').value = tovar.name;
            document.getElementById('edit_tovar_opis').value = tovar.opis;
            document.getElementById('edit_tovar_size').value = tovar.size;
            document.getElementById('edit_tovar_price').value = tovar.price;
            document.getElementById('edit_tovar_color').value = tovar.color;
            document.getElementById('edit_tovar_type').value = tovar.type;
            document.getElementById('edit_tovar_cloth').value = tovar.cloth;
            document.getElementById('edit_tovar_producer').value = tovar.producer;
            document.getElementById('edit_tovar_season').value = tovar.season;
            document.getElementById('edit_tovar_picture').value = tovar.picture;
            document.getElementById('Save_edit').addEventListener('click',function(){
                let tovar = {
                    name: document.getElementById('edit_tovar_name').value,
                    size: document.getElementById('edit_tovar_size').value,
                    opis: document.getElementById('edit_tovar_opis').value,
                    price: document.getElementById('edit_tovar_price').value,
                    type: document.getElementById('edit_tovar_type').value,
                    cloth: document.getElementById('edit_tovar_cloth').value,
                    color: document.getElementById('edit_tovar_color').value,
                    producer: document.getElementById('edit_tovar_producer').value,
                    season: document.getElementById('edit_tovar_season').value,
                    picture: document.getElementById('edit_tovar_picture').value
                }
                edit_tovar(tovar_id,tovar)
            })
            show_add_tovar('edit_tovar')
    });
}
function edit_tovar(id,tovar){
    db.collection('all_tovars').doc(id).set(tovar).then(res=>{
        hide('edit_tovar')
    })
    
}