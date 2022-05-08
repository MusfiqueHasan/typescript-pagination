import { render, screen } from '@testing-library/react';
import Home from '../components/pages/Home';

it('Render Home component', () => {
    render(<Home />);
    const home = screen.getByTestId("home");
    expect(home).toBeInTheDocument();
});

it('Check Pagination is Rendered', () => {
    render(<Home />);
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();
});