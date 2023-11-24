import { Link } from 'react-router-dom';
import { logout } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import Button from './Button';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <nav className='w-[90vw] max-w-7xl mx-auto h-16 flex justify-between items-center'>
        <ul className='h-full w-full flex items-center gap-4 capitalize'>
          <Link
            className='duration-300 hover:text-blue-500 font-semibold'
            to='/'
          >
            Home
          </Link>
          <Link
            className='duration-300 hover:text-blue-500 font-semibold'
            to='/about'
          >
            About
          </Link>
        </ul>
        <Button
          text='Logout'
          onClick={handleLogout}
          className='w-28 bg-blue-700 px-4 py-2 text-white rounded-lg'
        />
      </nav>
    </header>
  );
};
export default Header;
