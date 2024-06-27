"use client";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import AppBar from "./detailCodeComponents/AppBar";
import Description from "./detailCodeComponents/Description";
import Reaction from "./detailCodeComponents/Reaction";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DetailedCode({ handleClose, dialogOpen, code }) {
  return (
    <Dialog
      fullScreen
      open={dialogOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <div className="shadow-lg max-w-[1200px] mx-auto w-full">
        <AppBar code={code} handleClose={handleClose} />
        <Description code={code} />
        <Reaction code={code} />
      </div>
    </Dialog>
  );
}

export default DetailedCode;
