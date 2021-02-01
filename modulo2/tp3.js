var table = document.getElementsByTagName("tr")
var titulo = document.getElementsByTagName("h1")

function dibujar(){
    i=0
    titulo[0].style.color="green",
    var recorrido = setInterval(() => {
        if (i<table.length){
            table[i].style.display="table-row"
            i++
        }
        else {
            clearInterval(recorrido);
        }
    }, 100);
}

/* Modificar la tabla de meses desarrollada en la Unidad para que al recargar
( o cargar por primera vez) la página, la tabla se empiece a dibujar de arriba 
hacia abajo con un movimiento perceptible (dar un tiempo entre el dibujo de una 
fila y la siguiente para que se perciba el movimiento)
*/