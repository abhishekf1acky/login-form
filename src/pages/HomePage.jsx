import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button className='bg-blue-500 p-4' onClick={handleLogout}>
      Logout
    </button>
  );
};
export default HomePage;
