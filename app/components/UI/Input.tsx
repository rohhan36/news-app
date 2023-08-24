import { MutableRefObject } from "react";

interface InputPorps {
  type: string;
  isError?: boolean;
  placeholder?: string;
  value?: string;
  ref?: MutableRefObject<HTMLInputElement> | undefined;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputPorps> = ({ type, isError, placeholder, value, ref }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      ref={ref}
      className={`w-4/5 input rounded-lg h-10 outline-none p-4
      ${isError && "outline outline-rose-400"}
    `}
    />
  );
};
export default Input;
