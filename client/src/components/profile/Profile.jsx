"use client";
import { useData } from "@/utils/context";
import LeftDrawer from "../home/LeftDrawer";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Profile() {
  const { setUser, user } = useData();
  console.log(user);

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
        <h1> Hi! {user?.username} welcome to profile page...</h1>
      </div>
    </div>
  );
}

export default Profile;
