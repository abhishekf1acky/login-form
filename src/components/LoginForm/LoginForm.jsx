import { useLoginForm } from '../../hooks/useLoginForm';
import { Input, Button, Checkbox, Loader } from '../index';

const LoginForm = () => {
  const {
    error,
    isVisible,
    formData,
    handleFormData,
    toggleIsVisible,
    handleSubmit,
    isLoading,
  } = useLoginForm();

  if (isLoading) return <Loader />;
  return (
    <>
      {error && <div className='error'>{error}</div>}

      <form className='space-y-6 flex-1 w-full' onSubmit={handleSubmit}>
        <h1 className='flex-1 text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
          LOGIN
        </h1>
        <Input
          name='username'
          label='Username'
          type='text'
          value={formData.username}
          onChange={handleFormData}
        />

        <Input
          name='password'
          label='Password'
          type={isVisible ? 'text' : 'password'}
          value={formData.password}
          onChange={handleFormData}
          toggleIsVisible={toggleIsVisible}
          isVisible={isVisible}
        />

        <Checkbox
          name='rememberMe'
          checked={formData.rememberMe}
          onChange={() =>
            handleFormData({
              target: { name: 'rememberMe', value: !formData.rememberMe },
            })
          }
          label='Remember me'
        />

        <Button
          text='Sign in'
          className='w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700'
        />
      </form>
    </>
  );
};
export default LoginForm;
