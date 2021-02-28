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
        nombre: "salsa de tomate",
        precio: 35
    },
]

for (let i = 0; i < productos.length; i++) {
    // Create item
    let item = document.createElement("div");
    item.className ="item";
    item.id = productos[i].nombre.replace(/\s/g,"_");
    
    // Insert Image
    let image = document.createElement("img");
    let imgSrc = productos[i].nombre;
    imgSrc = imgSrc.replace(/\s/g,"_");
    image.src = "carrito_imagenes/"+imgSrc+".jpg";
    item.appendChild(image);

    // Insert Text
    let productName = productos[i].nombre;
    productName = productName[0].toUpperCase() + productName.slice(1,);
    let txt = document.createElement("p");
    let content = document.createTextNode(productName+" - $"+productos[i].precio);
    txt.appendChild(content);
    item.appendChild(txt);

    // Insert add to cart button
    let button = document.createElement("button");
    button.className = "material-icons-outlined";
    button.setAttribute("onclick","addToCart(this)");
    let buttonContent = document.createTextNode("add_shopping_cart");
    button.appendChild(buttonContent);
    item.appendChild(button);

    // Insert item in productos
    let section = document.getElementsByClassName("productos")[0];
    section.appendChild(item);
}

var jsProductsInCart = [];
var total$;

function addToCart(element) {

    // Determine selected product name and price
    let elementId = element.parentNode.id;
    let productName = elementId.replace(/_/g," "); // replace underscores from id with spaces
    let price;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == productName) {
            price = productos[i].precio;
            break;
        }
    }

    /*  Amend quant and total value of product in list if already selected and
        indicate for future reference whether the product had already been
        selected or not.
        Save index number in list.
    */
    let notInCart = true;
    let indexInCart;
    for (let i = 0; i < jsProductsInCart.length; i++) {
        if (jsProductsInCart[i].nombre == productName) {
            jsProductsInCart[i].quant++; 
            jsProductsInCart[i].precio += price;
            notInCart = false;
            indexInCart = i;
            break;
        }
    }

    // If not selected add to list and save index number in list.
    if (notInCart) {
        prodInCartObject = {}
        prodInCartObject.nombre = productName;
        prodInCartObject.quant = 1;
        prodInCartObject.precio = price;
        jsProductsInCart.push(prodInCartObject);
        indexInCart = jsProductsInCart.length - 1;
    }
    
    // If first element in list remove placeholder text
    let empty = document.getElementById("empty_cart");
    let firstItem = (empty != null);
    if (empty != null) {
        empty.parentNode.removeChild(empty);
    }  

    // Create html element for product in cart 
    let productInCartDiv = document.createElement("div");
    productInCartDiv.className = "prod_in_cart";
    let removeButton = document.createElement("button");
    removeButton.className = "material-icons-outlined";
    // Set remove item button to corresponding function
    removeButton.setAttribute("onclick","removeFromCart(this.parentNode)");
    productInCartDiv.appendChild(removeButton);
    let removeButtonContent = document.createTextNode("remove_shopping_cart");
    removeButton.appendChild(removeButtonContent);
    let productInCart = document.createElement("p");
    let productInCartContent = document.createTextNode(jsProductsInCart[indexInCart].nombre+" x"+jsProductsInCart[indexInCart].quant+" - $ "+jsProductsInCart[indexInCart].precio);
    productInCart.appendChild(productInCartContent);
    productInCartDiv.appendChild(productInCart);

    // Insert hmtl element for product in cart
    let cartProducts = document.getElementById("carrito");
    if (notInCart) { // as new element if not previously in list
        cartProducts.appendChild(productInCartDiv);   
    } else { // amending existing element if previously in list
        let productsInCartHTML = cartProducts.getElementsByClassName("prod_in_cart");
        productsInCartHTML[indexInCart].replaceWith(productInCartDiv);
    }

    // Amend total value from cart

    //calculate new total
    total$ = 0;
    for (let i = 0; i < jsProductsInCart.length; i++) {
        total$ += jsProductsInCart[i].precio;}
    // create html element incorporating new total
    let totalHtml = document.createElement("p");
    totalHtml.id = "total";
    let totalText = document.createTextNode("Total: $ "+total$);
    totalHtml.appendChild(totalText);
    // Insert total html element
    if (firstItem) { // as new element if this is the first item added to the list
        let cart = document.getElementsByClassName("carrito")[0];
        cart.appendChild(totalHtml);
    }  else { // amending existing total if there were items in the list already
        document.getElementById("total").replaceWith(totalHtml);
    }
    
}

function removeFromCart(element) {
    // Find index number of the item selected in html cart and in js list (same index)
    let siblings = element.parentNode.getElementsByClassName(element.className);
    let siblingsArr = [].slice.call(siblings)
    let index = siblingsArr.indexOf(element);
    // Obtain total value removed from cart
    let valueRemoved = jsProductsInCart[index].precio;
    // Amend total value of cart
    total$ -= valueRemoved;
    let totalHtml = document.getElementById("total");
    if (total$ == 0) { // If new total value is 0, remove total html element and reinstate placeholder text
        totalHtml.parentNode.removeChild(totalHtml);
        let cartProducts = document.getElementById("carrito");
        let empty = document.createElement("p");
        empty.id = "empty_cart";
        let emptyContent = document.createTextNode("No ha seleccionado ningún producto.");
        empty.appendChild(emptyContent);
        cartProducts.appendChild(empty);
    } else { // If new total != 0, amend total value html element to reflect this
        totalHtml.textContent = "Total: $ "+total$;
    }

    // remove item from js list of products selected
    jsProductsInCart.splice(index,1);
    // remove html element for item removed
    element.parentNode.removeChild(element);
}
