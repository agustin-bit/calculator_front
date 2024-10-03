import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  // get button and click it
  const submitButton = screen.getByText(/Convertir/i);
  submitButton.click();
  const response = await screen.findByText(/Resultado: 2.54/i);
  expect(response).toBeInTheDocument();
});
