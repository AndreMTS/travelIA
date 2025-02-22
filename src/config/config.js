import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    corsOrigin: process.env.CORS_ORIGIN || 'http://seu-dominio.com',
}; 