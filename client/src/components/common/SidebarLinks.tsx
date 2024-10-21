import { Clipboard, HomeIcon, Plus } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const SidebarLinks = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const { isAdmin } = useAuth();

    const SideBarRoutes = useMemo(
        () => [
            {
                icon: <HomeIcon />,
                label: 'Home',
                href: '/dashboard',
                active: pathname === '/dashboard',
            },
            {
                icon: <Clipboard />,
                label: 'Editor',
                href: '/dashboard/editor',
                active: pathname === '/dashboard/editor',
            },
        ],

        [pathname]
    );
    const AdminSideBarRoutes = useMemo(
        () => [
            {
                icon: <HomeIcon />,
                label: 'Home',
                href: '/admin',
                active: pathname === '/admin',
            },
            {
                icon: <Plus />,
                label: 'Add UI',
                href: '/admin/add-ui',
                active: pathname === '/admin/add-ui',
            },
        ],

        [pathname]
    );

    const routes = isAdmin ? AdminSideBarRoutes : SideBarRoutes;

    return (
        <>
            {routes &&
                routes.map((item) => (
                    <Link
                        to={item.href}
                        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 ${
                            item.active && `bg-neutral-200`
                        }`}
                        key={item.label}
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
        </>
    );
};

export default SidebarLinks;
