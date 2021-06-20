// Faça o exercício dos PARÁGRAFOS aqui

const botoesExpandirRetrair = document.querySelectorAll('.botao-expandir-retrair');

for (let botaoExpandirRetrairEl of botoesExpandirRetrair){
    botaoExpandirRetrairEl.addEventListener('click', expandirRetrair);
}

function expandirRetrair(e){
    const botaoEl = e.currentTarget;
    const pEl = botaoEl.parentNode;
    
    botaoEl.innerHTML = alteraConteudoDoBotao(botaoEl);
    pEl.classList.toggle('expandido');    
}

function alteraConteudoDoBotao(el){
    if(el.innerHTML === '+'){
        return '-';
    }
    else if(el.innerHTML === '-'){
        return '+';
    }
    
    return el.innerHTML;
}