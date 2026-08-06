const model = require('../models/categoriaModel')

exports.index = async(req, res) => {
    let categorias = await model.listar();

    res.render("categorias/index", {
        categorias,
        categoriaEditar: null
    });
}