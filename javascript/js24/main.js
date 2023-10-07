function DrawPhones(){
    cards.innerHTML = ''
    let action = ''
    phones.forEach(function(phone){
        if(phone.action){
            action = '<div class="action">Акція</div>'
        }else{
            action = ''
        }
            cards.innerHTML += `
            <div class="card">
                
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2AOy5JAiyjbP97oo9pevPEctZq33WgILVow&usqp=CAU" class="card-img-top">
                <div class="card-body">
                ${action}
                    <h6 class="card-title">${phone.name}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Виробник:</b> <span>${phone.developer}</span></li>
                        <li class="list-group-item"><b>Відгуків:</b> <span>${phone.reviews}</span></li>
                        <li class="list-group-item"><b>Ціна:</b> <span>${phone.price}₴</span></li>
                    </ul>
                </div>
                <div class="card-body price">
                    <a href="#" class="card-link">В корзину</a>
                    <a href="#" class="card-link">Придбати</a>
                </div>
            </div>
            `
        }
    )
}
DrawPhones()

function findDevelopers(){
    let delelopes = []
    phones.forEach(function(phone){
        if(delelopes.includes(phone.developer)){

        }else{
            delelopes.push(phone.developer)
        }
        datalistOptions.innerHTML = ''
        delelopes.forEach(function(dev){
            datalistOptions.innerHTML += `<option value="${dev}">`
        }) 
    })
}
findDevelopers()

function saveFilter(){
    let filter = {
        name: document.getElementById('name').value,
        deleloper: document.getElementById('datalistOptions').value,
        order: document.getElementById('order').value,
        max_price: document.getElementById('max_price').value,
        min_price: document.getElementById('min_price').value
    }
    localStorage.setItem('filter',JSON.stringify())
}