import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../src/config/db.js'; // Importa la conexión a la base de datos
import authRoutes from '../src/routes/authRoutes.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// Conectar a MongoDB
connectDB(); // Utiliza la función desde db.ts
// Rutas de autenticación
app.use('/api/auth', authRoutes);
// Ruta base
app.get('/', (req, res) => {
    res.send('¡Hola desde el server!');
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
