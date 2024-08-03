"use client";

import { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { useData } from "@/utils/context";
import LeftDrawer from "./LeftDrawer";
import Feed from "./Feeds";
export default function Home() {
  const { setUser, user } = useData();

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    setUser(userData);
  }, []);

  if (!user) {
    return (
      <div className="max-w-[20px] mt-[400px] mx-auto">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="px-10 max-sm:px-4">
      <LeftDrawer className="max-w-[200px]" />
      <div className="pt-1 mt-10">
        <Feed />
      </div>
    </div>
  );
}
