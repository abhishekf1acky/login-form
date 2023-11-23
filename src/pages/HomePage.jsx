import { logout } from '../store/authSlice';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <button className='bg-blue-500 p-4' onClick={() => dispatch(logout())}>
      Logout
    </button>
  );
};
export default HomePage;
