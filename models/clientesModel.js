const db = require('../config/firebase')
const ref = db.ref('clientes')

async function listar() {
    let registros = await ref.once("value")
    let dados = registros.val()

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome,
        email: dados[id].email
    }));
}

module.exports = {
    listar
}