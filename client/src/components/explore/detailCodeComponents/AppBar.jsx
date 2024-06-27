import { useState } from "react";
import { Close } from "@mui/icons-material";

function AppBar({ code, handleClose }) {
  const [follow, setFollow] = useState(false);

  const handleFollowReq = () => {
    setFollow((prevState) => !prevState);
  };

  return (
    <div className="rounded-t-xl bg-gradient-to-r from-blue-500 to-indigo-500  mx-auto w-full shadow-lg">
      <div className="p-4 text-white flex items-center justify-between">
        <div className="relative flex ">
          <img
            src={code.userImage}
            alt="user"
            className="w-[80px] h-[80px] border-2 border-white rounded-full object-cover"
          />
          <h1 className="text-[32px] px-4 font-semibold">{code.user}</h1>
          <button
            onClick={handleFollowReq}
            className={`ml-4 px-4 py-1 rounded-full absolute left-20 top-12 text-white font-medium transition-all duration-300 ${
              follow
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {follow ? "Following" : "Follow"}
          </button>
        </div>
        <button
          onClick={handleClose}
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <Close />
        </button>
      </div>
    </div>
  );
}

export default AppBar;
