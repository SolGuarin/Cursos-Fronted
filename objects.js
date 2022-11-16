
var objeto = {};

//Objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

//cómo acceder al objeto

console.log(miAuto);

//cómo acceder a algo específico del objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

miAuto.marca //me imprime la marca

//propiedad con funciones
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function(){
        console.log("Auto: "+ this.marca + this.annio);
    }
};

miAuto.detallesDelAuto(); //para ingresar a esa propiedad