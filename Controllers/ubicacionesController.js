//Metodos GET PUT/PATCH DELETE POST
//Manejo de funciones y métodos

const ubicacionModel = require("../Models/ubicacionModel.js");

//GET // Obtener todos los elementos existentes
const getAll = async function (req, res) {
    let p = ubicacionModel.findAll();
    await res.json(p);
};

//GET // Obtener un elemento según el id
const getById = async function (req, res) {
    let p = ubicacionModel.findById(req.params.id);
    
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al obtener el id: " + req.params.id });;
    }
    else {
        await res.json(p);
    }
};

//POST // Añadir un elemento a la base de datos
const saveElement = async function (req, res) {
    let p = ubicacionModel.addElement(req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al guardar el objeto" });
    }
    else {
        await res.json(p);
    }
}

//PUT // Reemplazar completamente un elemento según el id
const replaceById = async function (req, res) {
    let p = ubicacionModel.replaceElementById(req.params.id, req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al reemplazar el id: " + req.params.id });
    }
    else {
        await res.json(p);
    }
}

//PATCH // Reemplazar parcialmente un elemento según el id
const updateById = async function (req, res) {
    let p = ubicacionModel.updateElementById(req.params.id, req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al actualizar el id: " + req.params.id });
    }
    else {
        await res.json(p);
    }
}

//DELETE // Elimina un elemento según el id
const deleteId = async function (req, res) {
    let p = ubicacionModel.deleteById(req.params.id);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al eliminar el id " + req.params.id });
    }
    else {
        await res.json(p);
    }
}

//Métodos GET
exports.getAll = getAll;
exports.getById = getById;

//Métodos POST
exports.saveElement = saveElement;

//Métodos PUT
exports.replaceById = replaceById;

//Métodos PATCH
exports.updateById = updateById;

//Métodos DELETE
exports.deleteId = deleteId;