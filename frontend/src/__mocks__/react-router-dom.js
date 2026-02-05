import React from 'react';

const mockNavigate = jest.fn();

export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const MemoryRouter = ({ children }) => <div>{children}</div>;
export const Routes = ({ children }) => <div>{children}</div>;
export const Route = ({ element }) => element || null;
export const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;
export const NavLink = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;
export const useNavigate = () => mockNavigate;
export const useLocation = () => ({ pathname: '/', search: '', hash: '', state: null });
export const useParams = () => ({});
