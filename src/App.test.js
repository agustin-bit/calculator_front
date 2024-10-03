import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // get button and click it
  const submitButton = screen.getByText(/Convertir/i);
  submitButton.click();
  // wait 10 seconds
  setTimeout(() => {
    // get response and check it
    const response = screen.getByText(/Resultado: 2.54/i);
    expect(response).toBeInTheDocument();
  }, 10000);


});
