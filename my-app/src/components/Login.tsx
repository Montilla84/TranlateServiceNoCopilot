import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface LoginProps {
  showNotification: (message: string, severity: 'success' | 'error' | 'warning' | 'info') => void;
}

const Login: React.FC<LoginProps> = ({ showNotification }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', { email, password });
      showNotification('Login exitoso', 'success');
      navigate('/');  // Redirige al home después del login
    } catch (error) {
      showNotification('Error en el login', 'error');
    }
  };


  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">Iniciar Sesión</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo Electrónico"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Iniciar Sesión
        </Button>
      </form>
    </Container>
  );
};

export default Login;
