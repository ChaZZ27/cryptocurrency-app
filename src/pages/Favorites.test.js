import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Favorites from './Favorites';
describe('Favorites page component tests', () => {
    test('renders text "You have no favorites currencies yet" when no cryptocurrencies are selected', () => {
        render(<BrowserRouter><Favorites /></BrowserRouter>);
        const noFavoritesText = screen.getByText(/You have no favorites currencies yet/i);
        expect(noFavoritesText).toBeInTheDocument();
    });
})
