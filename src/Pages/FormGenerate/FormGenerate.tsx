import React, { useState } from "react";
import FormItems from "./components/FormItems";
import FormModal from "./components/FormModal";
import FormGeneratForTextField from "@/Pages/FormGenerate/components/FormGeneratTextField/FormGeneratForTextField";

interface IProps {}

const FormGenerate: React.FC<IProps> = ({}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full">
      <div className="shadow-xl p-2 rounded-lg w-1/4 h-[100dvh]">
        <h2 className="text-yellow-500 text-3xl"> Form Items</h2>
        <FormItems setOpen={setOpen} />
      </div>
      <div className=" p-2 flex">
        <h1> Form:</h1>
      </div>
      <FormModal open={open} setopen={setOpen}>
        <FormGeneratForTextField />
      </FormModal>
    </div>
  );
};

export default FormGenerate;
