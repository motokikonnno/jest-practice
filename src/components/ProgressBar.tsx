type ProgressBarProps = {
  progress: number;
  color: string;
};

export const ProgressBar = ({ progress, color }: ProgressBarProps) => {
  return (
    <div className="relative">
      <div className="overflow-hidden h-2 text-xs flex rounded bg-right-black">
        <div
          style={{ width: `${progress}%` }}
          className={`${color} shadow-none flex flex-col text-center whitespace-nowrap justify-center`}
        ></div>
      </div>
    </div>
  );
};
