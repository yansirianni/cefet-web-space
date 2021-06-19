// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui

const botaoCalcularEl = document.querySelector('#calcular');

const constanteEl = document.querySelector('#constante');
const massa1El = document.querySelector('#massa1');
const massa2El = document.querySelector('#massa2');
const distanciaEl = document.querySelector('#distancia');

const resultadoEl = document.querySelector('#resultado');

// atrela uma função ao evento de 'click' do botão
botaoCalcularEl.addEventListener('click', function() {

    const constante = constanteEl.value;
    const massa1 = massa1El.value;
    const massa2 = massa2El.value;
    const distancia = distanciaEl.value;

    const fGrav = (constante * massa1 * massa2)/(distancia**2);

    resultadoEl.value = fGrav;
     
    });