"uce client";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useData } from "@/utils/context";
import { toast } from "react-toastify";

const initialPost = {
  title: "",
  caption: "",
  media: "/images/png/Explore_repository.png",
  user: "",
  userImage: "",
  kudos: "",
  repo: "",
  tags: "",
  deployedLinked: "",
  openDiscussion: [
    {
      user: "",
      comment: "",
    },
    {
      user: "",
      comment: "",
    },
  ],
  createDate: new Date(),
};

const setFile = (file) => {
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPost((prevPost) => ({
        ...prevPost,
        media: reader.result, // This assumes you want to display the uploaded image directly
      }));
    };
    reader.readAsDataURL(file);
  } else {
    setPost((prevPost) => ({
      ...prevPost,
      media: defaultImageURL,
    }));
  }
};

function AddCode({ handleClickOpen, handleClose, dialogOpen }) {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const [error, setError] = useState(true);
  const { user } = useData();

  useEffect(() => {
    const getImage = () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        //API call
        post.media = ""; // todo
      }
      post.user = user.username;
    };

    getImage();
  }, [file, post]);

  const handlePostInput = (evt) => {
    setPost({ ...post, [evt.target.name]: evt.target.value });
  };

  const validate = () => {
    if (post.title.length === 0) {
      toast.warn("Oops! It looks like you forgot to give your code a title");
      setError(false);
      return false;
    } else if (post.caption.length === 0) {
      toast.warn("Uh-oh! It seems you missed adding a caption.");
      setError(false);
      return false;
    } else if (post.repo.length === 0) {
      toast.warn("Looks like we’re missing the repository link");
      setError(false);
      return false;
    }
    return true;
  };

  console.log(error);
  const submitForm = (evt) => {
    evt.preventDefault();
    if (validate()) {
      console.log(post);
      toast.success("Your code has been successfully uploaded. Great job!");
      setInterval(() => {
        handleClose();
      }, 4000);
    }
  };

  return (
    <>
      <li
        onClick={handleClickOpen}
        className="cursor-pointer max-w-[300px] mx-auto rounded-[32px] flex items-center p-5 relative hover:bg-gray-200 hover:scale-105 transition-transform duration-200"
      >
        <img src="/images/png/leftDrawer_add.png" alt="logo" className="w-10" />
        <h1 className="text-[18px] absolute left-[100px]">Add</h1>
      </li>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle className="text-2xl font-semibold flex justify-between">
          Create New Code Post
          <button onClick={handleClose}>
            <img
              className="w-[32px]"
              src="/images/png/addCode_Close.png"
              alt="close"
            />
          </button>
        </DialogTitle>
        <DialogContent className="w-[500px] max-sm:w-full">
          <form
            onSubmit={submitForm}
            className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto"
          >
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Title *
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                name="title"
                value={post.title}
                onChange={handlePostInput}
                placeholder="Enter the title for your code"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Caption *
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-24"
                name="caption"
                value={post.caption}
                onChange={handlePostInput}
                placeholder="Enter the description for your code"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Media
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="file"
                onChange={(evt) => setFile(evt.target.files[0])}
                placeholder="Enter the repository link"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Repository Link *
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                name="repo"
                value={post.repo}
                onChange={handlePostInput}
                placeholder="Enter the repository link"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Deployed Link
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                name="deployedLinked"
                value={post.deployedLinked}
                onChange={handlePostInput}
                placeholder="Enter the repository link"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Tags
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                name="tags"
                value={post.tags}
                onChange={handlePostInput}
                placeholder="Enter tags (e.g., Python, JavaScript)"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                autoFocus
              >
                Post
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddCode;
