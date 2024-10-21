import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = lazy(() => import('../../components/layout/Header'));
const Layout = () => {
    return (
        <Sidebar>
            <header className="hidden sm:block p-4 bg-white">
                <Header />
            </header>
            <main className="md:p-4 md:px-8 bg-white">
                <Outlet />
            </main>
        </Sidebar>
    );
};

export default Layout;
