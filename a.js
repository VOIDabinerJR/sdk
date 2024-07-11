
const express = require('express');

const path = require('path');






const JWT_SECRET='void secret';

const app = express();
app.use(express.json());

app.use(express.json());
////////////////////



// Rota para servir um arquivo HTML estático
app.get('/a', (req, res) => {
    res.sendFile(path.join(__dirname, 'aa.html'));
});
app.use(express.static(path.join(__dirname), {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
    }
}));



const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
