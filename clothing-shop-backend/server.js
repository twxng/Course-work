const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Сервер запущено на http://localhost:${PORT}`);
});
