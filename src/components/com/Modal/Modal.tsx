import React, { ReactNode } from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
interface IProps {
  children: ReactNode;
  open: boolean;
}

const Modal: React.FC<IProps> = ({ children, open }) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent  className="bg-white min-w-[55rem] rounded-xl">{children}</AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
