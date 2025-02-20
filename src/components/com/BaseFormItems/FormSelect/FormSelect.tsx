import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TSelectItem } from "@/types";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  SelectItems: TSelectItem[];
  placeholder?: string;
  name: string;
  classCu?: string;
  register: UseFormRegister<any>;
}

const FormSelect: React.FC<IProps> = ({
  SelectItems,
  placeholder,
  name,
  classCu,
  register,
}) => {
  return (
    // <Select name={name}>
    //   <SelectTrigger className="w-[180px]">
    //     <SelectValue placeholder={placeholder} />
    //   </SelectTrigger>
    //   <SelectContent>
    //     {SelectItems?.map((item) => {
    //       return (
    //         <SelectItem key={item.value} value={item.value}>
    //           {item.label}
    //         </SelectItem>
    //       );
    //     })}
    //   </SelectContent>
    // </Select>
    <>
      {placeholder && <label htmlFor={name}>{placeholder}</label>}
      <select
        className={`p-2 min-w-[10rem] border-[1px] mx-1 border-gray-400 rounded-md  ${classCu}`}
        {...register(name)}
      >
        {SelectItems?.map((item) => {
          return <option value={item.value}> {item.label}</option>;
        })}
      </select>
    </>
  );
};

export default FormSelect;
