import { useDispatch } from 'react-redux';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { login } from '../store/authSlice';
import { LoginForm } from '../components';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [rememberMeData, setRememberMeData] = useLocalStorage(
    'rememberMeData',
    {}
  );

  const handleLogin = (data) => {
    if (data.rememberMe) {
      setRememberMeData(data);
    } else {
      setRememberMeData({});
    }
    dispatch(login(data));
  };

  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 flex flex-col  items-center justify-center'>
        <LoginForm onLogin={handleLogin} rememberMeData={rememberMeData} />
      </div>
    </section>
  );
};
export default LoginPage;
