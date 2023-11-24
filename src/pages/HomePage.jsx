import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <button
        className='bg-blue-700 px-4 py-2 text-white rounded-lg'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};
export default HomePage;
