import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate('/login');
    else navigate('/');
  }, [navigate, isLoggedIn]);

  return children;
};

export default ProtectedLayout;
