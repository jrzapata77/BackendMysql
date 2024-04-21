import express from "express";
import cors from "cors";
// importamos la  configuracion de laBD
import BD from "../config/db.js";
// IMPORTAMOS EL ARCHIVO DE LA RUTA
import Citas from '../routes/Routes_Citas.js'
const app = express();
app.use(cors());
app.use(express.json());
app.use('/citas', Citas);

//autenticacion BD
try {
    await BD.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}





app.get('/', (req, res) => {
    res.send("hola mundo")
})
app.listen(5000, () => {
    console.log('nuestro servidor se encuentra conectado')
});



