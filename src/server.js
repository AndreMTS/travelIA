import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { handleChat } from './controllers/chatController.js';
import { body } from 'express-validator';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'src', 'views', 'index.html'));
});

// Rota do chat
app.post('/chat', [
    body('message').isString().notEmpty().withMessage('A mensagem não pode estar vazia.')
], handleChat);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});