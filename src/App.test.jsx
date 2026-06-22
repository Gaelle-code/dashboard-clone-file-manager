import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders the dashboard images page', async () => {
  render(<App />);

  expect(await screen.findByRole('heading', { name: /^images$/i, level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add image/i })).toBeInTheDocument();
  expect(screen.getByText(/recently viewed/i)).toBeInTheDocument();
});
