"use client";

import { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { useData } from "@/utils/context";
import LeftDrawer from "./LeftDrawer";

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
      <div className="max-w-[1200px] rounded-[32px] shadow-2xl p-10 mx-auto mt-[100px]">
        <h1>{user.username} welcome to devHive...</h1>
      </div>
    </div>
  );
}
