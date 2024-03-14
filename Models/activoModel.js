//Metodos PUT/PATCH DELETE POST

//Crea una lista con elementos del tipo "Activo" simulando una Base de Datos
const bdActivos = [
    {   id: 1, noSerie: 1234, noInv: 9876, tipo: "Computadora",
        desc: "Computadora de escritorio marca DELL",
        ubicacion: 8, responsable: 1, imagen: "https://picsum.photos/200/200"},

    {   id: 2, noSerie: 9876, noInv: 1234, tipo: "Proyector",
        desc: "Proyector marca EPSON",
        ubicacion: 10, responsable: 2, imagen: "https://picsum.photos/200/200"},

    {   id: 3, noSerie: 2547, noInv: 7452, tipo: "Multímetro",
        desc: "Multímetro portátil marca Fluke",
        ubicacion: 8, responsable: 1, imagen: "https://picsum.photos/200/200"},

    {   id: 4, noSerie: 3658, noInv: 8523, tipo: "Fuente de poder DC",
        desc: "Fuente doble de poder de corriente directa regulable marca GWINSTEK",
        ubicacion: 8, responsable: 1, imagen: "https://picsum.photos/200/200"},
        
    {   id: 5, noSerie: 1458, noInv: 3692, tipo: "Osciloscopio",
        desc: "Osciloscopio marca Tektronix",
        ubicacion: 8, responsable: 1, imagen: "https://picsum.photos/200/200"}
    ];

//Modelo de un activo
class Activo {
    constructor(id, noSerie, noInv, tipo, desc, ubicacion, responsable, imagen){
        this.id = id,
        this.noSerie = noSerie,
        this.noInv = noInv,
        this.tipo = tipo, //(computadora, mobiliario, equipo electronico, etc.),
        this.desc = desc,
        this.ubicacion = ubicacion,
        this.responsable = responsable,
        this.imagen = imagen
    }
}

//GET // Obtener todos los elementos existentes
let findAll = function() {
    return bdActivos;
};

//GET // Obtener un elemento según el id
let findById = function (id) {
    const index = getIdIndex(id);

    if (index !== -1) {
        return bdActivos[index];
    }
    else {
        return -1;
    }
};

//GET // Obtener un elemento según el número de serie
let findByNoSerie = function (noSerie) {
    const index = getSerialIndex(noSerie);

    if (index !== -1) {
        return bdActivos[index];
    }
    else {
        return -1;
    }
};

//POST // Añadir un elemento a la base de datos
let addElement = function (obj) {
    let oldSize = bdActivos.length;
    let newSize = bdActivos.push(obj);

    //Si el tamaño anterior es igual al nuevo, no se ha insertado nada, y es un error
    if (oldSize === newSize){
        return -1;
    }
    else {
        let index = newSize - 1;
        return bdActivos[index];
    }
}

//PUT // Reemplazar completamente un elemento según el id
let  replaceElementById = function (id, obj) {
    const index = getIdIndex(id);

    if (index !== -1) {
        bdActivos[index] = obj;
        return bdActivos[index];
    }
    else {
        return -1;
    }
}

//PUT  // Reemplazar completamente un elemento según el número de serie
let  replaceElementByNoSerie = function (noSerie, obj) {
    const index = getSerialIndex(noSerie);

    if (index !== -1) {
        bdActivos[index] = obj;
        return bdActivos[index];
    }
    else {
        return -1;
    }
}

//PATCH // Reemplazar parcialmente un elemento según el id
let  updateElementById = function (id, obj) {
    const index = getIdIndex(id);

    if (index !== -1) {
        bdActivos[index] = { ...bdActivos[index], ...obj };
        return bdActivos[index];
    }
    else {
        return -1;
    }
}

//PATCH // Reemplazar parcialmente un elemento según el número de serie
let  updateElementByNoSerie = function (noSerie, obj) {
    const index = getSerialIndex(noSerie);

    if (index !== -1) {
        bdActivos[index] = { ...bdActivos[index], ...obj };
        return bdActivos[index];
    }
    else {
        return -1;
    }
}

//DELETE // Elimina un elemento según el id
let deleteById = function (id) {
    const index = getIdIndex(id);

    if (index !== -1) {
        return bdActivos.splice(index, 1)[0];
    }
    else {
        return -1;
    }
}

//DELETE // Elimina un elemento según el número de serie
let deleteByNoSerie = function (noSerie) {
    const index = getSerialIndex(noSerie);

    if (index !== -1) {
        return bdActivos.splice(index, 1)[0];
    }
    else {
        return -1;
    }
}

/*******************************************************************************/

//Obtiene el indice del primer elemento con el id especificado
const getIdIndex = function (id) {
    for (let i = 0; i < bdActivos.length; i++) {
        if (id == bdActivos[i].id) {
            return i;
        }
    };
    return -1;
}

//Obtiene el indice del primer elemento con el numero de serie especificado
const getSerialIndex = function (noSerie) {
    for (let i = 0; i < bdActivos.length; i++) {
        if (noSerie == bdActivos[i].noSerie) {
            return i;
        }
    };
    return -1;
} 

/*******************************************************************************/

//Métodos GET
exports.findAll = findAll;
exports.findById = findById;
exports.findByNoSerie = findByNoSerie;

//Métodos POST
exports.addElement = addElement;

//Métodos PUT
exports.replaceElementById = replaceElementById;
exports.replaceElementByNoSerie = replaceElementByNoSerie;

//Métodos PATCH
exports.updateElementById = updateElementById;
exports.updateElementByNoSerie = updateElementByNoSerie;

//Métodos DELETE
exports.deleteById = deleteById;
exports.deleteByNoSerie = deleteByNoSerie;