const Button = ({ text, onClick, disabled, className }) => (
  <button
    type='submit'
    onClick={onClick}
    disabled={disabled}
    className={`py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ${className}`}
  >
    {text}
  </button>
);

export default Button;
