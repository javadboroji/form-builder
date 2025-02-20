import React from "react";
import { Input } from "@/components/ui/input";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  name: string;
  placeholder: string;
  type: "password" | "text" | "number";
  register: UseFormRegister<any>;
  classCu?: string;
}

const FormTextFiled: React.FC<IProps> = ({
  name,
  placeholder,
  type,
  register,
  classCu,
}) => {
  return (
    <input
      className={`border-2 border-gray-200 rounded-md py-1 px-2 mx-1 ${classCu}`}
      {...register(name)}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default FormTextFiled;
