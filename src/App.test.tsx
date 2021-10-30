import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('react-apexcharts', () => {
    return {
        __esModule: true,
        default: () => {
            return <div />;
        },
    };
});

test('renders app heading', () => {
    render(<App />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('brewdog-explorer');
});

test('renders list of years', () => {
    render(<App />);
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('2007');
    expect(screen.getAllByRole('link')[2]).toHaveTextContent('2008');
    expect(screen.getAllByRole('link')[3]).toHaveTextContent('2009');
    expect(screen.getAllByRole('link')[4]).toHaveTextContent('2010');
    expect(screen.getAllByRole('link')[5]).toHaveTextContent('2011');
    expect(screen.getAllByRole('link')[6]).toHaveTextContent('2012');
    expect(screen.getAllByRole('link')[7]).toHaveTextContent('2013');
    expect(screen.getAllByRole('link')[8]).toHaveTextContent('2014');
    expect(screen.getAllByRole('link')[9]).toHaveTextContent('2015');
    expect(screen.getAllByRole('link')[10]).toHaveTextContent('2016');
});

test('renders search results by year', async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/2007/i));
    await waitFor(() => screen.getByText('Buzz'));
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('Buzz');
});

test('renders beer details', async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/2007/i));
    await waitFor(() => screen.getByText('Buzz'));
    fireEvent.click(screen.getAllByRole('link')[1]);
    await waitFor(() => screen.getByText('Buzz'));
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Buzz');
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('4.5%');
    expect(screen.getAllByRole('heading')[3]).toHaveTextContent('Hop profile');
    expect(screen.getAllByRole('heading')[4]).toHaveTextContent('Malt profile');
});
