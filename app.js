//variablessssssssssssssssssssssssssssssssssss
const views = document.querySelector('.views');
const price = document.querySelector('.price');
const rangePrice = document.querySelector('.range-prices');
const btn = document.querySelector('.btn-discount');

// get value

function priceChange(){
    let btnActive = false;
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('blue');
        btnActive = true;
    })
    rangePrice.addEventListener('input', (e) => {
        const valor = e.srcElement.value;
        const intValor = parseInt(valor)
        if(intValor === 1){
            if(btnActive === true){
                price.innerHTML = '6.00';
                views.innerHTML = '10k';
            }else{
                price.innerHTML = '8.00';
                views.innerHTML = '10k';
            }
        }
        if(intValor === 2){
            if(btnActive === true){
                price.innerHTML = '9.00';
                views.innerHTML = '50k';
            }else{
                price.innerHTML = '12.00';
                views.innerHTML = '50k';
            }
        }
        if(intValor === 3){
            if(btnActive === true){
                price.innerHTML = '12.00';
                views.innerHTML = '100k';
            }else{
                price.innerHTML = '16.00';
                views.innerHTML = '100k';
            }
        }
        if(intValor === 4){
            if(btnActive === true){
                price.innerHTML = '18.00';
                views.innerHTML = '500k';
            }else{
                price.innerHTML = '24.00';
                views.innerHTML = '500k';
            }
        }
        if(intValor === 5){
            if(btnActive === true){
                price.innerHTML = '27.00';
                views.innerHTML = '10k';
            }else{
                price.innerHTML = '36.00';
                views.innerHTML = '1M';
            }
        }
    })
}
priceChange();
