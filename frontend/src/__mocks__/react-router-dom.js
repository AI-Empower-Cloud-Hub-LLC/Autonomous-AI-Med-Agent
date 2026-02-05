import React from 'react';

const mockNavigate = jest.fn();

export const Routes = ({ children }) => <div data-testid="routes">{children}</div>;
export const Route = ({ element }) => <div data-testid="route">{element}</div>;
export const BrowserRouter = ({ children }) => <div data-testid="browser-router">{children}</div>;
export const MemoryRouter = ({ children }) => <div data-testid="memory-router">{children}</div>;
export const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;
export const useNavigate = () => mockNavigate;
export const useLocation = () => ({ pathname: '/' });
export const useParams = () => ({});
