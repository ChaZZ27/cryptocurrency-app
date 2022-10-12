import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
describe('Navigation component tests', () => {
    test('renders navigation', () => {
        render(<BrowserRouter><Navigation /></BrowserRouter>);
        const navElement = screen.getByTestId('nav');
        expect(navElement).toBeInTheDocument();
    });
    test('renders navigation link home', () => {
        render(<BrowserRouter><Navigation /></BrowserRouter>);
        const linkHome = screen.getByText(/Home/i);
        expect(linkHome).toBeInTheDocument();
    });
    test('renders navigation link favorite', () => {
        render(<BrowserRouter><Navigation /></BrowserRouter>);
        const linkFavorite = screen.getByText(/Your favorite/i);
        expect(linkFavorite).toBeInTheDocument();
    });
})
