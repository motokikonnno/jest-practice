import { popularTopics } from "@/mock/popularTopics";
import Image from "next/image";

export const PopularTopics = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-7">
        <h3 className="text-white font-normal text-xl">Popular Topics</h3>
        <p className="text-right-gray whitespace-nowrap text-sm cursor-pointer">
          View all
        </p>
      </div>
      <ul className="list-none flex flex-col gap-4">
        {popularTopics.map((topic) => (
          <li key={topic.title} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`bg-${topic.color} rounded p-3`}>
                <Image src={topic.image} width={17} height={16} alt="" />
              </div>
              <div>
                <p className="text-sm text-white mb-1">{topic.title}</p>
                <p className="text-xs text-right-gray">{`${topic.question} questions`}</p>
              </div>
            </div>
            <div className="flex cursor-pointer">
              <Image src={"/icons/combined.png"} width={13} height={3} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
