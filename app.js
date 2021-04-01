//variablessssssssssssssssssssssssssssssssssss
const views = document.querySelector('.views');
const price = document.querySelector('.price');
const rangePrice = document.querySelector('.range-prices');
const btn = document.querySelector('.btn-discount');

// get value
rangePrice.addEventListener('input', (e) => {
    const valor = e.srcElement.value;
    const intValor = parseInt(valor)
    if(intValor === 1){
        price.innerHTML = '8';
        views.innerHTML = '10k';
    }
    if(intValor === 2){
        price.innerHTML = '12';
        views.innerHTML = '50k';
    }
    if(intValor === 3){
        price.innerHTML = '16';
        views.innerHTML = '100k';
    }
    if(intValor === 4){
        price.innerHTML = '24';
        views.innerHTML = '500k';
    }
    if(intValor === 5){
        price.innerHTML = '36';
        views.innerHTML = '1m';
    }
})
