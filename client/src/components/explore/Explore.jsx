"use client";

import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useData } from "@/utils/context";
import LeftDrawer from "../home/LeftDrawer";
import Content from "./Content";

export default function Explore() {
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
    <>
      <LeftDrawer className="max-w-[200px]" />
      <div className="pt-1 mt-10">
        <Content />
      </div>
    </>
  );
}
