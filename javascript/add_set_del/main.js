// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAtxUHSyMNjzHJLzpC-T_3sdgDVo5T6qI",
    authDomain: "js25-52181.firebaseapp.com",
    projectId: "js25-52181",
    storageBucket: "js25-52181.appspot.com",
    messagingSenderId: "948851257740",
    appId: "1:948851257740:web:c1310e73adae048235e6a9",
    measurementId: "G-K77YQN0D58"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
let users = []
function showModal(ID){
    document.getElementById(ID).classList.add('show');


}

function showDelModal(ID){
    document.getElementById(ID).classList.remove('show');
}

function adduser(){
    let user_info = {
        name:document.getElementById('user_name').value,
        email:document.getElementById('user_email').value,
        password:document.getElementById('user_password').value,
        nomer:document.getElementById('user_nomer').value
    }
    db.collection('users_test').add(user_info).then(res => {
        //showDelModal('newTaskModal')
        alert('Успіх')
    })
    showDelModal('newTaskModal')
    drawusers()
        document.getElementById('user_name').value = ''
        document.getElementById('user_email').value = ''
        document.getElementById('user_password').value = ''
        document.getElementById('user_nomer').value = ''
}
function drawusers(){
    users = [];
    db.collection('users_test').get().then(res =>{
        res.forEach(doc => {
            let user = doc.data();
            user.db_id = doc.id;
            users.push(user)
        });
        tbody.innerHTML = ''
        let index = 1;
        users.forEach(use => {
            
            document.getElementById('tbody').innerHTML += `
            <tr>
                <td>${index}</td>
                <td>${use.name}</td>
                <td>${use.email}</td>
                <td>${use.password}</td>
                <td>${use.nomer}</td>
                <td><button type="button" class="btn btn-outline-warning" onclick="fill_fields('${use.db_id}')">Редагувати</button></td>
                <td><button type="button" class="btn btn-outline-danger" onclick="deluser('${use.db_id}')">Видалити</button></td>
            </tr>
        `
        index++
        })
    })
}
drawusers()

function fill_fields(namber){
    showModal('editTaskModal')
    db.collection('users_test').doc(namber).get().then(res =>{
        let user = res.data();
        document.getElementById('useridet_name').value = user.name;
        document.getElementById('useridet_gmail').value = user.email;
        document.getElementById('useridet_password').value = user.password;
        document.getElementById('useridet_nomer').value = user.nomer;
    })
    document.getElementById('save').setAttribute('onclick',`editinfo('${namber}')`)
}

function editinfo(namber){
    let user = {
        name:document.getElementById('useridet_name').value,
        gmail:document.getElementById('useridet_gmail').value,
        password:document.getElementById('useridet_password').value,
        nomer:document.getElementById('useridet_nomer').value
    }
    showDelModal('editTaskModal')
    drawusers()
    db.collection('users_test').doc(namber).set(user).then(res =>{
        alert('Успішно обновлено')
    })
    
}
function deluser(id){
    
    db.collection('users_test').doc(id).delete().then(res =>{
        alert('Видалено')
    })
    drawusers()
}