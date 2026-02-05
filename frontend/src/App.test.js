import { render } from '@testing-library/react';
import App from './App';

// Use manual mock for react-router-dom
jest.mock('react-router-dom');

test('renders app with router', () => {
  render(<App />);
  // Check that the app renders without crashing
  expect(document.body).toBeInTheDocument();
});
