
//template para crear objetos
function auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo =modelo,
    this.annio = annio
}

//construir objetos con el template anterior

var autoNuevo = new auto("Tesla", "Model 3", 2020);

var autoNuevo2 = new auto("Tesla", "Model X", 2018);

var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

//Cómo los muestro

autoNuevo2 //muestra  la info del auto 2