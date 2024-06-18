import { addEllipsis } from "@/utils/elipsis";
import { useState, useEffect } from "react";
import { getAllCode } from "@/service/api";

function Content() {
  const [codes, setCodes] = useState([]);
  const [kudosState, setKudosState] = useState({});

  useEffect(() => {
    const fetchCodes = async () => {
      const allCodes = await getAllCode();
      setCodes(allCodes.data);
    };

    fetchCodes();
  }, []);

  const handleLike = (postId) => {
    setKudosState((prevKudosState) => ({
      ...prevKudosState,
      [postId]: !prevKudosState[postId],
    }));
  };

  return (
    <div className="flex flex-wrap max-w-[1000px] mx-auto">
      {codes.map((post) => {
        return (
          <div
            key={post._id}
            className="max-w-[450px] w-full bg-white border-[1px] border-gray-200 shadow-2xl rounded-3xl p-3 mx-3 my-7 "
          >
            <div className="flex">
              <img
                src={post.userImage}
                alt="user"
                className="w-[50px] rounded-[50%] border-[2px] border-blue-950"
              />
              <div className="relative px-5">
                <h1>{post.user}</h1>
                <a href={post.repo} className="text-blue-600">
                  {post.repo}
                </a>
              </div>
            </div>
            <div className="flex items-center py-4">
              <img
                src={post.media}
                alt="media"
                className="h-[100px] w-[200px] rounded-[12px] object-contain"
              />
              <div className="px-4">
                <h1 className="font-semibold capitalize">{post.title}</h1>
                <p className="">{addEllipsis(post.caption, 110)}</p>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div
                onClick={() => handleLike(post._id)}
                className="flex items-center cursor-pointer"
              >
                {kudosState[post._id] ? (
                  <img
                    src="/images/png/explore_content_clapClicked.png"
                    alt="kudos"
                    className="w-[24px]"
                  />
                ) : (
                  <img
                    src="/images/png/explore_content_clap_unClicked.png"
                    alt="kudos"
                    className="w-[24px]"
                  />
                )}
                <p>{post.kudos} kudos</p>
              </div>
              <div className="flex items-center cursor-pointer py-5">
                <img
                  src="/images/png/explore_content_discussion.png"
                  alt="discussion"
                  className="w-[24px]"
                />
                <p>
                  {post.openDiscussion.map((chat) => {
                    return <h1>{chat.user}</h1>;
                  })}
                  Discussions
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
