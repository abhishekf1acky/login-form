import { LoginForm } from '../components';

const LoginPage = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 flex flex-col  items-center justify-center'>
        <LoginForm />
      </div>
    </section>
  );
};
export default LoginPage;
