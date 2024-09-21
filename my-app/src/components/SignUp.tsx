import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import instance from '../axiosConfig';

interface SignUpProps {
  showNotification: (message: string, severity: 'success' | 'error' | 'warning' | 'info') => void;
}

const SignUp: React.FC<SignUpProps> = ({ showNotification }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await instance.post('/api/auth/register', { username, email, password });
      showNotification('Registro exitoso', 'success');
      navigate('/');  // Redirige al home después del registro
    } catch (error) {
      showNotification('Error en el registro', 'error');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">Registrarse</Typography>
      <form onSubmit={handleSignUp}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nombre de usuario"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo Electrónico"
          name="email"
          autoComplete="email"
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
          Registrarse
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;