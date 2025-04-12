import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AuthRoute = ({ children, requiresAuth = false, redirectTo = '/' }) => {
  const { auth, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (requiresAuth) {
    return auth ? children : <Navigate to={redirectTo} />;
  } else {
    return auth ? <Navigate to={redirectTo} /> : children;
  }
};

export default AuthRoute;