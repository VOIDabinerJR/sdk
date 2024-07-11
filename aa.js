const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurando o body-parser para tratar os dados do formulário
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurando o EJS como engine de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota para receber os dados do pedido
app.post('/order', (req, res) => {
    const { productId, quantity } = req.body;

    // Renderizando a página com os dados do pedido e um campo para o nome do celular
    res.render('order', { productId, quantity });
});

// Servindo arquivos estáticos (caso necessário)
app.use(express.static('public'));

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
