//Metodos GET PUT/PATCH DELETE POST
//Manejo de funciones y métodos

const activoModel = require("../Models/activoModel.js");

//GET // Obtener todos los elementos existentes
const getAll = async function (req, res) {
    let p = activoModel.findAll();
    await res.json(p);
};

//GET // Obtener un elemento según el id
const getById = async function (req, res) {
    let p = activoModel.findById(req.params.id);
    
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al obtener el id: " + req.params.id });
    }
    else {
        await res.json(p);
    }
};

//GET // Obtener un elemento según el número de serie
const getBySerial = async function (req, res) {
    let p = activoModel.findByNoSerie(req.params.serial);

    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al obtener el serial: " + req.params.serial });
    }
    else {
        await res.json(p);
    }
};

//POST // Añadir un elemento a la base de datos
const saveElement = async function (req, res) {
    let p = activoModel.addElement(req.body);

    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al guardar el elemento" });
    }
    else {
        await res.json(p);
    }
}

//PUT // Reemplazar completamente un elemento según el id
const replaceById = async function (req, res) {
    let p = activoModel.replaceElementById(req.params.id, req.body);

    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al reemplazar el id: " + req.params.id });
    }
    else {
        await res.json(p);
    }
}

//PUT  // Reemplazar completamente un elemento según el número de serie
const replaceBySerial = async function (req, res) {
    let p = activoModel.replaceElementByNoSerie(req.params.serial, req.body);

    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al obtener el serial: " + req.params.serial });;
    }
    else {
        await res.json(p);
    }
}

//PATCH // Reemplazar parcialmente un elemento según el id
const updateById = async function (req, res) {
    let p = activoModel.updateElementById(req.params.id, req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al actualizar el id: " + req.params.id });
    }
    else {
        await res.json(p);
    }
}

//PATCH // Reemplazar parcialmente un elemento según el número de serie
const updateBySerial = async function (req, res) {
    let p = activoModel.updateElementByNoSerie(req.params.serial, req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al actualizar el serial: " + req.params.serial });;
    }
    else {
        await res.json(p);
    }
}

//DELETE // Elimina un elemento según el id
const deleteId = async function (req, res) {
    let p = activoModel.deleteById(req.params.id);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al eliminar el id " + req.params.id });
    }
    else {
        await res.json(p);
    }
}

//DELETE // Elimina un elemento según el número de serie
const deleteSerial = async function (req, res) {
    let p = activoModel.deleteByNoSerie(req.params.serial);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al eliminar el serial " + req.params.serial });;
    }
    else {
        await res.json(p);
    }
}

//Métodos GET
exports.getAll = getAll;
exports.getById = getById;
exports.getBySerial = getBySerial;

//Métodos POST
exports.saveElement = saveElement;

//Métodos PUT
exports.replaceById = replaceById;
exports.replaceBySerial = replaceBySerial;

//Métodos PATCH
exports.updateById = updateById;
exports.updateBySerial = updateBySerial;

//Métodos DELETE
exports.deleteId = deleteId;
exports.deleteSerial = deleteSerial;