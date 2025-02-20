import Modal from "@/components/com/Modal/Modal";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React, { ReactNode, useState } from "react";

interface IProps {
  open: boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const FormModal: React.FC<IProps> = ({ open, setopen, children }) => {
  const closeModal = () => {
    setopen(false);
  };
  return (
    <Modal open={open}>
      <Button className="shadow-none flex justify-start w-fit" onClick={closeModal}>
        <X size={"25px"} className="text-red-600 text-2xl"/>
      </Button>
      <div className="flex w-full">{children}</div>
    </Modal>
  );
};

export default FormModal;
