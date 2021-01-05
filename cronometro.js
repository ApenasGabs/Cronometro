"use strict"


var hora = 0;
var minutos = 0;
var segundos = 0;
var milisegundos = 0;

var tempo = 1000;
var cronometro;


function comecar() {
    setInterval(() => {tempos();}, tempo); 
}
function parar() {
    
}
function limpar() {
    
}
function tempos() {
    document.getElementById('contador').innerText = 'foi';
}