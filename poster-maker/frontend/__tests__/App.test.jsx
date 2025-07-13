import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the main poster heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent(/create stunning flyers/i);
});
