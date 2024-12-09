const express = require('express');
const cors = require('cors'); // Para permitir requisições do frontend

const app = express();
app.use(cors()); // Habilitar CORS

// Rota simples
app.get('/api/data', (req, res) => {
    res.json({ message: 'Olá, Frontend!', status: 'sucesso' });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});