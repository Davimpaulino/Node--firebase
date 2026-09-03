const db = require('../config/firebase')
const ref = db.ref('categorias')

async function listar() {
    let registros = await ref.once("value")
    let dados = registros.val()

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome
    }));
}

async function salvar(categoria) {
    let novoRegistro = ref.push();

    await novoRegistro.set({
        nome: categoria.nome
    })
}

module.exports = {
    listar,
    salvar
}