import React, { useState } from "react";
import FormItems from "./components/FormItems";
import FormModal from "./components/FormModal";
import FormGeneratForTextField from "@/Pages/FormGenerate/components/FormGeneratTextField/FormGeneratForTextField";
import FormResult from "./components/FormResult/FormResult";

interface IProps {}

const FormGenerate: React.FC<IProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const user=JSON.parse(localStorage.getItem("user_test") as string) 
  return (
    <div className="flex w-full">
      <div className="shadow-xl p-2 rounded-lg w-1/6 h-[100dvh]">
        <h2 className="text-yellow-500 text-3xl"> Form Items</h2>
        <FormItems setOpen={setOpen} />
      </div>
      <div className=" p-2 flex flex-col w-full">
        <h1 className="text-2xl"> Form: <span className="text-green-700">{user?.formName}</span></h1>
        <FormResult/>
      </div>
      <FormModal open={open} setopen={setOpen}>
        <FormGeneratForTextField setopen={setOpen}/>
      </FormModal>
    </div>
  );
};

export default FormGenerate;
