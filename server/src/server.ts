import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';  // Importa la conexión a la base de datos
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();  // Utiliza la función desde db.ts

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Ruta base
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola desde el server!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
