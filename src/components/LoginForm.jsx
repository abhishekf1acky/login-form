import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from './index';
import { login } from '../store/authSlice';
import { useFetchData, useLocalStorage } from '../hooks';
import {
  setUsername,
  setPassword,
  setRememberMe,
  resetLoginForm,
} from '../store/loginFormSlice';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { username, password, rememberMe } = useSelector(
    (state) => state.loginForm
  );
  const { data, error, isLoading, fetchData } = useFetchData();
  const [rememberedUser, saveRememberedUser] = useLocalStorage(
    'rememberedUser',
    null
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (rememberedUser) {
      dispatch(setUsername(rememberedUser.username));
      dispatch(setPassword(rememberedUser.password));
    }
  }, [dispatch, rememberedUser]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      console.error('Username and password are required');
      return;
    }

    if (rememberMe) {
      saveRememberedUser({ username, password });
    } else {
      saveRememberedUser(null);
    }

    if (data) {
      dispatch(resetLoginForm());
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

  if (isLoading) return <div>Loading...</div>;

  if (error) return <p className='mt-4 text-red-500'>{error.message}</p>;

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <Input
        label='Username'
        type='text'
        value={username}
        onChange={(event) => dispatch(setUsername(event.target.value))}
      />

      <Input
        label='Password'
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(event) => dispatch(setPassword(event.target.value))}
        togglePasswordVisibility={togglePasswordVisibility}
        showPassword={showPassword}
      />

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='remember-me'
            type='checkbox'
            checked={rememberMe}
            onChange={(event) => dispatch(setRememberMe(event.target.checked))}
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
  );
};

export default Login;
