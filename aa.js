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

    // Envia uma resposta JSON com os dados do pedido
    res.json({ productId, quantity });
});

// Rota para renderizar o formulário preenchido
app.get('/order', (req, res) => {
    const { productId, quantity } = req.query;

    // Renderiza a página com os dados do pedido e um campo para o nome do celular
    res.render('order', { productId, quantity });
});

// Rota para receber a submissão do formulário preenchido
app.post('/submit-order', (req, res) => {
    const { productId, quantity, 'cellphone-name': cellphoneName } = req.body;

    // Lógica para processar o pedido (pode ser armazenar no banco de dados, etc.)
    console.log('Order received:');
    console.log(`Product ID: ${productId}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Cellphone Name: ${cellphoneName}`);

    res.send('Order received successfully!');
});

// Servindo arquivos estáticos (caso necessário)
app.use(express.static('public'));

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
