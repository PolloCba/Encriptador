var mensaje = document.querySelector("#texto");
var botonEncriptar = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#desencriptar");
var botonCopiar = document.querySelector("#copiar");
var mensajeFinal = document.querySelector("#mensaje__secreto");

    function mensajeEncriptar (texto){
        if(texto=="a"){
        texto="ia";
        return texto;
        }else if(texto=="e"){
        texto="enter";
        return texto;
        }else if(texto=="i"){
        texto="imes";
        return texto;
        } else if (texto == "o") {
        texto = "ober";
        return texto;
        } else if (texto == "u") {
        texto = "ufat";
        return texto;
        }
    }

    function encriptar(texto){
        var mensajeEncriptado = texto.replace(/a|e|i|o|u/g,mensajeEncriptar);
        return mensajeEncriptado;
    }

    function mensajeDesencriptar(texto){
        if(texto=="ia"){
            texto="a";
            return texto;
        }else if(texto=="enter"){
            texto="e";
            return texto;
        }else if(texto=="imes"){
            texto="i";
            return texto;
        }else if(texto=="ober"){
            texto="o";
            return texto;
        }else if(texto=="ufat"){
            texto="u";
            return texto;
        }
    }

    function desencriptar(texto){
        var mensajeDesencriptado = texto.replace(/ia|enter|imes|ober|ufat/g, mensajeDesencriptar);
        return mensajeDesencriptado;
    }

    botonEncriptar.addEventListener("click",function(event){
        event.preventDefault();
        var texto = mensaje.value;
        var mensajeSecreto = encriptar(texto);
        mensajeFinal.value = mensajeSecreto;
    });
    
    botonDesencriptar.addEventListener("click", function(event){
        event.preventDefault();
        var texto = mensaje.value;
        var mensajeSecreto = desencriptar(texto);
        mensajeFinal.value = mensajeSecreto;
    })

    botonCopiar.addEventListener("click" , function(event){
        event.preventDefault();
        mensajeFinal.select();
        navigator.clipboard.writeText(mensajeFinal.value);
    })
