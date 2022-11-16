//array de objetos

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 1700},
    { nombre: "Audifonos", costo: 1700}

];

//método filter()

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//método map()
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//método find()

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

//método for each

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});