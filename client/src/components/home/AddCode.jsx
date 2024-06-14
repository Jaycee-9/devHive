import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function AddCode({ handleClickOpen, handleClose, dialogOpen }) {
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
        <DialogTitle className="text-2xl font-semibold">
          Create New Code Post
        </DialogTitle>
        <DialogContent className="w-[500px] max-sm:w-full">
          <DialogContentText>
            <form class="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
              <div class="mb-5">
                <label class="block text-gray-700 font-medium mb-2">
                  Title
                </label>
                <input
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  type="text"
                  placeholder="Enter the title for your code"
                />
              </div>

              <div class="mb-5">
                <label class="block text-gray-700 font-medium mb-2">
                  Caption
                </label>
                <textarea
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-24"
                  placeholder="Enter the description for your code"
                ></textarea>
              </div>

              <div class="mb-5">
                <label class="block text-gray-700 font-medium mb-2">
                  Media
                </label>
                <input
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  type="file"
                  placeholder="Enter the repository link"
                />
              </div>

              <div class="mb-5">
                <label class="block text-gray-700 font-medium mb-2">
                  Repository Link
                </label>
                <input
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  type="text"
                  placeholder="Enter the repository link"
                />
              </div>

              <div class="mb-5">
                <label class="block text-gray-700 font-medium mb-2">Tags</label>
                <input
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  type="text"
                  placeholder="Enter tags (e.g., Python, JavaScript)"
                />
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Close</button>

          <div class="flex justify-end">
            <button
              type="submit"
              class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={handleClose}
              autoFocus
            >
              Post
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCode;
