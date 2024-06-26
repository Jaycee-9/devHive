"use client";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import AppBar from "./detailCodeComponents/AppBar";
import Description from "./detailCodeComponents/Description";

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
      <AppBar code={code} handleClose={handleClose} />
      <Description code={code} />
    </Dialog>
  );
}

export default DetailedCode;
