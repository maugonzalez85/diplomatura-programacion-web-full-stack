var productos = [
    {
    nombre: "harina",
    precio: 35
    },

    {
    nombre: "pan",
    precio: 25
    },

    {
    nombre: "papa",
    precio: 52
    },

    {
    nombre: "palta",
    precio: 55
    },

    {
    nombre: "fideos",
    precio: 85
    },

    {
    nombre: "aceite",
    precio: 350
    },

    {
    nombre: "sopa",
    precio: 86
    },

    {
    nombre: "mermelada",
    precio: 108
    },

    {
    nombre: "porotos",
    precio: 69
    },

    {
    nombre: "lentejas",
    precio: 85
    },

    {
    nombre: "mandarina",
    precio: 43
    },

    {
    nombre: "banana",
    precio: 79
    }, 

    {
    nombre: "leche de almendras",
    precio: 145
    },

    {
    nombre: "papel higiénico",
    precio: 147
    },

    {
    nombre: "lavandina",
    precio: 55
    },

    {
    nombre: "alcohol en gel",
    precio: 123
    },

    {
    nombre: "shampoo",
    precio: 400
    },

    {
    nombre: "arroz",
    precio: 66
    },

    {
    nombre: "harina",
    precio: 35
    },

    {
    nombre: "salsa de tomate",
    precio: 35
    },
]

let carrito = [];
let total = 0;

function dibujar(){

    let i = 0;
    
    let table = document.getElementById("tabla");


    productos.forEach(element => {

        let fila = document.createElement("tr");
        fila.id = "producto" + i;

      
        let columna1 = document.createElement("td");
        let contenidoCol1 = document.createTextNode(element.nombre);
        columna1.appendChild(contenidoCol1);
        fila.appendChild(columna1);



        
        let columna2 = document.createElement("td");
        let contenidoCol2 = document.createTextNode(element.precio);
        columna2.appendChild(contenidoCol2);
        fila.appendChild(columna2);


        
        let columna3 = document.createElement("td");
        let botonAgregar = document.createElement("button")
        let contenidoCol3 = document.createTextNode("Agregar");
        botonAgregar.id = "botonAgregar" + i;
        botonAgregar.setAttribute('botonid', i);
        botonAgregar.addEventListener('click', agregar);
        botonAgregar.appendChild(contenidoCol3);
        columna3.appendChild(botonAgregar)
        fila.appendChild(columna3);



        
        let columna4 = document.createElement("td");
        let botonSacar = document.createElement("button")
        let contenidoCol4 = document.createTextNode("Sacar");
        botonSacar.id = "botonSacar" + i;
        botonSacar.setAttribute('botonid', i);
        botonSacar.addEventListener('click', sacar);
        botonSacar.disabled = true;
        botonSacar.appendChild(contenidoCol4);
        columna4.appendChild(botonSacar)
        fila.appendChild(columna4);


        
        table.appendChild(fila);

        i++;
    });

    
}

function comprar() {


    
    let importe = document.getElementById("total");

    
    while (importe.firstChild) {
        importe.removeChild(importe.lastChild);
    }

    dibujarCarrito();

    let monto = document.createElement("h2");
    let contenido = document.createTextNode("Total = $" + total);
    monto.appendChild(contenido);
    importe.appendChild(monto);

  

}




function agregar() {

    // 

    let botonId = this.getAttribute('botonid');
    document.getElementById("botonAgregar" + botonId).disabled = true;
    document.getElementById("botonSacar" + botonId).disabled = false;
    // me guardo en el carrito el ID , como para saber la posición , al momento de renderizar el carrito buscar en base a la base de datos toda la info.
    carrito.push(botonId)

    let fila= document.getElementById("producto"+botonId)
    fila.style.backgroundColor= "green";

   
}




function sacar() {

    let botonId = this.getAttribute('botonid');
    document.getElementById("botonAgregar" + botonId).disabled = false;
    document.getElementById("botonSacar" + botonId).disabled = true;

    
    carrito = carrito.filter(function (elemento) {
        return elemento !== botonId;
    });


    let fila= document.getElementById("producto"+botonId)
    fila.style.backgroundColor= "white";

    
}


function dibujarCarrito() {



    let i = 0;

    total = 0;
   
    let table = document.getElementById("tablaCarrito");


   

    while (table.firstChild) {
        table.removeChild(table.lastChild);
    }


    let titulo = document.createElement("tr");
    titulo.id = "tituloTablaCarrito";

  
    let producto = document.createElement("th");
    let contendidoProducto = document.createTextNode("Producto");
    producto.appendChild(contendidoProducto);
    titulo.appendChild(producto);



   
    let precio = document.createElement("th");
    let contendidoPrecio = document.createTextNode("Precio");
    precio.appendChild(contendidoPrecio);
    titulo.appendChild(precio);

    table.appendChild(titulo);



    


    for (let index = 0; index < carrito.length; index++) {


        let fila = document.createElement("tr");
        fila.id = "carrito" + i;

        
        let columna1 = document.createElement("td");
        let contenidoCol1 = document.createTextNode(productos[carrito[index]].nombre);
        columna1.appendChild(contenidoCol1);
        fila.appendChild(columna1);



        
        let columna2 = document.createElement("td");
        let contenidoCol2 = document.createTextNode(productos[carrito[index]].precio);
        columna2.appendChild(contenidoCol2);
        fila.appendChild(columna2);


        
        total += productos[carrito[index]].precio;




        
        table.appendChild(fila);

        i++;

    }   
} 