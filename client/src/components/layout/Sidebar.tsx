import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MenuIcon } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '../../components/ui/sheet';
import SidebarLinks from '../common/SidebarLinks';
import { useRecoilState } from 'recoil';
import { authState } from '../../state/auth';

type props = {
    children: ReactNode;
};

const Sidebar = ({ children }: props) => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setUserState] = useRecoilState(authState);

    const handleLogout = () => {
        setUserState({});
        navigate('/auth/login', { replace: true });
        window.location.reload();
    };
    return (
        <div className="flex h-screen w-full">
            <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:border-r lg:bg-neutral-50">
                <div className="flex h-full flex-col justify-between py-6 px-4">
                    <div className="space-y-6">
                        <Link
                            to="/"
                            className="flex items-center gap-2 font-bold"
                        >
                            <span className="text-lg">Huemn</span>
                        </Link>
                        <nav className="space-y-1">
                            <SidebarLinks />
                        </nav>
                    </div>

                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>
            </div>
            <div className="flex-1">
                <header className="sticky top-0 z-10 border-b bg-white px-4 py-3 lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex items-center gap-2 font-bold"
                        >
                            <span className="text-lg">Huemn </span>
                        </Link>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <MenuIcon className="h-6 w-6" />
                                    <span className="sr-only">
                                        Toggle navigation
                                    </span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="flex h-full flex-col justify-between py-6 px-4 w-64"
                            >
                                <nav className="space-y-2 mt-6">
                                    <SidebarLinks />
                                </nav>
                                <div className="space-y-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </header>
                <main className="overflow-y-scroll h-screen w-screen md:w-full p-4 md:p-0 bg-white">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Sidebar;
