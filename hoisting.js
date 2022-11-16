//Hoisting en variables
var miNombre;

miNombre = "Soleny";


//Ejemplo en consola

console.log(miNombre);

var miNombre = "Soleny"
    //El resultado es undefined 


//Hoisting en funciones 

hello();

function hey(){
    console.log("Hola" + miNombre)
}

miNombre = "Soleny"