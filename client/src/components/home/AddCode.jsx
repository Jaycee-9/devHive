import Button from "@mui/material/Button";
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
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCode;
