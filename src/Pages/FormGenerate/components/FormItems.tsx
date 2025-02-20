import { Button } from "@/components/ui/button";
import React from "react";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormItems: React.FC<IProps> = ({ setOpen }) => {
  const items = [
    {
      type: "input",
      title: "input",
      id: "form_1",
    },
    {
      type: "select",
      title: "select",
      id: "form_2",
    },
    {
      type: "date",
      title: "date",
      id: "form_3",
    },
    {
      type: "option",
      title: "option",
      id: "form_4",
    },
  ];
  const setFormItem = (type: string) => {
    setOpen(true);
  };
  return (
    <div className="flex flex-col">
      {items.map((item) => {
        return (
          <Button
            key={item.id}
            className="border-[1px] p-2 border-gray-400 my-2 rounded-xl"
            onClick={() => setFormItem(item.type)}
          >
            <span> {item.title}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default FormItems;
