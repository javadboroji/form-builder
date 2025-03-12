
import { Button } from "@/components/ui/button";
import useFormDb from "@/Store/FormDB";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFormResultMidlware from "../../hooks/useFormResultMidlware";

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
        <div className="flex flex-wrap  items-center">
         
          {ComponentResult}
        </div>

        <div className="w-full flex justify-end my-2">
          <Button
            className="text-green-600 py-6 px-8 border-[1px] rounded-xl text-xl"
            type="submit"
          >
            {" "}
            Test
          </Button>
          <Button className="text-white text-xl  px-8 mx-4 py-6 rounded-xl bg-blue-900 hover:bg-blue-900">
            SaveForm
          </Button>
        </div>
      </form>
      <div className="w-full  p-2 my-3">
        <h1 className="text-orange-500 text-3xl p-2"> Form Result</h1>
        {data && JSON.stringify(data)}
      </div>
    </div>
  );
};
export default FormResult;
