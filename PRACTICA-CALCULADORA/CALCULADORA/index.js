const datosOperacion = document.getElementById('datos');
const grupoBotones = document.getElementById('grupo-botones');
const textoInicial = document.getElementById('texto-inicial');

const botonSuma = document.getElementById('suma');
const botonResta = document.getElementById('resta');
const botonMultiplicacion = document.getElementById('multiplicacion');
const botonDivision = document.getElementById('division');
const botonRaiz = document.getElementById('raiz-cuadrada');
const botonPotencia = document.getElementById('potencia');
const botonResiduo = document.getElementById('residuo');

const botonCalcular = document.getElementById('calcular');
const pirmerDato = document.getElementById('primer-dato');
const segundoDato = document.getElementById('segundo-dato');

const resultado = document.getElementById('resultado');
const botonReiniciar = document.getElementById('boton-reiniciar');

let primerTexto = document.getElementById('primer-texto');
let segundoTexto = document.getElementById('segundo-texto');

let primerNumero = document.getElementById('primer-numero');
let segundoNumero = document.getElementById('segundo-numero');

let calculoResultado;
let mensajeResultado;

function validarOperacion() {
    datosOperacion.style.display = 'none';
    botonReiniciar.style.display = 'none';
    resultado.style.display = 'none';


    botonSuma.addEventListener('click', prepararSuma);
    botonResta.addEventListener('click', prepararResta);
    botonMultiplicacion.addEventListener('click', prepararMultiplicacion);
    botonDivision.addEventListener('click', prepararDivision);
    botonRaiz.addEventListener('click', prepararRaiz);
    botonPotencia.addEventListener('click', prepararPotencia);
    botonResiduo.addEventListener('click', prepararResiduo);
}

function validarNumero(evt) { 
    if(window.event) {
        keynum = evt.keyCode;
    }else {
        keynum = evt.wich;
    }

    if((keynum > 47 && keynum < 58)){
        return true;
    }else {
        return false;
    }
}

function convertirValores() {
    primerNumero = Number(primerNumero.value);
    segundoNumero = Number(segundoNumero.value);
}

function ocultar() {
    grupoBotones.style.display = 'none';
    datosOperacion.style.display = 'flex';
    botonReiniciar.style.display = 'none';
    textoInicial.style.display = 'none';
    resultado.style.display = 'none';
}

function prepararSuma() {
    ocultar();

    primerTexto.innerHTML = 'Sumando';
    segundoTexto.innerHTML = 'Sumando';
    
    botonCalcular.addEventListener('click', calcularSuma);
}

function calcularSuma() {
    convertirValores();
    
    calculoResultado = primerNumero + segundoNumero;
    mostrarResultado();
}

function prepararResta() {
    ocultar();

    primerTexto.innerHTML = 'Minuendo';
    segundoTexto.innerHTML = 'Sustraendo';

    botonCalcular.addEventListener('click', calcularResta);
}

function calcularResta() {
    convertirValores();

    calculoResultado = primerNumero - segundoNumero;
    mostrarResultado();
}

function prepararMultiplicacion() {
    ocultar();

    primerTexto.innerHTML = 'Factor';
    segundoTexto.innerHTML = 'Factor';

    botonCalcular.addEventListener('click', calcularMultiplicacion);
}

function calcularMultiplicacion() {
    convertirValores();

    calculoResultado = primerNumero * segundoNumero;
    mostrarResultado();
}

function prepararDivision() {
    ocultar();

    primerTexto.innerHTML = 'Dividendo';
    segundoTexto.innerHTML = 'Divisor';

    botonCalcular.addEventListener('click', calcularDivision);
}

function calcularDivision() {
    convertirValores();

    calculoResultado = primerNumero / segundoNumero;
    mostrarResultado();
}

function prepararRaiz() {
    ocultar();
    segundoDato.style.display = 'none'

    primerTexto.innerHTML = 'Número';

    botonCalcular.addEventListener('click', calcularRaiz);
}

function calcularRaiz() {
    convertirValores();
    calculoResultado = Math.sqrt(primerNumero);
    mostrarResultado();
}

function prepararPotencia() {
    ocultar();

    primerTexto.innerHTML = 'Base';
    segundoTexto.innerHTML = 'Exponente';

    botonCalcular.addEventListener('click', calcularPotencia);
}

function calcularPotencia() {
    convertirValores();
    calculoResultado = Math.pow(primerNumero, segundoNumero);
    mostrarResultado();
}

function prepararResiduo() {
    ocultar();

    primerTexto.innerHTML = 'Dividendo';
    segundoTexto.innerHTML = 'Divisor';

    botonCalcular.addEventListener('click', calcularResiduo);
}

function calcularResiduo() {
    convertirValores();
    calculoResultado = primerNumero % segundoNumero;
    mostrarResultado();
}

function reiniciarCalculadora() {
    location.reload();
}

function mostrarResultado() {
    mensajeResultado = document.createElement('p');
    mensajeResultado.innerHTML = `El resultado es ${calculoResultado}`;
    resultado.appendChild(mensajeResultado);

    botonReiniciar.style.display = 'flex';
    resultado.style.display = 'flex';
    botonCalcular.disabled = true;

    botonReiniciar.addEventListener('click', reiniciarCalculadora);
}

window.addEventListener('load', validarOperacion);
