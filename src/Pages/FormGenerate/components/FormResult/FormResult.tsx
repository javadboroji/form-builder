import useFormDb from "@/Store/FormDB";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFormResultMidlware from "../../hooks/useFormResultMidlware";
import FormResultAction from "./FormResultAction";
import FormResultJson from "./FormResultJson";
import PreviewCod from "./PreviewCod";
import useGenComponentToString from "../../hooks/useGenComponentToString";

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
const FormResult = <T,>() => {
  const { formData } = useFormDb();

  const [data, setData] = useState<T>({} as T);
  const [activeTab, setActiveTab] = useState("");
  const handleTabClick = (value:string) => {
    setActiveTab(value);
  };
  //* useFoem Config
  const { register, handleSubmit } = useForm<any>();

  const { ComponentResult } = useFormResultMidlware({
    data: formData,
    register: register,
  });
  useGenComponentToString({ data: formData, register: register });
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
      <Tabs defaultValue="result" className="w-full p-3">
        <TabsList className=" w-fit   px-4 flex justify-start gap-6">
          <TabsTrigger className={`${activeTab==="result"? 'text-orange-400':'text-black'} rounded-xl border-[1px] p-2`}  value="result"    onClick={() => handleTabClick('result')}> Form-Result</TabsTrigger>
          <TabsTrigger className={`${activeTab==="code"? 'text-orange-400':'text-black'} rounded-xl border-[1px] p-2`} value="code"    onClick={() => handleTabClick('code')}>Form-Code</TabsTrigger>
        </TabsList>
        <TabsContent value="result">
          <FormResultJson data={JSON.stringify(data)} />
        </TabsContent>
        <TabsContent value="code">
          <div className="w-full">
            <PreviewCod result={ComponentResult} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default FormResult;
