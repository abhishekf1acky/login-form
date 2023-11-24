import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Footer, Header } from '../components';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) navigate('/login');
  }, [navigate, isLoggedIn]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default ProtectedRoute;
