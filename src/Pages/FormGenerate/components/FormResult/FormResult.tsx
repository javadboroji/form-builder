import { Button } from "@/components/ui/button";
import useFormDb from "@/Store/FormDB";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFormResultMidlware from "../../hooks/useFormResultMidlware";
import FormResultAction from "./FormResultAction";
import FormResultJson from "./FormResultJson";
const FormResult = <T,>() => {
  const { formData } = useFormDb();

  const [data, setData] = useState<T>({} as T);

  //* useFoem Config
  const { register, handleSubmit } = useForm<any>();

  const { ComponentResult } = useFormResultMidlware({
    data: formData,
    register: register,
  });

  //*Submit Form
  const onSubmit = <T,>(data: T) => {
    setData(data);
  };
  return (
    <div className="w-full flex justify-center flex-col items-center shadow-lg p-2 my-3">
      <form
        className="flex flex-col w-[80%] border-[1px] border-gray-200 p-3 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap  items-center">{ComponentResult}</div>

        <FormResultAction />
      </form>
      <FormResultJson data={JSON.stringify(data)} />
    </div>
  );
};
export default FormResult;
