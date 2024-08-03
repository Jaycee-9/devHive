import { Close } from "@mui/icons-material";

function AppBar({ code, handleClose }) {
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
