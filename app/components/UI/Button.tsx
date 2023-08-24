import { type } from "os";

interface ButtonProps {
  label: string;
  isPrimary?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick: (e: React.FormEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ label, isPrimary, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` px-20 py-2 rounded-full font-semibold shadow-md
        ${isPrimary && "bg-fuchsia-200  text-fuchsia-950"}
      `}>
      {label}
    </button>
  );
};
export default Button;
