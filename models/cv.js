const mongoose          = require("mongoose");

let cvSchema = new mongoose.Schema({
    nome: String,
    apelido: String,
    ruaNumero: String,
    codigoPostal: String,
    cidadeInfo: String,
    paisInfo: String,
    tipo: String,
    tel: String,
    email: String,

    candidatura: String,
    descricao: String,

    continuoExp: Boolean,
    cargo: String,
    nomeEmpregador: String,
    cidadeEmpregador: String,
    paisEmpregrador: String,
    actividade: String,

    continuoEdu: Boolean,
    qualificacao: String,
    ensino: String,
    cidadeEdu: String,
    paisEdu: String,
    disciplinas: String

});

module.exports = mongoose.model("CV", cvSchema);