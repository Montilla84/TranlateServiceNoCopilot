import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

// Crear un tema MUI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Color primario
    },
    secondary: {
      main: '#dc004e', // Color secundario
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Proporciona un conjunto de estilos base */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
