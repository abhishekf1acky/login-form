import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const Input = ({
  label,
  type,
  value,
  onChange,
  isVisible,
  togglePasswordVisibility,
}) => (
  <div className='w-full'>
    <label htmlFor={label} className='block text-gray-700'>
      {label}
    </label>
    <div className='relative'>
      <input
        id={label}
        name={label}
        type={type}
        required
        className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500'
        value={value}
        onChange={onChange}
      />
      {(type === 'password' || isVisible === true) && (
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
          <button type='button' onClick={togglePasswordVisibility}>
            {isVisible ? <HiOutlineEyeOff /> : <HiOutlineEye />}
          </button>
        </div>
      )}
    </div>
  </div>
);

export default Input;
