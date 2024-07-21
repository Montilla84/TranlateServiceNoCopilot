const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conectar a la base de datos MongoDB sin las opciones deprecated
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/miapp')
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

app.get('/', (req, res) => {
  res.send('¡Hola desde el server!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
