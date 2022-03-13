function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    
    if (elemento && elemento.localName === 'audio') {

        elemento.play();
    }
    else {
        console.log('elemento nao encontrado');
    }
}

const listaDeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeteclas.length; contador++){

    const tecla = listaDeteclas[contador];
    const instru = tecla.classList[1];
    const idAudio = `#som_${instru}`; //template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    // add uma classe chamada 'ativa' em todo canto que tem a classe 'tecla'  
    tecla.onkeydown = function(evento){
        
        if (evento.code === 'Space' || evento.code === 'Enter'){

            tecla.classList.add('ativa');
        }
    }

    // remove uma classe chamada 'ativa' em todo canto que tem a classe 'tecla'
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
