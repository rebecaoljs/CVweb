const express = require("express"),
      app = express(),
      CV = require("./models/cv"),
      mongoose = require("mongoose"),
      methodOverride = require("method-override"),
      request = require("request"),
      bodyParser = require("body-parser");

var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    server_ip_address = process.env.PORT || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongo_url = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL || 'mongodb://0.0.0.0:27017/',
    db_name = 'cv';

mongoose.connect(mongo_url + db_name, { useNewUrlParser: true, useFindAndModify: false });

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//============================================================

// INDEX ROUTE - FIND ALL CVS IN DB
app.get("/", function (req, res) {
    // res.render("home");
    CV.find({}, function (err, cv) {
        if (err) {
            console.log("ERROR!");
        } else {
            res.render("main", { cv: cv });
            console.log("TESTING");
        }
    });
});
    
//NEW ROUTE
app.get("/new", function (req, res) {
    res.render("new");
});

//CREATE ROUTE
app.post("/", function (req, res) {
    console.log("=============================");
    let nome = req.body.nome;
    let apelido = req.body.apelido;
    let ruaNumero = req.body.ruaNumero;
    let codigoPostal = req.body.codigoPostal;
    let cidadeInfo = req.body.cidadeInfo;
    let paisInfo = req.body.paisInfo;
    let tipo = req.body.tipo;
    let tel = req.body.tel;
    let email = req.body.email;

    let candidatura = req.body.candidatura;
    let descricao = req.body.descricao;

    let continuoExp = req.body.continuo;
    let cargo = req.body.cargo;
    let nomeEmpregador = req.body.nomeEmpregador;
    let cidadeEmpregador = req.body.cidadeEmpregador;
    let paisEmpregrador = req.body.paisEmpregrador;
    let actividade = req.body.actividade;

    let continuoEdu = req.body.continuo;
    let qualificacao = req.body.qualificacao;
    let ensino = req.body.ensino;
    let cidadeEdu = req.body.cidadeEdu;
    let paisEdu = req.body.paisEdu;
    let disciplinas = req.body.disciplinas;

    let newCV = {
        nome: nome, apelido: apelido, ruaNumero: ruaNumero,
        codigoPostal: codigoPostal, cidadeInfo: cidadeInfo, paisInfo: paisInfo,
        tipo: tipo, tel: tel, email: email, candidatura: candidatura,
        descricao: descricao, continuoExp: continuoExp, cargo: cargo,
        nomeEmpregador: nomeEmpregador, cidadeEmpregador: cidadeEmpregador,
        paisEmpregrador: paisEmpregrador, actividade: actividade,
        continuoEdu: continuoEdu, qualificacao: qualificacao, ensino: ensino,
        cidadeEdu: cidadeEdu, paisEdu: paisEdu, disciplinas: disciplinas
    }

    CV.create(newCV, function (err, newlyCV) {
        if (err) {
            console.log(err);
        } else {
            // console.log(newlyCV);
            res.redirect("/");
        }
    });
});

//SHOW ROUTE
app.get("/:id", function(req, res){
    CV.findById(req.params.id, function(err, foundCV){
        if(err){
            console.log(err);
        } else {
            res.render("show", {foundCV: foundCV});
        }
    });
});

//EDIT ROUTE

//UPDATE ROUTE

//DESTROY ROUTE


app.listen(server_port, server_ip_address, function () {
    console.log("Listening to requests on http://" + server_ip_address + ":" + server_port);
});
