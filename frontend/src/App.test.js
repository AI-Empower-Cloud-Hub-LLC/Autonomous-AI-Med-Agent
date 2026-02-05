import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders app with router', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Check that the app renders without crashing
  expect(document.body).toBeInTheDocument();
});
