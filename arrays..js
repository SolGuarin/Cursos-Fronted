
//arrays 

var frutas = ["Manzana", "Banano", "Cereza", "Fresa"];
console.log(frutas) //si las quiero imprimir 

//para acceder a los elementos del array
var frutas = ["Manzana", "Banano", "Cereza", "Fresa"];
console.log(frutas[0]) //imprime manzana


//para agregar más elementos al final de un array
var frutas = ["Manzana", "Banano", "Cereza", "Fresa"];
var masFrutas = frutas.push("Uvas"); 

//para quitar elementos del array
var frutas = ["Manzana", "Banano", "Cereza", "Fresa"];
var ultimo = frutas.pop("Uvas");

//para agregar elementos al inicio de un array
var frutas = ["Manzana", "Banano", "Cereza", "Fresa"];
var nuevaLongitud = frutas.unshift("Mango"); //mango queda al inicio

//para eliminar el primer elemento del array
var frutas = ["Uvas","Manzana", "Banano", "Cereza", "Fresa"];
var borrarFruta = frutas.shift("Uvas");

//para saber la posición de un elemento 
var frutas = ["Uvas","Manzana", "Banano", "Cereza", "Fresa"];
var posicion = frutas.indexOf("Cereza") //regresa el 3