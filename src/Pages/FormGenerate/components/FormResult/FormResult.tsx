import FormTextFiled from "@/components/com/BaseFormItems/FormTextFiled/FormTextFiled";
import { Button } from "@/components/ui/button";
import { formItemGenrate } from "@/types";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function FormResult() {
  const [formDb, setformDb] = useState([]);
  const localStorageDb = JSON.parse(
    localStorage.getItem("form_db") as string
  );
  useEffect(() => {
    if (localStorageDb) {
      setformDb(localStorageDb);
    }
  }, []);
  //* useFoem Config
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();
  //*Submit Form
  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-full shadow-lg p-2 my-3">
      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
        {formDb?.map((item: formItemGenrate) => {
          return item.type === "textField" ? (
            <div
              className={`${
                item.col === "3"
                  ? "w-1/3"
                  : item.col === "6"
                  ? "w-1/2"
                  : "w-full"
              }`}
            >
              <FormTextFiled
                name={item.textField_name}
                placeholder={item.textField_title}
                register={register}
                type="text"
              />
            </div>
          ) : null;
        })}
        <Button
          className="text-green-600 py-2 px-8 border-[1px] rounded-xl"
          type="submit"
        >
          {" "}
          Save
        </Button>
      </form>
    </div>
  );
}
