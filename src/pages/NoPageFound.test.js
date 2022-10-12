import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NoPageFound from './NoPageFound';
describe('NoPageFound page component tests', () => {
    test('renders headline "Oops! Theres no such page :("', () => {
        render(<BrowserRouter><NoPageFound /></BrowserRouter>);
        const headline = screen.getByText(/Oops! Theres no such page/i);
        expect(headline).toBeInTheDocument();
    });

    test('renders button "Return to main page"', () => {
        render(<BrowserRouter><NoPageFound /></BrowserRouter>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    
})
