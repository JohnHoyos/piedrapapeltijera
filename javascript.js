function eleccion(jugada){
    if(jugada == 1){
        resultado = "Piedra"
    }else if(jugada == 2){
        resultado = "Papel"
    }else if(jugada == 3){
        resultado = "Tijera"
    }else{
        resultado = "Mala eleccion"
    }  
    return resultado;  
}
function combate(jugador_1,jugador_2){
    if(jugador_1 == jugador_2){
        alert("EMPATE")
    }else if(jugador_1 == 1 && jugador_2 == 3){
        alert("GANASTE")
    }else if(jugador_1 == 2 && jugador_2 == 1){
        alert("GANASTE")
    }else if(jugador_1 == 3 && jugador_2 == 2){
        alert("GANASTE")
    }else{
        alert("PERDISTE")
    } 
}

jugador = prompt("Elije tu jugada")
computador = Math.floor(Math.random()*3+1)

alert("Tu elegiste "+ eleccion(jugador))
alert("Computadora elije " + eleccion(computador))
combate(jugador,computador)    
