import { useEffect, useState } from "react";
import DisplayScreen from "./DisplayScreen";
import { useData } from "@/utils/context";
import { uploadDiscussion, uploadKudos } from "@/service/api";
import { toast } from "react-toastify";

const initialValue = {
  _id: "",
  user: "",
  comment: "",
  codeId: "",
};

function Reaction({ code }) {
  const [displayScreen, setDisplayScreen] = useState(false);
  const [comment, setComment] = useState(initialValue);
  const [commentTitle, setCommentTitle] = useState(true);
  const { user } = useData();

  useEffect(() => {
    if (user && user.username && code) {
      setComment((prevComment) => ({
        ...prevComment,
        user: user.username,
        _id: user._id,
        codeId: code._id,
      }));
    }
  }, [user, code]);

  const Validate = () => {
    if (comment.comment.length === 0) {
      setCommentTitle(false);
      return false;
    }
    setCommentTitle(true);
    return true;
  };

  const postComment = async () => {
    if (Validate()) {
      try {
        await uploadDiscussion(comment);
        setComment(initialValue);
        toast.success("Your discussion has been successfully posted! 🎉");
      } catch (error) {
        console.error("Failed to post comment:", error);
      }
    }
  };

  const updateKudos = async (id, userId) => {
    await uploadKudos(id, userId);
  };
  const handleDisplayScreen = () => {
    setDisplayScreen((prevState) => !prevState);
  };

  const handleCommentChange = (evt) => {
    setComment({ ...comment, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      <div className="w-full mx-auto p-6 bg-white">
        <div className="flex items-center space-x-4">
          {commentTitle ? (
            <textarea
              type="text"
              placeholder="Start a discussion..."
              name="comment"
              value={comment.comment}
              onChange={handleCommentChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          ) : (
            <textarea
              type="text"
              placeholder="Start a discussion..."
              name="comment"
              value={comment.comment}
              onChange={handleCommentChange}
              className="w-full px-4 py-2 border border-red-800 rounded-md focus:outline-none"
            />
          )}

          <button
            onClick={postComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Post
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center text-gray-700 text-sm">
          <div className="flex items-center space-x-2 mx-3">
            <p>{code.likes?.length || 0}</p>
            <button
              onClick={() => {
                handleDisplayScreen(), updateKudos(code._id, code.userId);
              }}
              className="bg-green-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Kudos
            </button>
          </div>
          <div className="flex items-center space-x-2 mx-3">
            <p>{code.discussions?.length || 0}</p>
            <button
              onClick={handleDisplayScreen}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Discussion
            </button>
          </div>
        </div>
      </div>
      <DisplayScreen displayScreen={displayScreen} code={code} />
    </>
  );
}

export default Reaction;
