import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { login } from '../store/authSlice';
import useFetchData from '../hooks/useFetchData';
import { Input, Button } from './index';

// kminchelle
// 0lelplR

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { data, error, isLoading, fetchData } = useFetchData();
  console.log(data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
    if (rememberedUser) {
      setUsername(rememberedUser.username);
      setPassword(rememberedUser.password);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      console.error('Username and password are required');
      return;
    }

    if (rememberMe) {
      localStorage.setItem(
        'rememberedUser',
        JSON.stringify({ username, password })
      );
    } else {
      localStorage.removeItem('rememberedUser');
    }

    try {
      const response = await fetchData(
        'https://dummyjson.com/auth/login',
        'POST',
        { 'Content-Type': 'application/json' },
        { username, password, expiresInMins: 4000 }
      );

      if (response && response.error) {
        console.error('Error logging in:', response.error);
        return;
      }

      dispatch(login({ username: username, password: password }));
      navigate('/');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p className='mt-4 text-red-500'>{error.message}</p>;
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <Input
            label='Username'
            type='text'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <Input
            label='Password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
              />
              <label htmlFor='remember-me' className='ml-2 text-gray-600'>
                Remember me
              </label>
            </div>
          </div>

          <Button
            text='Sign in'
            onClick={handleSubmit}
            disabled={isLoading}
            className='w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700'
          />

          {error && <p className='mt-4 text-red-500'>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
