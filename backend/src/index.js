require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 3000;


app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173' })); // для dev с Vite
app.use(morgan('dev'));
app.use(express.json());


app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        message: 'Back живой и отвечает!'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        message: 'Бэк под /api работает!'
    });
});


app.listen(PORT, () => {
    console.log(`Backend запущен на http://localhost:${PORT}`);
});