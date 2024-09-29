import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { AuthProvider } from './context/authContext'; // Importar AuthProvider
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
     <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Proporciona un conjunto de estilos base */}
      <AuthProvider> {/* Envolver la aplicación con AuthProvider */}
          <App />
      </AuthProvider>
    </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
