const model = require('../models/clientesModel')

exports.index = async(req, res) => {
    let clientes = await model.listar();

    res.render("clientes/index", {
        clientes,
        clienteEditar: null
    });
}