import Image from "next/image";

export const Card = () => {
  return (
    <div className="bg-black-blue p-7 rounded-tl-md rounded-bl-md">
      <div className="flex justify-between items-center text-white">
        <h3 className="font-normal text-xl">My Card</h3>
        <div className="flex">
          <p className="mr-1">for</p>
          <p className="relative before:content-none before:absolute before:top-2 before:border before:border-white before:border-solid before:border-t-4">
            September 2019
          </p>
        </div>
      </div>
      <div className="relative w-full h-20 mt-7">
        <Image src={"/Images/Card.png"} fill alt="" />
      </div>
    </div>
  );
};
