function tocasom (idElementoAudio){ 
    document.querySelector(idElementoAudio).play();

}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (contador = 0; contador < listaDeTeclas.length; contador++){

const instrumento = listaDeTeclas[contador].classList[1];

const tecla = listaDeTeclas[contador];

const idAudioson =`#som_${instrumento}`

tecla.onclick = function(){
tocason(idAudio);
};