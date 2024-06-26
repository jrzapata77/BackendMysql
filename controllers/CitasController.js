// importamo el modelo
import Citas from "../models/Citas.js";


// metodos crud


export const agregarCitas = async (req, res) => {
    try {
        await Citas.create(req.body);
        res.json({ msg: "cita creada con exito" })

    } catch (error) {
        res.json({ msg: error.message });

    }

    // funcion o metodo mostrar todas citas
};
export const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas)
    } catch (error) {
        res.json({ msg: error.message })
    }
}
// funcion mostrar una cita
export const getCitas = async (req, res) => {
    try {
        const cita = await Citas.findAll({
            where: { id: req.params.id }
        });
        res.json(cita[0]);

    } catch (error) {
        res.json({ msg: error.message })
    }
}

//funcion modificar
export const modificarCita = async (req, res) => {
    try {
        await Citas.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ msg: "se modifico una cita" })

    } catch (error) {
        res.json({ msg: error.message })
    }
}

// eliminar citas

export const eliminarCita = async (req, res) => {
    try {
        let citas = await Citas.findAll({ where: { id: req.params.id } })
        if (!citas[0]) {
            res.json({ msg: "no se encuentra la cita" })
        }
        await citas[0].destroy();
    } catch (error) {
        res.json({ msg: error.message })
    }
}
