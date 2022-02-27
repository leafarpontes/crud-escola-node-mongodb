// importando os modulos express e mongoose
var express = require('express');
const app = express();

var mongoose = require('mongoose');

require('dotenv').config();

const port = 3000;

// chamando o motor de visualização ejs
app.set('view engine', 'ejs');
app.set('views', __dirname, '/views');

// permitindo que meus dados transitem entre as páginas em formato json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const alunos_router = require('./routers/alunos-router');

app.use('/alunos', alunos_router);

mongoose.connect(`${process.env.MONGO_DB_CONNECTION}`, {useNewUrlParser: true, useUnifiedTopology:true});

/////////////////////////////////////////////

app.get('/', (req, res) => {
    res.send('página inicial');
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});