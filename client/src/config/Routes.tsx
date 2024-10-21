import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from '../components/ui/toaster';
import AuthGuard from '../guard/AuthGuard';

const Layout = lazy(() => import('../components/layout/Layout'));
const Home = lazy(() => import('../pages/dashboard/Home'));
const Editor = lazy(() => import('../pages/dashboard/Editor'));

const AdminDashboard = lazy(() => import('../pages/admin/Home'));
const AddUi = lazy(() => import('../pages/admin/AddUi'));

const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));

const AppRoutes = () => {
    return (
        <AuthGuard>
            <Suspense fallback={<div>Loading...</div>}>
                <Toaster />
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/dashboard/editor" element={<Editor />} />
                    </Route>
                    <Route path="/admin" element={<Layout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="/admin/add-ui" element={<AddUi />} />
                    </Route>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Routes>
            </Suspense>
        </AuthGuard>
    );
};

export default AppRoutes;
