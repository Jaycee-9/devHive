import { userDetails } from "@/service/api";
import { useData } from "@/utils/context";
import { useEffect, useState } from "react";

function UserProfile() {
  const { user } = useData();
  const [userProfile, setUserProfile] = useState({});
  const [content, setContent] = useState("posts");

  useEffect(() => {
    const userdata = async () => {
      const data = await userDetails(user._id);
      setUserProfile(data.data);
    };

    userdata();
  }, []);

  const displayContent = (view) => {
    setContent(view);
  };

  return (
    <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative p-10 bg-yellow-500 rounded-t-[32px]">
        <img
          src="/images/png/Explore_coder.png"
          alt="user"
          className="w-32 mx-auto rounded-full border-4 border-white"
        />
        <div className="absolute w-[30%] mx-auto mt-1 bg-purple-700 left-1/2 transform -translate-x-1/2 rounded-[32px] p-4 shadow-md">
          <h1 className="text-white font-bold text-center text-lg">
            {userProfile.username}
          </h1>
          <h1 className="text-white text-center text-sm">
            {userProfile.email}
          </h1>
        </div>
      </div>
      <div className="flex justify-around py-4 h-full bg-gray-100">
        <div
          className="text-center cursor-pointer"
          onClick={() => displayContent("followers")}
        >
          <h1 className="font-bold text-gray-700">Followers</h1>
          <h1 className="text-gray-700">{userProfile.followers?.length}</h1>
        </div>
        <div
          className="text-center mt-14 cursor-pointer"
          onClick={() => displayContent("posts")}
        >
          <h1 className="font-bold text-gray-700">Posts</h1>
          <h1 className="text-gray-700">0</h1>
        </div>
        <div
          className="text-center cursor-pointer"
          onClick={() => displayContent("followings")}
        >
          <h1 className="font-bold text-gray-700">Followings</h1>
          <h1 className="text-gray-700">{userProfile.followings?.length}</h1>
        </div>
      </div>
      {content === "followers" && (
        <ul className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
          {userProfile.followers.map((follower, index) => (
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
      {content === "posts" && <div>posts list to be shown here</div>}
      {content === "followings" && (
        <ul className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
          {userProfile.followings.map((followings, index) => (
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
  );
}
export default UserProfile;
