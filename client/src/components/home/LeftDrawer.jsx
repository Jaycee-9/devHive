"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import { HiveTwoTone } from "@mui/icons-material/";

import { useData } from "@/utils/context";

const navLink = [
  {
    name: "Codes",
    link: "/",
    img: "/images/png/coding-book.png",
  },
  {
    name: "Explore",
    link: "/explore",
    img: "/images/png/leftDrawer_explore.png",
  },

  {
    name: "Profile",
    link: "/profile",
    img: "/images/png/leftDrawer_developer.png",
  },
];

function LeftDrawer() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { user } = useData();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    router.push("/account");
  };

  const DrawerList = (
    <div
      className="w-[350px] flex flex-col h-[90vh]"
      onClick={toggleDrawer(false)}
    >
      <a href="/">
        <h1 className="text-center text-[32px] font-semibold">DevHive</h1>
      </a>
      <ul className="flex-grow">
        {navLink.map((link, index) => {
          return (
            <a key={index} href={link.link}>
              <li className="max-w-[300px] mx-auto rounded-[32px] flex items-center p-5 relative hover:bg-gray-200 hover:scale-105 transition-transform duration-200">
                <img src={link.img} alt="logo" className="w-10" />
                <h1 className="text-[18px] absolute left-[100px]">
                  {link.name}
                </h1>
              </li>
            </a>
          );
        })}
      </ul>
      <div className="relative mt-auto ">
        <button
          onClick={handleLogout}
          className="bg-red-500 w-1/2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute left-[25%]"
        >
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button onClick={toggleDrawer(true)}>
        <HiveTwoTone className="text-[50px] absolute left-[0px]" />
        <h1 className="absolute left-[60px] top-[100%] capitalize text-[24px]">
          {user?.username}
        </h1>
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
