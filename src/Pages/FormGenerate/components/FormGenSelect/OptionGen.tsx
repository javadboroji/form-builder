import FormSelectOption from "@/Store/FormSelectOption";
import React, { useEffect, useState } from "react";

function OptionGen() {
  const { setOPtion } = FormSelectOption();

  //*input state and change handler
  const [inputValue, setInputValue] = useState("");

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //*change inputValue splire value with "," and set in FormSelectOption
  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue) {
        setOPtion(
          inputValue
            .split(",")
            .map((item) => ({ value: item.trim(), label: item.trim() }))
        );
      }
    }, 2000);
    return () => clearTimeout(handler);
  }, [inputValue]);

  return (
    <input
      onChange={(e) => onchangeHandler(e)}
      className={`w-full mx-2 border-2 bg-gray-100 focus-visible:outline-blue-200 text-indigo-900 border-gray-200"
        } rounded-[10px] py-3 px-2 mx-1 `}
      placeholder="option1,opetion2"
    />
  );
}

export default OptionGen;
