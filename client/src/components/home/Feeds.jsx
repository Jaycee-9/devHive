import { useData } from "@/utils/context";
import { getAllFollowings } from "@/service/api";
import { useEffect } from "react";
function Feed() {
  const { user } = useData();
  useEffect(() => {
    const getFollowingPost = async () => {
      const data = await getAllFollowings(user._id);
      console.log(data.data);
    };
    getFollowingPost();
  }, []);
  return <div>this is where i put on user feed</div>;
}

export default Feed;
