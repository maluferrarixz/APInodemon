//importar o pacote do express

const express = require('express');

//instanciar o express na variavel app
const app = express();

//definir  porta do serevidor
const PORT = 3000;

//testar servidor
app.listen(PORT, () => console.log(`Runiing at port ${PORT}`));