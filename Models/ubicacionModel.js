//Metodos GET PUT/PATCH DELETE POST

//Crea una lista con elementos del tipo "Ubicación" simulando una Base de Datos
const bdUbicaciones = [
    {   id: 0,
        desc: "Sala de Estudio de Computación",
        activos: [3],
        imagen: "https://picsum.photos/200/200"},

    {   id: 1,
        desc: "Laboratorio A de Computación",
        activos: [],
        imagen: "https://picsum.photos/200/200"},

    {   id: 2,
        desc: "Laboratorio B de Computación",
        activos: [],
        imagen: "https://picsum.photos/200/200"},

    {   id: 3,
        desc: "Laboratorio C de Computación",
        activos: [],
        imagen: "https://picsum.photos/200/200"},

    {   id: 4,
        desc: "Laboratorio D de Computación",
        activos: [5],
        imagen: "https://picsum.photos/200/200"},

    {   id: 5,
        desc: "Laboratorio E de Computación",
        activos: [4],
        imagen: "https://picsum.photos/200/200"},

    {   id: 6,
        desc: "Laboratorio F de Computación",
        activos: [],
        imagen: "https://picsum.photos/200/200"},

    {   id: 7,
        desc: "Laboratorio G de Computación",
        activos: [2],
        imagen: "https://picsum.photos/200/200"},

    {   id: 8,
        desc: "Laboratorio H de Computación",
        activos: [1],
        imagen: "https://picsum.photos/200/200"},

    {   id: 9,
        desc: "Laboratorio I de Computación",
        activos: [],
        imagen: "https://picsum.photos/200/200"},

    {   id: 10,
        desc: "Laboratorio J de Computación",
        activos: [],
        imagen: "https://picsum.photos/200/200"},

    {   id: 11,
        desc: "Sala Audiovisual de Computación",
        activos: [],
        imagen: "https://picsum.photos/200/200"},
    ];

//Modelo de una ubicación
class Ubicacion
{
    constructor(id, desc, activos, imagen) {
        this.id = id,
        this.desc = desc,
        this.activos = activos, 
        this.imagen = imagen
    }
};

//GET // Obtener todos los elementos existentes
let findAll = function() {
    return bdUbicaciones;
};

//GET // Obtener un elemento según el id
let findById = function (id) {
    const index = getIdIndex(id);

    if (index !== -1) {
        return bdUbicaciones[index];
    }
    else {
        return -1;
    }
};

//POST // Añadir un elemento a la base de datos
let addElement = function (obj) {
    let oldSize = bdUbicaciones.length;
    let newSize = bdUbicaciones.push(obj);

    //Si el tamaño anterior es igual al nuevo, no se ha insertado nada, y es un error
    if (oldSize === newSize){
        return -1;
    }
    else {
        let index = newSize - 1;
        return bdUbicaciones[index];
    }
}

//PUT // Reemplazar completamente un elemento según el id
let  replaceElementById = function (id, obj) {
    const index = getIdIndex(id);

    if (index !== -1) {
        bdUbicaciones[index] = obj;
        return bdUbicaciones[index];
    }
    else {
        return -1;
    }
}

//PATCH // Reemplazar parcialmente un elemento según el id
let  updateElementById = function (id, obj) {
    const index = getIdIndex(id);

    if (index !== -1) {
        bdUbicaciones[index] = { ...bdUbicaciones[index], ...obj };
        return bdUbicaciones[index];
    }
    else {
        return -1;
    }
}

//DELETE // Elimina un elemento según el id
let deleteById = function (id) {
    const index = getIdIndex(id);

    if (index !== -1) {
        return bdUbicaciones.splice(index, 1)[0];
    }
    else {
        return -1;
    }
}

/*******************************************************************************/

//Obtiene el indice del primer elemento con el id especificado
const getIdIndex = function (id) {
    for (let i = 0; i < bdUbicaciones.length; i++) {
        if (id == bdUbicaciones[i].id) {
            return i;
        }
    };
    return -1;
}

/*******************************************************************************/

//Métodos GET
exports.findAll = findAll;
exports.findById = findById;

//Métodos POST
exports.addElement = addElement;

//Métodos PUT
exports.replaceElementById = replaceElementById;

//Métodos PATCH
exports.updateElementById = updateElementById;

//Métodos DELETE
exports.deleteById = deleteById;