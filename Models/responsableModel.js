//Metodos GET PUT/PATCH DELETE POST

//Crea una lista con elementos del tipo "Responsable" simulando una Base de Datos
const bdResponsables = [
    {   id: 1, noEmp: 741, nombre: "José Martín Olguín Espinoza",
        activos: [],
        imagen: "https://picsum.photos/200/200"},

    {   id: 2, noEmp: 574, nombre: "Adolfo Heriberto Ruelas Puente",
        activos: [],
        imagen: "https://picsum.photos/200/200"},

    {   id: 3, noEmp: 486, nombre: "María Luisa González Ramírez",
        activos: [],
        imagen: "https://picsum.photos/200/200"}
    ];

//Modelo de un Responsable
class Responsable
{
    constructor(id, noEmp, nombre, activos, imagen) {
        this.id = id,
        this.noEmp = noEmp,
        this.nombre = nombre,
        this.activos = activos, 
        this.imagen = imagen
    }
};

//GET // Obtener todos los elementos existentes
let findAll = function() {
    return bdResponsables;
};

//GET // Obtener un elemento según el id
let findById = function (id) {
    const index = getIdIndex(id);

    if (index !== -1) {
        return bdResponsables[index];
    }
    else {
        return -1;
    }
};

//GET // Obtener un elemento según el número de empleado
let findByNoEmp = function (noEmp) {
    const index = getEmpIndex(noEmp);

    if (index !== -1) {
        return bdResponsables[index];
    }
    else {
        return -1;
    }
};

//POST // Añadir un elemento a la base de datos
let addElement = function (obj) {
    let oldSize = bdResponsables.length;
    let newSize = bdResponsables.push(obj);

    //Si el tamaño anterior es igual al nuevo, no se ha insertado nada, y es un error
    if (oldSize === newSize){
        return -1;
    }
    else {
        let index = newSize - 1;
        return bdResponsables[index];
    }
}

//PUT // Reemplazar completamente un elemento según el id
let  replaceElementById = function (id, obj) {
    const index = getIdIndex(id);

    if (index !== -1) {
        bdResponsables[index] = obj;
        return bdResponsables[index];
    }
    else {
        return -1;
    }
}

//PUT  // Reemplazar completamente un elemento según el número de empleado
let  replaceElementByNoEmp = function (noEmp, obj) {
    const index = getEmpIndex(noEmp);

    if (index !== -1) {
        bdResponsables[index] = obj;
        return bdResponsables[index];
    }
    else {
        return -1;
    }
}

//PATCH // Reemplazar parcialmente un elemento según el id
let  updateElementById = function (id, obj) {
    const index = getIdIndex(id);

    if (index !== -1) {
        bdResponsables[index] = { ...bdResponsables[index], ...obj };
        return bdResponsables[index];
    }
    else {
        return -1;
    }
}

//PATCH // Reemplazar parcialmente un elemento según el número de empleado
let  updateElementByNoEmp = function (noEmp, obj) {
    const index = getEmpIndex(noEmp);

    if (index !== -1) {
        bdResponsables[index] = { ...bdResponsables[index], ...obj };
        return bdResponsables[index];
    }
    else {
        return -1;
    }
}

//DELETE // Elimina un elemento según el id
let deleteById = function (id) {
    const index = getIdIndex(id);

    if (index !== -1) {
        return bdResponsables.splice(index, 1)[0];
    }
    else {
        return -1;
    }
}

//DELETE // Elimina un elemento según el número de empleado
let deleteByNoEmp = function (noEmp) {
    const index = getEmpIndex(noEmp);

    if (index !== -1) {
        return bdResponsables.splice(index, 1)[0];
    }
    else {
        return -1;
    }
}

/*******************************************************************************/

//Obtiene el indice del primer elemento con el id especificado
const getIdIndex = function (id) {
    for (let i = 0; i < bdResponsables.length; i++) {
        if (id == bdResponsables[i].id) {
            return i;
        }
    };
    return -1;
}

//Obtiene el indice del primer elemento con el numero de empleado especificado
const getEmpIndex = function (noEmp) {
    for (let i = 0; i < bdResponsables.length; i++) {
        if (noEmp == bdResponsables[i].noEmp) {
            return i;
        }
    };
    return -1;
} 

/*******************************************************************************/

//Métodos GET
exports.findAll = findAll;
exports.findById = findById;
exports.findByNoEmp = findByNoEmp;

//Métodos POST
exports.addElement = addElement;

//Métodos PUT
exports.replaceElementById = replaceElementById;
exports.replaceElementByNoEmp = replaceElementByNoEmp;

//Métodos PATCH
exports.updateElementById = updateElementById;
exports.updateElementByNoEmp = updateElementByNoEmp;

//Métodos DELETE
exports.deleteById = deleteById;
exports.deleteByNoEmp = deleteByNoEmp;