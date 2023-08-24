//Declarar la variable inicial a 0
let contador = 0;

//Seleccionar el valor y los botones por su ID
const valor = document.getElementById("valor")
const btnIncrementar = document.getElementById("incrementar")
const btnReiniciar = document.getElementById("reiniciar")
const btnDecrementar = document.getElementById("decrementar")

btnIncrementar.addEventListener('click', () => {
    contador++; //aumento el contador en 1
    valor.innerHTML = contador; //agrego el valor aumentado a la const valor
    if(contador>=1){
        valor.style.color = "#00acfc";
    }   
}) 

btnReiniciar.addEventListener('click', () => {
    contador = 0; //reinicio el contador a 0
    valor.innerHTML = contador; //agrego el valor aumentado a la const valor
    if(contador >= 0){
        valor.style.color = "#00acfc";
    }
} ) 

btnDecrementar.addEventListener('click', () => {
    contador--; //decremento el contador en 1
    valor.innerHTML = contador; //agrego el valor aumentado a la const valor
    if(contador<0){
        valor.style.color = "#ff0000";
    }
}) 

