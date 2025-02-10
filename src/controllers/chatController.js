import { validationResult } from 'express-validator';
import Chat from '../services/Chat.js';

export const handleChat = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const userMessage = req.body.message;

    try {
        const reply = await Chat.generateResponse(userMessage);
        res.json({ reply });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erro ao processar a solicitação');
    }
};