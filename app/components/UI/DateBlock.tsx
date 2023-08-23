interface DatePropps {
  date: string;
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DateBlock: React.FC<DatePropps> = ({ date }) => {
  const day: number = new Date(date).getDate();
  const month: number = new Date(date).getMonth();
  return (
    <div className="absolute top-2 left-8 z-8 bg-white h-16 w-16 rounded-lg flex flex-col items-center  text-fuchsia-950 shadow-md">
      <div className="font-bold text-3xl">{day}</div>
      <div className="font-semibold">{monthNames[month]}</div>
    </div>
  );
};
export default DateBlock;
