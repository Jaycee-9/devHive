import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useData } from "@/utils/context";
import { followRequest } from "@/service/api";
import UserPost from "./UserPost";
import { Close } from "@mui/icons-material";

export default function UserProfileDialog({
  handleCloseDialog,
  openDialog,
  profileData,
  profilePost,
}) {
  const [content, setContent] = useState("posts");
  const [follow, setFollow] = useState(false);
  const { user } = useData();
  const displayContent = (view) => {
    setContent(view);
  };

  const handleFollowReq = async (userId) => {
    setFollow((prevState) => !prevState);
    const res = await followRequest(userId, user._id);
    console.log(res);
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="lg"
    >
      <DialogContent>
        {profileData && profilePost.length === 0 ? (
          <div className="w-full h-[80vh] flex justify-center items-center">
            <CircularProgress />
          </div>
        ) : (
          <div className="w-full relative mx-auto bg-white shadow-lg rounded-lg">
            <div className="absolute right-5 top-5 z-10 cursor-pointer">
              <Close onClick={handleCloseDialog} />
            </div>
            <div className="relative p-10 bg-yellow-500 rounded-t-[32px]">
              <img
                src="/images/png/Explore_coder.png"
                alt="user"
                className="w-32 mx-auto rounded-full border-4 border-white"
              />
              {profileData._id === user._id ? (
                ""
              ) : (
                <div className="flex justify-center py-2 items-center h-full">
                  <button
                    onClick={() => handleFollowReq(profileData._id)}
                    className={`px-4 py-1 rounded-full text-white font-medium transition-all duration-300 ${
                      follow
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {follow ? "Following" : "Follow"}
                  </button>
                </div>
              )}
              <div className="absolute w-[70%] mx-auto mt-1 bg-purple-700 left-1/2 transform -translate-x-1/2 rounded-[32px] p-4 shadow-md">
                <h1 className="text-white font-bold text-center text-lg">
                  {profileData.username}
                </h1>
                <h1 className="text-white text-center text-sm">
                  {profileData.email}
                </h1>
              </div>
            </div>
            <div className="flex justify-around py-4 h-full bg-gray-100">
              <div
                className="text-center cursor-pointer mt-8"
                onClick={() => displayContent("followers")}
              >
                <h1 className="font-bold text-gray-700">Followers</h1>
                <h1 className="text-gray-700">
                  {profileData.followers?.length}
                </h1>
              </div>
              <div
                className="text-center mt-8 cursor-pointer"
                onClick={() => displayContent("posts")}
              >
                <h1 className="font-bold text-gray-700">Posts</h1>
                <h1 className="text-gray-700">{profilePost.length}</h1>
              </div>
              <div
                className="text-center cursor-pointer mt-8"
                onClick={() => displayContent("followings")}
              >
                <h1 className="font-bold text-gray-700">Followings</h1>
                <h1 className="text-gray-700">
                  {profileData.followings?.length}
                </h1>
              </div>
            </div>
            {content === "followers" && (
              <ul className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
                {profileData.followers.map((follower, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={
                        follower.userImage
                          ? follower.userImage
                          : "/images/png/Explore_coder.png"
                      }
                      alt={follower.username}
                    />
                    <span className="text-lg font-medium text-gray-700">
                      {follower.username}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {content === "posts" && <UserPost userPost={profilePost} />}
            {content === "followings" && (
              <ul className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
                {profileData.followings.map((followings, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={
                        followings.userImage
                          ? followings.userImage
                          : "/images/png/Explore_coder.png"
                      }
                      alt={followings.username}
                    />
                    <span className="text-lg font-medium text-gray-700">
                      {followings.username}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
