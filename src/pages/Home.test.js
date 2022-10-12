import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
describe('Home page component tests', () => {
    test('renders headline "Welcome!"', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        const headline = screen.getByText(/Welcome!/i);
        expect(headline).toBeInTheDocument();
    });
    test('"Sorry" message is hidden after fetching data from API', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        const sorryMessage = screen.queryByText(/Sorry! Something went wrong!/i);
        expect(sorryMessage).toBeNull()
    });
    test('renders coin element after fetching data from API', async () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        await screen.findAllByTestId('coinInput');
    });
    
})
