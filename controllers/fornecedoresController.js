const model = require('../models/fornecedoresModel')

exports.index = async(req, res) => {
    let fornecedores = await model.listar();

    res.render("fornecedores/index", {
        fornecedores,
        fornecedorEditar: null
    });
}
exports.salvar = async(req, res) => {
    await model.salvar({
        nome: req.body.nome.toUpperCase(),
        CNPJ: req.body.CNPJ
    });

    res.redirect("/fornecedores")
}