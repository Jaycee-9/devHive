import { addEllipsis } from "@/utils/elipsis";
import { useState } from "react";
import {
  getSingleCode,
  uploadKudos,
  userDetails,
  userPosts,
} from "@/service/api";
import DetailedCode from "../explore/DetailedCode";
import UserProfileDialog from "../explore/UserProfileDialog";
import { useData } from "@/utils/context";

function PostList({ followingData }) {
  const [code, setCode] = useState([]);
  const [kudosState, setKudosState] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [profilePost, setProfilePost] = useState([]);
  const [kudosNumber, setKudosNumber] = useState(0);

  const { user } = useData();

  const userId = user._id;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenDialog = async (userId) => {
    setOpenDialog(true);
    const res = await userDetails(userId);
    const post = await userPosts(userId);
    setProfileData(res.data);
    setProfilePost(post.data);
  };
  const handleClose = () => {
    setOpen(false);
    setCode([]);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setProfileData([]);
    setProfilePost([]);
  };

  const handleDetailedView = async (id) => {
    const singleCode = await getSingleCode(id);
    setCode(singleCode.data);
  };

  const changeBtnState = (postId) => {
    setKudosState((prevKudosState) => ({
      ...prevKudosState,
      [postId]: !prevKudosState[postId],
    }));
  };

  const uploadLike = async (postId) => {
    try {
      // Perform the async operation to upload kudos to the backend
      const response = await uploadKudos(postId, userId);

      if (response.data && response.data.likes !== undefined) {
        setKudosNumber(response.data.likes.length);
      }
    } catch (error) {
      // Revert the optimistic update if the async operation fails
      setKudosNumber((prevState) => prevState - 1);
      console.error("Failed to upload kudos", error);
    }
  };

  return (
    <>
      <div className=" max-w-[1000px] mx-auto">
        {followingData
          .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
          .map((post, index) => {
            return (
              <div
                key={index}
                className=" w-full border-[1px] border-gray-200 shadow-2xl rounded-3xl p-3  my-7 "
              >
                <div className="flex ">
                  <img
                    src={post.userImage}
                    alt="user"
                    className="w-[50px] rounded-[50%] border-[2px] border-blue-950"
                  />
                  <div className="relative px-5">
                    <h1
                      className="cursor-pointer"
                      onClick={() => handleClickOpenDialog(post.userId)}
                    >
                      {post.user}
                    </h1>
                    <a href={post.repo} className="text-blue-600">
                      {addEllipsis(post.repo, 20)}
                    </a>
                  </div>
                </div>
                <div
                  onClick={() => {
                    handleClickOpen();
                    handleDetailedView(post._id);
                  }}
                  className="flex  py-4 cursor-pointer max-[1200px]:flex-col"
                >
                  <img
                    src={post.media}
                    alt="media"
                    className="w-[500px] h-[300px] object-fill rounded-[32px] max-[1200px]:mx-auto sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
                  />

                  <div className="px-4">
                    <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize">
                      {post.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
                      {addEllipsis(post.caption, 130)}
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-around border-t-[1px] border-transparent">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-100 via-blue-800 to-blue-300"></div>
                  <div
                    onClick={() => changeBtnState(post._id)}
                    className="flex items-center cursor-pointer"
                  >
                    {kudosState[post._id] ? (
                      <div
                        className="flex items-center"
                        onClick={() => uploadLike(post._id)}
                      >
                        <img
                          src="/images/png/explore_content_clapClicked.png"
                          alt="kudos"
                          className="w-[24px]"
                        />
                        <p>
                          {kudosNumber ? kudosNumber : post.likes?.length} kudos
                        </p>
                      </div>
                    ) : (
                      <div
                        className="flex items-center"
                        onClick={() => uploadLike(post._id)}
                      >
                        <img
                          src="/images/png/explore_content_clap_unClicked.png"
                          alt="kudos"
                          className="w-[24px]"
                        />
                        <p>{post.likes?.length} kudos</p>
                      </div>
                    )}
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
                    {post.openDiscussion?.map((chat, index) => {
                      return <h1 key={index}>{chat.user}</h1>;
                    })}
                    <p className="px-4">
                      {post.discussions?.length || 0} Discussions
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <DetailedCode handleClose={handleClose} dialogOpen={open} code={code} />
      <UserProfileDialog
        handleCloseDialog={handleCloseDialog}
        openDialog={openDialog}
        profileData={profileData}
        profilePost={profilePost}
      />
    </>
  );
}

export default PostList;
