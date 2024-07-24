"use client";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import AppBar from "./detailUserPostComponents/AppBar";
import Description from "./detailUserPostComponents/Description";
import Reaction from "./detailUserPostComponents/Reaction";

import CircularProgress from "@mui/material/CircularProgress";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UserPostDetails({ handleClose, dialogOpen, code }) {
  return (
    <Dialog
      fullScreen
      open={dialogOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <>
        {code.length === 0 ? (
          <div className="flex items-center justify-center w-full h-full">
            <CircularProgress />
          </div>
        ) : (
          <div className="shadow-lg max-w-[1200px] mx-auto w-full">
            <AppBar code={code} handleClose={handleClose} />
            <Description code={code} />
            <Reaction code={code} />
          </div>
        )}
      </>
    </Dialog>
  );
}

export default UserPostDetails;
