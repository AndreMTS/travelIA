import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

class Chat {
    constructor() {
        if (!process.env.GOOGLE_API_KEY) {
            throw new Error('GOOGLE_API_KEY não está configurada');
        }
        this.genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    }

    async generateResponse(message) {
        try {
            const result = await this.model.generateContent(message);
            return result.response.text();
        } catch (error) {
            // Não exponha detalhes sensíveis no erro
            console.error('API Error:', error);
            throw new Error('Erro ao processar a solicitação');
        }
    }
}

export default new Chat(); 