import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TSelectItem } from "@/types";

interface IProps {
  SelectItems: TSelectItem[];
  placeholder: string;
  name: string;
}

const FormSelect: React.FC<IProps> = ({ SelectItems, placeholder, name }) => {
  return (
    <Select name={name}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {SelectItems?.map((item) => {
          return (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default FormSelect;
