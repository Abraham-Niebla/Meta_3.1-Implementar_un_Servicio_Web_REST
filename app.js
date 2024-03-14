//Manejo de Métodos y rutas para GET PUT PATCH DELETE POST para activos, ubicaciones, y responsables

const cors = require("cors");
const express = require("express");

const port = 4000; // Puerto de escucha

// Importando funciones para aplicar los métodos HTTP
const activos = require("./Controllers/activosController");
const responsables = require('./Controllers/responsablesController');
const ubicaciones = require('./Controllers/ubicacionesController');

const app = express();
app.use(cors());
app.use(express.json());



/***** Métodos HTTP para activos *****/
app.get("/activos", activos.getAll);
app.get("/activos/id/:id", activos.getById);
app.get("/activos/serial/:serial", activos.getBySerial);

app.post("/activos", activos.saveElement);

app.put("/activos/id/:id", activos.replaceById);
app.put("/activos/serial/:serial", activos.replaceBySerial);

app.patch("/activos/id/:id", activos.updateById);
app.patch("/activos/serial/:serial", activos.updateBySerial);

app.delete("/activos/id/:id", activos.deleteId);
app.delete("/activos/serial/:serial", activos.deleteSerial);



/***** Métodos HTTP para responsables *****/
app.get("/responsables", responsables.getAll);
app.get("/responsables/id/:id", responsables.getById);
app.get("/responsables/emp/:noEmp", responsables.getByNoEmp);

app.post("/responsables", responsables.saveElement);

app.put("/responsables/id/:id", responsables.replaceById);
app.put("/responsables/emp/:noEmp", responsables.replaceByNoEmp);

app.patch("/responsables/id/:id", responsables.updateById);
app.patch("/responsables/emp/:noEmp", responsables.updateByNoEmp);

app.delete("/responsables/id/:id", responsables.deleteId);
app.delete("/responsables/emp/:noEmp", responsables.deleteNoEmp);



/***** Métodos HTTP para ubicaciones *****/
app.get("/ubicaciones", ubicaciones.getAll);
app.get("/ubicaciones/id/:id", ubicaciones.getById);

app.post("/ubicaciones", ubicaciones.saveElement);

app.put("/ubicaciones/id/:id", ubicaciones.replaceById);

app.patch("/ubicaciones/id/:id", ubicaciones.updateById);

app.delete("/ubicaciones/id/:id", ubicaciones.deleteId);


/***** Poner al servidor en escucha *****/
app.listen(port, () => {
    console.log("Server escuchando en puerto ", port);
    console.log("http://localost:", port);
})