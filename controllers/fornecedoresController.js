const model = require('../models/fornecedoresModel')

exports.index = async(req, res) => {
    let fornecedores = await model.listar();

    res.render("fornecedores/index", {
        fornecedores,
        fornecedorEditar: null
    });
}