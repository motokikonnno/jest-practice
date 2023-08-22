export const Calendar = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const startingDay = 0;
  return (
    <>
      <div className="flex justify-between items-center text-white mb-7">
        <h3 className="font-normal text-xl">Calendar</h3>
        <div className="flex">
          <p className="mr-1">for</p>
          <p className="relative before:content-none before:absolute before:top-2 before:border before:border-white before:border-solid before:border-t-4">
            September 2019
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          {days.map((day, index) => (
            <div
              key={index}
              className="bg-back-black text-calendar-gray p-2 mx-1 text-sm flex items-center justify-center border float-left"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array(startingDay)
            .fill(null)
            .map((_, index) => (
              <div
                key={`empty-${index}`}
                className="w-full text-sm border"
              ></div>
            ))}
          {dates.map((date: number) => {
            let bgColor = "";
            if (date !== 2 || 16 || 17 || 20) {
              bgColor = "bg-calendar-black";
            }
            if (date === 2) {
              bgColor = "bg-status-yellow";
            }
            if (date === 16 || date === 17) {
              bgColor = "bg-emerald-green";
            }
            if (date === 20) {
              bgColor = "bg-status-purple";
            }

            return (
              <div
                key={date}
                className={`cursor-pointer py-1 text-white rounded text-sm flex items-center justify-center border ${bgColor}`}
              >
                {date}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
