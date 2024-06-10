"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import { HiveTwoTone } from "@mui/icons-material/";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useData } from "@/utils/context";

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
      <h1 className="text-center text-[32px] font-semibold">DevHive</h1>
      <List className="flex-grow">
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
          {user.username}
        </h1>
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
