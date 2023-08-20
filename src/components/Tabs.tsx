"use client";

import { tabItems } from "@/mock/tabItems";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  return (
    <nav>
      {tabItems.map((item) => (
        <Link
          href="/"
          key={item.id}
          className={`block py-6 px-7 cursor-pointer ${
            currentTab === item.id && "bg-right-blue"
          }`}
          onClick={() => setCurrentTab(item.id)}
        >
          <Image src={`/icons/${item.image}`} width={24} height={20} alt="" />
        </Link>
      ))}
    </nav>
  );
};
