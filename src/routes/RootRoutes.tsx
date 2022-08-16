import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { APP_ROUTES } from '../constants';
import { useAuth  } from '../hooks';
import { LoginPage, RegisterPage, TasksPage } from '../pages';

type ProtectedRouteProps = {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthorized } = useAuth();
  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to={APP_ROUTES.public.auth.login} state={{ from: location }} replace />
  }

  return children;
}

export const RootRoutes = () => {
  return (
    <Routes>
        <Route
        path={APP_ROUTES.private.tasks.root}
        element={
          <ProtectedRoute>
            <TasksPage />
          </ProtectedRoute>
          }
        />
      <Route path={APP_ROUTES.public.auth.login} element={<LoginPage />} />
      <Route path={APP_ROUTES.public.auth.register} element={<RegisterPage />}/>
      <Route path='*' element={<div>Not Found Page</div>}/>
    </Routes>
  );
}