let keyboard1 = {
    action:true,
    name:'Клавіатура дротова Logitech G209 Prodigy USB',
    reviews: 642,
    price: 1499
};
keyboard1.image = 'z1-2.jpg';
let keyboard2 = {
    action:false,
    name:'Клавіатура Cougar Vantar',
    reviews: 461,
    price: 1286,
    image: 'z1-4.jpg'
};
let balil1 = 0;
let balil2 = 0;
if(keyboard1.price > keyboard2.price){
    balil2 = balil1 + (keyboard1.price - keyboard2.price)
}else{
    balil1 = balil2 + (keyboard2.price - keyboard1.price)
}
balil1 = balil1 + keyboard1.reviews*0.5
balil2 = balil2 + keyboard2.reviews*0.5
if(keyboard1.action == true){
    balil2 = balil2 + 100
}
if(keyboard2.action == true){
    balil2 = balil2 + 100
}
let akcia = '';
let products = document.getElementById('products')
if(keyboard1.action == true){
    akcia = `
            <div class="action">Акція</div>
        `;
        balil1 = balil1 + 100
    }else{
        akcia = ``;
    }
products.innerHTML = `
    <div class="card">
        <div class="header">
            ${akcia}
        </div>
        <div class="card_image">
            <img src="${keyboard1.image}" alt="">
        </div>

        <div class="card_info">
            <div class="name">
                ${keyboard1.name}
            </div>
    
            <div class="reviews">
                ${keyboard1.reviews} відгуки
            </div>
    
            <div class="price">
                ${keyboard1.price};
            </div>
        </div>
        <p align="center">${balil1} балів<p/>
    </div>
`

if(keyboard2.action == true){
    akcias = `
            <div class="action">Акція</div>
        `;
    }else{
        akcias = ``;
    }
products.innerHTML += `
    <div class="card">
        <div class="header">
            ${akcias}
        </div>
        <div class="card_image">
            <img src="${keyboard2.image}" alt="">
        </div>

        <div class="card_info">
            <div class="name">
                ${keyboard2.name}
            </div>
    
            <div class="reviews">
                ${keyboard2.reviews} відгуки
            </div>
    
            <div class="price">
                ${keyboard2.price};
            </div>
        </div>
        <p align="center">${balil2} балів<p/>
    </div>
`