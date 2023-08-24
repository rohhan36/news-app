interface InputPorps {
  type: string;
  isError?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputPorps> = ({ type, isError, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-4/5 input rounded-lg h-10 outline-none p-4
      ${isError && "outline outline-rose-400"}
    `}
    />
  );
};
export default Input;
