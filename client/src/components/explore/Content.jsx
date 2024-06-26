import { addEllipsis } from "@/utils/elipsis";
import { useState, useEffect } from "react";
import { getAllCode, getSingleCode } from "@/service/api";
import DetailedCode from "./DetailedCode";

function Content() {
  const [codes, setCodes] = useState([]);
  const [code, setCode] = useState([]);
  const [kudosState, setKudosState] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchCodes = async () => {
      const allCodes = await getAllCode();
      setCodes(allCodes.data);
    };

    fetchCodes();
  }, []);

  const handleDetailedView = async (id) => {
    const singleCode = await getSingleCode(id);
    setCode(singleCode.data);
  };

  const handleLike = (postId) => {
    setKudosState((prevKudosState) => ({
      ...prevKudosState,
      [postId]: !prevKudosState[postId],
    }));
  };

  return (
    <>
      <div className="flex flex-wrap max-w-[1000px] mx-auto">
        {codes.map((post, index) => {
          return (
            <div
              key={index}
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
              <div
                onClick={() => {
                  handleClickOpen();
                  handleDetailedView(post._id);
                }}
                className="flex items-center py-4 h-[140px] cursor-pointer"
              >
                <img
                  src={post.media}
                  alt="media"
                  className=" h-[100px] rounded-[12px]"
                />
                <div className="px-4">
                  <h1 className="font-semibold capitalize">{post.title}</h1>
                  <p className="">{addEllipsis(post.caption, 90)}</p>
                </div>
              </div>
              <div className="relative flex items-center justify-around border-t-[1px] border-transparent">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-100 via-blue-800 to-blue-300"></div>
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
                <div
                  onClick={() => {
                    handleClickOpen();
                    handleDetailedView(post._id);
                  }}
                  className="flex items-center cursor-pointer py-5"
                >
                  <img
                    src="/images/png/explore_content_discussion.png"
                    alt="discussion"
                    className="w-[24px]"
                  />
                  {post.openDiscussion.map((chat, index) => {
                    return <h1 key={index}>{chat.user}</h1>;
                  })}
                  <p>Discussions</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <DetailedCode handleClose={handleClose} dialogOpen={open} code={code} />
    </>
  );
}

export default Content;
