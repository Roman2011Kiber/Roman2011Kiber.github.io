function drawCards(){
    let cards_nem = document.getElementById('cards_num').value;
    let cards = document.getElementById('cards');
    cards.innerHTML =''
    for(i=0;i<cards_nem;i++){
        cards.innerHTML += `
            <div class="card">
                <div class="card-body my-2">
                    <h5 class="card-title">Card ${i + 1}</h5>
                </div>
            </div>
        `
    }
}

function changeColor(){
    let cards_text = document.getElementById('cards_text').value;
    let card = Array.from(document.getElementsByClassName('card'));

    card.map(function(card){
        card.style.color = cards_text
    })
}
function changeBg(){
    let cards_fon = document.getElementById('cards_fon').value;
    let card = Array.from(document.getElementsByClassName('card'));

    card.map(function(card){
        card.style.background = cards_fon
    })
}

function delCards(){
    cards.innerHTML =''
}
function delStyle(){
    let card = Array.from(document.getElementsByClassName('card'));
    card.map(function(card){
        card.style.background = 'transparent'
        card.style.color = 'black'
    })
}