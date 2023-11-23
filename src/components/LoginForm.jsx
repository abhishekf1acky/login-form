import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Input, Button } from './index';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { setUsername, setPassword, setRememberMe } from '../store/formSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const username = useSelector((state) => state.form.username);
  const password = useSelector((state) => state.form.password);
  const rememberMe = useSelector((state) => state.form.rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password,
      });

      setData(response.data);
      dispatch(login(username));
      navigate('/');
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleRememberMeChange = (e) => {
    dispatch(setRememberMe(e.target.checked));
  };

  const togglePasswordVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <Input
        label='Username'
        type='text'
        value={username}
        onChange={handleUsernameChange}
      />

      <Input
        label='Password'
        type={isVisible ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        togglePasswordVisibility={togglePasswordVisibility}
        isVisible={isVisible}
      />

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='remember-me'
            type='checkbox'
            checked={rememberMe}
            onChange={handleRememberMeChange}
            className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
          />
          <label htmlFor='remember-me' className='ml-2 text-gray-600'>
            Remember me
          </label>
        </div>
      </div>

      <Button
        text='Sign in'
        className='w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700'
      />
    </form>
  );
};
export default LoginForm;
