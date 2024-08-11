// __tests__/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from '../Header'; // Actualiza la ruta al componente Header
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'; // Importa solo el paquete para extender expect

test('renders the Header component with navigation links', () => {
  const toggleDrawerMock = jest.fn(); // Crea un mock para la función toggleDrawer

  render(
    <Router>
      <Header toggleDrawer={toggleDrawerMock} />
    </Router>
  );
  
  // Verifica que el texto "My App" esté presente
  expect(screen.getByText(/My App/i)).toBeInTheDocument();
  
  // Verifica que los botones de navegación estén presentes
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  expect(screen.getByText(/Postal Zip/i)).toBeInTheDocument();
});
