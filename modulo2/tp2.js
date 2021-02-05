var productos = [
    { 
      nombre: "harina",
      precio: 35,
    },
    {
      nombre: "pan",
      precio: 25,
    },
    {
      nombre: "papa",
      precio: 52,
    },
    {
      nombre: "palta",
      precio: 55,
    },
    {
      nombre: "fideos",
      precio: 85,
    },
    {
      nombre: "aceite",
      precio: 350,
    },
    {
      nombre: "sopa",
      precio: 86,
    },
    {
      nombre: "mermelada",
      precio: 108,
    },
    {
      nombre: "porotos",
      precio: 69,
    },
    {
      nombre: "lentejas",
      precio: 85,
    },
    {
      nombre: "mandarina",
      precio: 43,
    },
    {
      nombre: "banana",
      precio: 79,
    },
  
    {
      nombre: "leche de almendras",
      precio: 145,
    },
    {
      nombre: "papel higiénico",
      precio: 147,
    },
    {
      nombre: "lavandina",
      precio: 55,
    },
    {
      nombre: "alcohol en gel",
      precio: 123,
    },
    {
      nombre: "shampoo",
      precio: 400,
    },
    {
      nombre: "arroz",
      precio: 66,
    },
    {
      nombre: "harina",
      precio: 35,
    },
    {
      nombre: "salsa de tomate",
      precio: 35,
    },
  ];

for (var i = 0; i < productos.length; i++){
  let listado_productos = document.getElementById("listado de productos")
  let li = document.createElement('LI')
  let txt = document.createTextNode(productos[i].nombre + " Precio:" + productos[i].precio )
  li.appendChild(txt)
  listado_productos.appendChild(li)}

  
//Tp 2 - Desarrollar un “carrito de compras” donde...
//el usuario presione sobre cada producto
//      funcion para crear lista

//       crear elemento o

//        bucle para agregar

// cambie el color 

//y el mismo quede guardado en el carrito. 


   
//Luego, al oprimir el botón “Comprar”, 
   
//calcular el importe final 
   
//y mostrar los productos comprados junto 
   
//con el total a pagar. 
   
//Solo puede comprar una unidad de cada producto.

//Tp 4 - Modificar el carrito desarrollado en la Unidad 2 para utilizar funciones arrow.