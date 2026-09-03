const db = require('../config/firebase')
const ref = db.ref('fornecedores')

async function listar() {
    let registros = await ref.once("value")
    let dados = registros.val()

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome,
        CNPJ: dados[id].CNPJ
    }));
}

async function salvar(fornecedor) {
    let novoRegistro = ref.push();

    await novoRegistro.set({
        nome: fornecedor.nome,
        CNPJ: fornecedor.CNPJ
    })
}

module.exports = {
    listar,
    salvar
}