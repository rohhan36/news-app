interface EmptyStateProps {
  title: string;
  subtitle?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center opacity-75 text-fuchsia-950">
      <div className="font-bold text-2xl ">{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};
export default EmptyState;
