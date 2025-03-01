import React, { useEffect, useState } from "react";
import FormItems from "./components/FormItems";
import FormModal from "./components/FormModal";
import FormGeneratForTextField from "@/Pages/FormGenerate/components/FormGeneratTextField/FormGeneratForTextField";
import FormResult from "./components/FormResult/FormResult";
import FormItemTypeSelect from "@/Store/FormItemTypeSelect";
import FormGenSelect from "./components/FormGenSelect/FormGenSelect";

interface IProps {}

const FormGenerate: React.FC<IProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const { formType } = FormItemTypeSelect();
  const user=JSON.parse(localStorage.getItem("user_test") as string) ;
  useEffect(() => {
    console.log(formType);
    
  }, [formType])
  
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
        {formType==="input"&&<FormGeneratForTextField setopen={setOpen}/>}
        {formType==="select"&&<FormGenSelect setopen={setOpen}/>}
      </FormModal>
    </div>
  );
};

export default FormGenerate;
