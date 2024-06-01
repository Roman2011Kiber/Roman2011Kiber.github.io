window.onload = function(){
    slideOne();
    slideTwo();
	show_number_basket()
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}












function vuvid_tovars(){
    let all_tovars = document.getElementById('all_tovars');
    all_tovars.innerHTML = "";
    let basket = []
    db.collection('all_tovars').get().then(res=>{
        res.forEach(doc=>{
            let tovar = doc.data();
            tovar.id = doc.id;

            let golovniy_block = document.createElement('div');
            golovniy_block.classList.add('card_tovar');

            let img_tovar = document.createElement('img');
            img_tovar.setAttribute('src',tovar.picture)
            img_tovar.classList.add('img_tovar');

            let inform = document.createElement('div');
            inform.classList.add('inform');

            let name_tovar = document.createElement('div');
            name_tovar.classList.add('name_tovar');

            let h5 = document.createElement('h5');
            h5.classList.add('name_text')
            h5.setAttribute('align','center');
            h5.innerText = tovar.name;

            let opis_tovar = document.createElement('div');
            opis_tovar.classList.add('opis_tovar');

            let p = document.createElement('p');
            p.classList.add('opis_text')
            p.setAttribute('align','center');
            p.innerText = tovar.opis;

            let price_tovar = document.createElement('div');
            price_tovar.innerText = tovar.price;

            let botton_card_inf = document.createElement('div');
            botton_card_inf.classList.add('botton_card');

            let botton_card = document.createElement('div');
            botton_card.classList.add('botton_card');
            
            let botton_1 = document.createElement('button');
			botton_1.addEventListener('click', function(){
				show_info_blocks(tovar.id);
			})
            botton_1.classList.add('botton_tovar');
            botton_1.classList.add('botton_tovar_left');
            botton_1.innerText = 'Інформація';
            
            let botton_2 = document.createElement('button');
            botton_2.addEventListener('click', function(){
                Save_to_basket(tovar.id);
            })
            botton_2.classList.add('botton_tovar');
            botton_2.classList.add('botton_tovar_right');
            botton_2.id = 'save_basket';

            
            let botton_tovar_img = document.createElement('img');
            botton_tovar_img.classList.add('botton_tovar_img');
            botton_tovar_img.setAttribute('src','https://cdn-icons-png.flaticon.com/512/1326/1326558.png')
            
            name_tovar.appendChild(h5);
            opis_tovar.appendChild(p);
            inform.appendChild(name_tovar);
            inform.appendChild(opis_tovar);
            inform.appendChild(price_tovar);
            inform.appendChild(botton_card_inf);

            botton_2.appendChild(botton_tovar_img);
            botton_card.appendChild(botton_1);
            botton_card.appendChild(botton_2);

            golovniy_block.appendChild(img_tovar);
            golovniy_block.appendChild(inform);
            golovniy_block.appendChild(botton_card);

            all_tovars.appendChild(golovniy_block)
            
        });
displaySavedFilters();
    });
}
vuvid_tovars()
function info_filters(){
	document.getElementById('save_filters').addEventListener('click',function(){
		let filters = {
			name:	    document.getElementById('name').value,
			type: 	    document.getElementById('tovar_type').value,
			season: 	document.getElementById('tovar_season').value,
			size:  	    document.getElementById('size').value,
			r1:   	    sliderOne.value,
			r2:    	    sliderTwo.value,
			color:		document.getElementById('color').value,
			producer:	document.getElementById('producer').value
		};
		save_filters(filters);
	})
}
info_filters()
function save_filters(filters){
    let all_tovars = document.getElementById('all_tovars');
    all_tovars.innerHTML = "";

    let price_sort = document.getElementById('price_sort').value;

    db.collection('all_tovars').get().then(res=>{
        let tovars = []
        res.forEach(doc=>{
            let tovar = doc.data();
            tovar.id = doc.id;
            

            let name = (!filters.name || filters.name.length === 0) || tovar.name.toLowerCase().includes(filters.name.toLowerCase());
			let type = (!filters.type || filters.type.length === 0) || tovar.type.toLowerCase() === filters.type.toLowerCase();
			let season = (!filters.season || filters.season.length === 0) || tovar.season.toLowerCase() === filters.season.toLowerCase();
			let size = (!filters.size || filters.size.length === 0) || tovar.size.toLowerCase().includes(filters.size.toLowerCase());
			let price = parseInt(tovar.price) >= filters.r1 && parseInt(tovar.price) <= filters.r2;
			let color = (!filters.color || filters.color.length === 0) || tovar.color.toLowerCase().includes(filters.color.toLowerCase());
			let producer = (!filters.producer || filters.producer.length === 0) || tovar.producer.toLowerCase().includes(filters.producer.toLowerCase());

            
            
            
            
            if (name && type && season && size && price && color && producer){
                tovars.push(tovar)
            }else{}
			if(price_sort == 'growth'){
				tovars.sort((a,b) => parseInt(b.price) - parseInt(a.price))
			}
			if(price_sort == 'decline'){
				tovars.sort((a,b) => parseInt(a.price) - parseInt(b.price))
			}
			localStorage.setItem('filters',JSON.stringify(tovars));
			
        });

		
		
        displaytovars(tovars);
    });
}
function displaytovars(tovars){
    all_tovars.innerHTML = "";
    let basket = []
    tovars.forEach(tovar =>{
        let golovniy_block = document.createElement('div');
        golovniy_block.classList.add('card_tovar');

        let img_tovar = document.createElement('img');
        img_tovar.setAttribute('src', tovar.picture)
        img_tovar.classList.add('img_tovar');

        let inform = document.createElement('div');
        inform.classList.add('inform');

        let name_tovar = document.createElement('div');
        name_tovar.classList.add('name_tovar');

        let h5 = document.createElement('h5');
        h5.classList.add('name_text')
        h5.setAttribute('align', 'center');
        h5.innerText = tovar.name;

        let opis_tovar = document.createElement('div');
        opis_tovar.classList.add('opis_tovar');

        let p = document.createElement('p');
        p.classList.add('opis_text')
        p.setAttribute('align', 'center');
        p.innerText = tovar.opis;

        let price_tovar = document.createElement('div');
        price_tovar.innerText = tovar.price;

        let botton_card_inf = document.createElement('div');
        botton_card_inf.classList.add('botton_card');

        let botton_card = document.createElement('div');
        botton_card.classList.add('botton_card');

        let button_1 = document.createElement('button');
		button_1.addEventListener('click', function(){
            show_info_blocks(tovar.id);
        })
        button_1.classList.add('botton_tovar');
        button_1.classList.add('botton_tovar_left');
        button_1.innerText = 'Інформація';

        let button_2 = document.createElement('button');
        button_2.addEventListener('click', function(){
            Save_to_basket(tovar.id);
        })
        button_2.classList.add('botton_tovar');
        button_2.classList.add('botton_tovar_right');

        let button_tovar_img = document.createElement('img');
        button_tovar_img.classList.add('botton_tovar_img');
        button_tovar_img.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/1326/1326558.png')

        name_tovar.appendChild(h5);
        opis_tovar.appendChild(p);
        inform.appendChild(name_tovar);
        inform.appendChild(opis_tovar);
        inform.appendChild(price_tovar);
        inform.appendChild(botton_card_inf);

        button_2.appendChild(button_tovar_img);
        botton_card.appendChild(button_1);
        botton_card.appendChild(button_2);

        golovniy_block.appendChild(img_tovar);
        golovniy_block.appendChild(inform);
        golovniy_block.appendChild(botton_card);

        all_tovars.appendChild(golovniy_block);
        
    })
}
function cast_filters(){
    vuvid_tovars()
    localStorage.removeItem('filters')
    window.location.reload()
}
function displaySavedFilters() {
    if (localStorage.getItem("filters")) {
        let saveFilters = JSON.parse(localStorage.getItem("filters"));
		
        displaytovars(saveFilters);
    }
}

function Save_to_basket(tovar){
    if(localStorage.getItem('basket') != null){
        let basket = JSON.parse(localStorage.getItem('basket'));
		basket.push(tovar);
        localStorage.setItem('basket',JSON.stringify(basket));
    }else{
		let basket = [tovar]
        localStorage.setItem('basket',JSON.stringify(basket));
    }
	show_number_basket()
}
function show_number_basket(){
	if(localStorage.getItem('basket')){
		let basket = JSON.parse(localStorage.getItem('basket'));
		let number_basket = document.getElementById('number_basket');
		number_basket.innerText = basket.length;
	}else{}
}

function show_info_block(){
	let block_info = document.getElementById('block_info');
	block_info.style.display = 'block'
}
function del_info_block(){
	let block_info = document.getElementById('block_info');
	block_info.style.display = 'none'
}

function show_info_blocks(id){
    
    /*db.collection('save_filters').get(id).then(reg=>{
        reg.forEach(doc=>{
            let info_tovar = document.getElementById('info_tovar')
            console.log(doc)
            info_tovar.innerHTML = `
            <div><img src="${doc.picture}"></div>
            <div><h1></h1></div>
            <div><p></p></div>
            <div></div>
            <div><div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            `
        })
    })*/
    
    show_info_block()
}