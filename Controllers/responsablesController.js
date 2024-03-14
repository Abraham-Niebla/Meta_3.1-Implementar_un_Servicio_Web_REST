//Metodos GET PUT/PATCH DELETE POST
//Manejo de funciones y métodos

const responsableModel = require("../Models/responsableModel.js");

//GET // Obtener todos los elementos existentes
const getAll = async function (req, res) {
    let p = responsableModel.findAll();
    await res.json(p);
};

//GET // Obtener un elemento según el id
const getById = async function (req, res) {
    let p = responsableModel.findById(req.params.id);
    
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al obtener el id: " + req.params.id });;
    }
    else {
        await res.json(p);
    }
};

//GET // Obtener un elemento según el número de empleado
const getByNoEmp = async function (req, res) {
    let p = responsableModel.findByNoEmp(req.params.noEmp);

    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al obtener el noEmp: " + req.params.noEmp });;
    }
    else {
        await res.json(p);
    }
};

//POST // Añadir un elemento a la base de datos
const saveElement = async function (req, res) {
    let p = responsableModel.addElement(req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al añadir el objeto" });
    }
    else {
        await res.json(p);
    }
}

//PUT // Reemplazar completamente un elemento según el id
const replaceById = async function (req, res) {
    let p = responsableModel.replaceElementById(req.params.id, req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al actualizar el id: " + req.params.id });
    }
    else {
        await res.json(p);
    }
}

//PUT  // Reemplazar completamente un elemento según el número de empleado
const replaceByNoEmp = async function (req, res) {
    let p = responsableModel.replaceElementByNoEmp(req.params.noEmp, req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al actualizar el noEmp: " + req.params.noEmp });
    }
    else {
        await res.json(p);
    }
}

//PATCH // Reemplazar parcialmente un elemento según el id
const updateById = async function (req, res) {
    let p = responsableModel.updateElementById(req.params.id, req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al actualizar el id: " + req.params.id });
    }
    else {
        await res.json(p);
    }
}

//PATCH // Reemplazar parcialmente un elemento según el número de empleado
const updateByNoEmp = async function (req, res) {
    let p = responsableModel.updateElementByNoEmp(req.params.noEmp, req.body);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al actualizar el noEmp: " + req.params.noEmp });
    }
    else {
        await res.json(p);
    }
}

//DELETE // Elimina un elemento según el id
const deleteId = async function (req, res) {
    let p = responsableModel.deleteById(req.params.id);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al eliminar el id " + req.params.id });
    }
    else {
        await res.json(p);
    }
}

//DELETE // Elimina un elemento según el número de empleado
const deleteNoEmp = async function (req, res) {
    let p = responsableModel.deleteByNoEmp(req.params.noEmp);
    if (p === -1) { //Error a la hora de subir el objeto
        await res.status(500).json({ error: "Error al eliminar el noEmp " + req.params.noEmp });;
    }
    else {
        await res.json(p);
    }
}

//Métodos GET
exports.getAll = getAll;
exports.getById = getById;
exports.getByNoEmp = getByNoEmp;

//Métodos POST
exports.saveElement = saveElement;

//Métodos PUT
exports.replaceById = replaceById;
exports.replaceByNoEmp = replaceByNoEmp;

//Métodos PATCH
exports.updateById = updateById;
exports.updateByNoEmp = updateByNoEmp;

//Métodos DELETE
exports.deleteId = deleteId;
exports.deleteNoEmp = deleteNoEmp;