toogle_item = (classe_do_container,classe_do_checkbox, imagem_do_container, nova_imagem) => {
    if(document.querySelector(classe_do_container).classList.contains('item_checked')) {
        document.querySelector(classe_do_container).classList.replace('item_checked', 'item-unchecked');
        document.querySelector(classe_do_checkbox).checked = false;
    }
    else {
        document.querySelector(classe_do_container).classList.add('item_checked');
        document.querySelector(classe_do_container).classList.remove('item-unchecked');
        document.querySelector(classe_do_checkbox).checked = true;
    }
}

let total = document.querySelector('.total');

total.addEventListener("click",() => {
    let macarrao = document.querySelector('.item-1-checkbox');
    let pizza = document.querySelector('.item-2-checkbox');
    let lanche = document.querySelector('.item-3-checkbox');
    let strogonoff = document.querySelector('.item-4-checkbox');
    let pastel = document.querySelector('.item-5-checkbox');

    var valor_do_macarrao = (macarrao.checked)? 28 : 0;
    var valor_da_pizza = (pizza.checked)? 31 : 0;
    var valor_do_lanche = (lanche.checked)? 29 : 0;
    var valor_do_strogonoff = (strogonoff.checked)? 30 : 0;
    var valor_do_pastel = (pastel.checked)? 13 : 0;

    let valor_total = valor_do_macarrao + valor_da_pizza + valor_do_lanche + valor_do_strogonoff + valor_do_pastel;

    if (valor_total == 0) {
        document.querySelector('.total').innerHTML = 'CALCULAR TOTAL'
    }
    else {
        document.querySelector('.total').innerHTML = `R$${valor_total},00`;
    }            
})