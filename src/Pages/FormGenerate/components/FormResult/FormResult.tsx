import FormDatePic from "@/components/com/BaseFormItems/DatePicker/FormDatePick";
import FormDatePicker from "@/components/com/BaseFormItems/DatePicker/FormDatePicker";
import FormSelect from "@/components/com/BaseFormItems/FormSelect/FormSelect";
import FormTextFiled from "@/components/com/BaseFormItems/FormTextFiled/FormTextFiled";
import { Button } from "@/components/ui/button";
import useFormDb from "@/Store/FormDB";
import { formItemGenrate } from "@/types";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function FormResult() {
  const { formData } = useFormDb();
  useEffect(() => {
    console.log(formData);
  }, [formData]);
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
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap  items-center">
          {formData?.map((item: formItemGenrate) => {
            return item.type === "textField" ? (
              <div
                className={` mx-0.5 px-1 ${
                  item.col === "3"
                    ? "w-[33%]"
                    : item.col === "6"
                    ? "w-[49.5%]"
                    : "w-full"
                }`}
              >
                <FormTextFiled
                  name={item.textField_name}
                  placeholder={item.textField_title}
                  register={register}
                  type="text"
                  classCu="my-2"
                />
              </div>
            ) : item.type === "select" ? (
              <div
                className={`mx-0.5 px-1 ${
                  item.col === "3"
                    ? "w-[33%]"
                    : item.col === "6"
                    ? "w-[49.5%]"
                    : "w-full"
                }`}
              >
                <FormSelect
                  register={register}
                  name={item.textField_name}
                  SelectItems={item?.options || []}
                  classCu="my-2 w-full"
                />
              </div>
            ) : item.type === "date" ? (
              <div
                className={`mx-0.5 px-1 ${
                  item.col === "3"
                    ? "w-[33%]"
                    : item.col === "6"
                    ? "w-[49.5%]"
                    : "w-full"
                }`}
              >
                <FormDatePic
                  register={register}
                  name={item.textField_name}
                  classCu="my-2 w-full"
                />
              </div>
            ) : null;
          })}
        </div>

        <div className="w-full my-2">
          <Button
            className="text-green-600 py-2 px-8 border-[1px] rounded-xl"
            type="submit"
          >
            {" "}
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
