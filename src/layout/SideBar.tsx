import { Tabs } from "@/components/Tabs";
import Image from "next/image";

export const SideBar = () => {
  return (
    <aside className="sticky bg-slate-950 top-0 bottom-0 h-screen w-20 flex flex-col items-center justify-between pt-8 pb-6">
      <div className="cursor-pointer">
        <Image src={"/images/Avatar.png"} width={40} height={40} alt="avatar" />
      </div>
      <Tabs />
      <div className="flex cursor-pointer p-3 rounded-full bg-emerald-green h-3">
        <Image src={"/icons/plus-solid.svg"} width={12} height={12} alt="" />
      </div>
    </aside>
  );
};
