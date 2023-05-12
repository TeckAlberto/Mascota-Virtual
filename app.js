const estados = [
    'despierto',
    'feliz',
    'triste',
    'hambriento',
    'cansado',
    'aburrido',
    'enojado',
    'dormido'
];

const inputs = [
    'jugar',
    'ejercitar',
    'alimentar',
    'abrazar',
    'ignorar',
    'despertar'
];

const outputs = [
    'mover la cola',
    'ladrar',
    'te ignora',
    'gruñe',
    'duerme',
    'corre',
    'come',
    'te lame',
    'muerde',
    'llora',
    'se despierta'
];

var estado = 0;
var input;
var output;

var mensajeState =  document.getElementById("state");
var mensajeOutput =  document.getElementById("output");

function generarEstado(valor) {
    valor = parseInt(valor);
    var mensaje = "Has hecho la accion de: " + inputs[valor];
    var messageElement = document.getElementById("message");
    messageElement.textContent = mensaje;

    var output = estadoActual(valor);

    mensajeOutput.textContent = output;
    
    if(mensajeOutput !== ''){
        mensajeOutput.classList.add('bg-cyan-600', 'rounded-lg', 'p-2', 'border-3', 'border-cyan-900');
        setTimeout(() => {
            mensajeOutput.classList.remove('bg-cyan-600', 'rounded-lg', 'p-2', 'border-3', 'border-cyan-900');
            mensajeOutput.textContent = '';
        }, 7000);
    }


    mensajeState.innerHTML = estados[estado];
    messageElement.classList.add('bg-green-600', 'rounded-lg', 'p-2', 'border-3', 'border-green-900');
    setTimeout(() => {
        messageElement.classList.remove('bg-green-600', 'rounded-lg', 'p-2', 'border-3', 'border-green-900');
        messageElement.textContent = '';
    }, 7000);
    
  }


function estadoActual(input){

    switch(estados[estado]){
        case estados[0]:
            if(input === 0 || input === 3){
                estado = 1;
                return (input === 0) ? outputs[0] : outputs[7];
            }else if(input === 1){
                estado = 4;
                return outputs[5];
            }else if(input === 4){
                estado = 2;
                return outputs[9];
            }else{
                return outputs[6];
            }
        break;

        case estados[1]:
            if(input === 0 || input === 2 || input === 3){
                estado = 1;
                return (input === 0) ? outputs[0] : (input === 2) ? outputs[6] : outputs[7];
            }else if(input === 1){
                estado = 3;
                return outputs[5];
            }else if(input === 4){
                estado = 2;
                return outputs[1];
            }
        break;

        case estados[2]:
            if(input === 0 || input === 1 || input === 3){
                estado = 1;
                return (input === 0 || input === 3) ? outputs[0] : outputs[5];
            }else if(input === 2 || input === 4){
                estado = 2;
                return (input === 2) ? outputs[2] : outputs[9];
            }
        break;

        case estados[3]:
            if(input === 0 || input === 1){
                estado = 4;
                return (input === 1) ? outputs[1] : outputs[2];
            }else if(input === 3 || input === 4){
                estado = 3;
                return (input === 3) ? outputs[8] : outputs[1];
            }else if(input === 2){
                estado = 2;
                return outputs[6];
            }
        break;


    }

    return '';
}
