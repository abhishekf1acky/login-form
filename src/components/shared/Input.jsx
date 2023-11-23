const Input = ({ label, type, value, onChange }) => (
  <div className='w-full'>
    <label htmlFor={label} className='block text-gray-700'>
      {label}
    </label>
    <input
      id={label}
      name={label}
      type={type}
      required
      className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500'
      value={value}
      onChange={onChange}
    />
  </div>
);
export default Input;
