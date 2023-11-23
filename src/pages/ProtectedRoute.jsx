import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) navigate('/login');
  }, [navigate, isLoggedIn]);

  return children;
};
export default ProtectedRoute;
