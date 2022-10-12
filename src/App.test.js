import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
