import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('react-router-dom');

test('renders app with router', () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Check that the app component rendered
  expect(container.firstChild).toBeInTheDocument();
});
