import express from 'express';
import { handleChat } from '../controllers/chatController.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/chat', [
    body('message').isString().notEmpty().withMessage('A mensagem não pode estar vazia.')
], handleChat);

export default router;