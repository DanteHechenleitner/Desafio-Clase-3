

/// Desafio Clase 3 ///


/*var nombre = prompt("Ingrese su nombre");
var nombre_ingresado = nombre
var espacio = " "

while (nombre == false || nombre == null){
   console.log("Por favor ingrese su nombre");
   alert("Por favor ingrese su Nombre");
   nombre = prompt("Ingrese su nombre");
   nombre_ingresado = nombre

} if (nombre_ingresado != ""){
    alert("su nomnre es" + espacio + nombre_ingresado)
}*/

//// Comienza el desafio de la clase 4 ////

let codigo = prompt("Codigo: ");
let nombreArticulo = prompt("Nombre del Articulo:");
let precio = Number(prompt("Costo del producto:"));
let cantidad = Number(prompt("Cantidad:"));


let validarCyN = function(parametro){
    if (parametro == codigo){
        while(codigo == false || codigo == null){
            alert("Por favor ingresar el codigo");
            codigo = prompt("Codigo: ");
        }
    } else if (parametro == nombreArticulo){
        while(nombreArticulo == false || nombreArticulo == null){
            alert("Por favor ingresar el Nombre del Articulo");
            nombreArticulo = prompt("Nombre del Articulo:");
        }
    }
}

let validarPyC = function(parametro){
    if(parametro == precio){
        while(precio == false || precio == null || isNaN(precio)){
            alert("Por favor ingresar el Precio del producto");
            precio = Number(prompt("Costo del producto:"));
        }
    }else if( parametro == cantidad){
        while(cantidad == false || cantidad == null || isNaN(cantidad)){
            alert("Por favor ingresar Cantidades");
            cantidad = Number(prompt("Cantidad:"));
        }
    }
}

validarCyN(codigo);
validarCyN(nombreArticulo);
validarPyC(precio);
validarPyC(cantidad);


if (validarCyN != false && validarPyC != false){
    alert("Producto Creado")
}

let resultado = function(){
    return (precio * cantidad);
}

const productoCreado = {
    codigo: codigo,
    nombre: nombreArticulo,
    precio: precio,
    cantidad: cantidad,
    total: resultado(),
   
}

console.table(productoCreado)



