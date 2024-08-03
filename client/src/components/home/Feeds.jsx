import { useData } from "@/utils/context";
import { getAllFollowings } from "@/service/api";
import { useEffect, useState } from "react";

import PostList from "./PostList";
function Feed() {
  const { user } = useData();
  const [followingData, setFollowingData] = useState([]);
  useEffect(() => {
    const getFollowingPost = async () => {
      const data = await getAllFollowings(user._id);
      setFollowingData(data.data);
    };
    getFollowingPost();
  }, []);
  return (
    <div>
      {followingData.length === 0 ? (
        <h1>
          Your feed is empty. Follow coders to see updates. <br />
          Click the top-left icon to explore other pages.
        </h1>
      ) : (
        <PostList followingData={followingData} />
      )}
    </div>
  );
}

export default Feed;
