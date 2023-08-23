import { Calendar } from "@/components/Calendar";
import { Card } from "@/components/Card";
import { PopularTopics } from "@/components/PopularTopics";
import { ProgressBar } from "@/components/ProgressBar";
import {
  percentageBarNumbers,
  topCitiesData,
  topCitiesPercentage,
} from "@/mock/top-cities";
import { timesData } from "@/mock/total-points-time-data";
import { activeUsers } from "@/mock/users";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between w-full gap-11">
      <div className="pl-11 pt-7 mb-9 w-full">
        <div className="flex justify-between w-full">
          <h1 className="text-white font-normal text-4xl">My Dashboard</h1>
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="text-right-gray text-sm">Filter stats</p>
            <div className="bg-right-black h-5 p-2 rounded">
              <Image src={"/icons/toggle.svg"} width={20} height={20} alt="" />
            </div>
          </div>
        </div>
        <TotalPoints />
        <div className="flex mt-10 gap-10 items-start">
          <ActiveUsers />
          <TopCities />
        </div>
      </div>
      <div className="bg-back-black w-80 pt-7 pb-6">
        <div className="flex items-center gap-14 px-7 mb-9">
          <h2 className="text-white font-normal text-4xl">Personal</h2>
          <p className="text-right-gray whitespace-nowrap text-sm cursor-pointer">
            Learn more
          </p>
        </div>
        <Card />
        <section className="p-7">
          <Calendar />
        </section>
        <section className="p-7">
          <PopularTopics />
        </section>
      </div>
    </div>
  );
}

export const ActiveUsers = () => {
  return (
    <section className="bg-back-black rounded p-7 flex-1">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-normal text-xl">Active Users</h3>
        <div className="flex">
          <p className="text-right-gray mr-1">for</p>
          <p className="text-white relative before:content-none before:absolute before:top-2 before:border before:border-white before:border-solid before:border-t-4">
            August 2019
          </p>
        </div>
      </div>
      <ul className="list-none mt-7">
        {activeUsers.map((user, index) => (
          <li key={user.id} className={`${index !== 0 && "mt-14"}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full cursor-pointer">
                  <Image
                    src={"/Images/Avatar.png"}
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <div className="cursor-pointer">
                  <p className="text-sm text-white">{user.name}</p>
                  <p className="text-xs text-right-gray">{user.from}</p>
                </div>
              </div>
              <div className="flex cursor-pointer">
                <Image
                  src={"/icons/combined.png"}
                  width={13}
                  height={3}
                  alt=""
                />
              </div>
            </div>
            <ProgressBar progress={user.percent} color={user.color} />
            <div className="flex justify-between text-sm mt-2">
              <p className="text-white">{`Professional Level ${user.level}`}</p>
              <p className="text-white font-bold">{`${user.point} Points`}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const TopCities = () => {
  return (
    <section className="bg-back-black rounded p-7 flex-1">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-normal text-xl">Top cities</h3>
        <div className="flex">
          <p className="text-right-gray mr-1">for</p>
          <p className="text-white relative before:content-none before:absolute before:top-2 before:border before:border-white before:border-solid before:border-t-4">
            September 2019
          </p>
        </div>
      </div>
      <ul className="flex list-none justify-between mt-7">
        {topCitiesPercentage.map((percent) => (
          <li
            key={percent}
            className="text-right-gray text-sm"
          >{`${percent}%`}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-7 mt-9 mb-12">
        {percentageBarNumbers.map((number) => (
          <div key={number.color} className="flex items-center gap-3">
            <div
              style={{ width: `${number.percentage}%` }}
              className={`${number.color} h-2 shadow-none flex flex-col text-center whitespace-nowrap justify-center rounded-tr-md rounded-br-md`}
            ></div>
            <span className="text-white text-sm">{`${number.percentage}%`}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {topCitiesData.map((data) => (
          <div key={data.from} className="flex justify-between items-center">
            <div className="flex gap-5">
              <div
                className={`w-3 h-3 rounded-full border-${data.color} border-4 border-solid`}
              ></div>
              <p className="text-sm text-white">{data.from}</p>
            </div>
            <p className="text-sm text-white font-bold">{`${data.percentage}%`}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const TotalPoints = () => {
  return (
    <section className="mt-7 bg-back-black p-7 rounded">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-normal text-xl">Total points</h3>
        <div className="flex text-sm gap-2">
          <div className="flex">
            <p className="text-right-gray mr-1">from</p>
            <p className="text-white relative before:content-none before:absolute before:top-2 before:border before:border-white before:border-solid before:border-t-4">
              August 2018
            </p>
          </div>
          <div className="flex">
            <p className="text-right-gray mr-1">to</p>
            <p className="text-white">May 2019</p>
          </div>
        </div>
      </div>
      <div className="relative h-28 w-full my-16">
        <Image src={"/Images/Graph.png"} fill alt="" />
      </div>
      <div className="flex justify-between">
        {timesData.map((time) => (
          <p key={time} className="text-sm text-right-gray">
            {time}
          </p>
        ))}
      </div>
    </section>
  );
};
