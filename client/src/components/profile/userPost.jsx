import { useState } from "react";
import UserPostDetails from "./userPostdetails";
import { userPostDetails } from "@/service/api";
import { addEllipsis } from "@/utils/elipsis";
function UserPost({ userPost }) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCode([]);
  };

  const showUserPostDetails = async (postId) => {
    const response = await userPostDetails(postId);
    setCode(response.data);
  };
  return (
    <div className="container mx-auto p-4">
      {userPost.length === 0 ? (
        <p className="text-center text-gray-500">
          No posts yet. Start uploading one!
        </p>
      ) : (
        <ul
          onClick={handleClickOpen}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4"
        >
          {userPost
            .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
            .map((post, index) => (
              <li
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
                onClick={() => showUserPostDetails(post._id)}
              >
                <img
                  src={post.media}
                  alt="media"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">
                    {addEllipsis(post.caption, 70)}
                  </h1>
                </div>
              </li>
            ))}
        </ul>
      )}
      <UserPostDetails
        handleClose={handleClose}
        dialogOpen={open}
        code={code}
      />
    </div>
  );
}

export default UserPost;
