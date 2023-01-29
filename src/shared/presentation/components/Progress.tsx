type Props = {
  percent: number;
};

export default function Progress(props: Props) {
  return (
    <section className="flex justify-between items-center w-full space-x-2">
      <div className="text-xs text-gray-400 px-1">{`${props.percent}%`}</div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 flex items-center">
        <div
          className="bg-primary/50 h-1.5 rounded-full transition-all duration-200"
          style={{ width: `${props.percent}%` }}
        ></div>
      </div>
    </section>
  );
}
