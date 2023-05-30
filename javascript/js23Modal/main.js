function drawusers(){
    let users_table = document.getElementById('users_table');
    users_table.innerHTML = ''
    users.forEach(function(user,index){
        users_table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="showModal(${index})">
                    Детально
                </button>
            </td>
            <td>
                <button class="btn btn-danger" onclick="deletes(${index})">Видалити</button>
            </td>
        </tr>
    `
    })
}
drawusers()

function showModal(nomer){
    myModal.innerHTML = `
        <div class="modal-content">
        <div class="modal-header text-center">
            <h4>Повна інформація про користувача</h4>
            <span class="close" onclick="HideModal()">&times;</span>
        </div>
        <div class="modal-body py-3">
            <p><b>Ім'я:</b> ${users[nomer].name}</p>
            <p><b>Місто:</b> ${users[nomer].address.city}</p>
            <p><b>Email:</b> ${users[nomer].email}</p>
            <p><b>Телефон:</b> ${users[nomer].phone}</p>
            <p><b>Сайт:</b> ${users[nomer].website}</p>
            <p><b>Компанія:</b> ${users[nomer].company.name}</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-sm btn-secondary" onclick="HideModal()">Скасувати</button>
            <a class="btn btn-sm btn-success" href="https://www.google.com.ua/maps/@${users[nomer].address.geo.lng},${users[nomer].address.geo.lat},13.12z">Показати на карті</a>
            <a class="btn btn-sm btn-warning" href="mailto: ${users[nomer].email}">Написати email</a>
        </div>
    `
    myModal.style.display = 'block';
}
function HideModal(){
    myModal.style.display = 'none';
}

function deletes(nomer){
    users.splice(nomer,1)
    drawusers()
}

