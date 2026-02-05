import React from 'react';

export const Routes = ({ children }) => <div data-testid="routes">{children}</div>;
export const Route = ({ element }) => <div data-testid="route">{element}</div>;
export const BrowserRouter = ({ children }) => <div data-testid="browser-router">{children}</div>;
export const MemoryRouter = ({ children }) => <div data-testid="memory-router">{children}</div>;
export const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;
export const useNavigate = () => jest.fn();
export const useLocation = () => ({ pathname: '/' });
export const useParams = () => ({});
