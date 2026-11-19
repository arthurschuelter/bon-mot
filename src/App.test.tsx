import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the French practice homepage', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /make french second nature/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /choose your next move/i })).toBeInTheDocument();
});

test('lists the available minigames with their categories', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /open the passé composé/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /open imparfait or not/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /open make it agree/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /all games/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /past tenses/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /verb forms/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /grammar/i })).toBeInTheDocument();
});

test('shows New only during the first week after a game was created', () => {
  const createdAt = new Date('2026-11-02T10:35:40-03:00').getTime();
  const now = jest.spyOn(Date, 'now');
  now.mockReturnValue(createdAt - 1);
  const { rerender } = render(<App />);
  expect(screen.queryByText('New')).not.toBeInTheDocument();

  now.mockReturnValue(createdAt + 7 * 24 * 60 * 60 * 1000 - 1);
  rerender(<App />);
  expect(screen.getAllByText('New')).toHaveLength(6);
  expect(screen.getByRole('link', { name: /open the passé composé, new/i })).toBeInTheDocument();

  now.mockReturnValue(createdAt + 7 * 24 * 60 * 60 * 1000);
  rerender(<App />);
  expect(screen.queryByText('New')).not.toBeInTheDocument();
  now.mockRestore();
});
