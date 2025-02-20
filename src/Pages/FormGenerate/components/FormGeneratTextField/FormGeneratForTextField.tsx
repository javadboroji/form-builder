import FormSelect from "@/components/com/BaseFormItems/FormSelect/FormSelect";
import FormTextFiled from "@/components/com/BaseFormItems/FormTextFiled/FormTextFiled";
import { Button } from "@/components/ui/button";
import { TSelectItem } from "@/types";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IProps {

}
type Inputs = {
  textField_name:string,
  textField_title:string,
  type:string,
  col:string
};

const FormGeneratForTextField: React.FC<IProps> = ({}) => {
  //option
  const optionsFormCol: TSelectItem[] = [
    { label: "col-3", value: "3" },
    { label: "col-6", value: "6" },
    { label: "col-12", value: "12" },
  ];
  //input type
  const inputTypeOption = [
    { label: "number", value: "number" },
    { label: "text", value: "text" },
    { label: "password", value: "password" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="flex flex-col w-full ">
      <span className="text-yellow-500 py-4 text-xl "> TextField</span>
      <form className="flex flex-wrap gap-2 w-full" onSubmit={handleSubmit(onSubmit)}>
        <FormTextFiled
          name="textField_name"
          placeholder="TextFieldName"
          register={register}
          type="text"
          classCu="w-[31%]"
        />
        <FormTextFiled
          name="textField_title"
          placeholder="TextFieldTitle"
          register={register}
          type="text"
          classCu="w-[31%]"
        />
        <FormSelect
          register={register}
          name="type"
          SelectItems={inputTypeOption}
          classCu="w-[31%]"
        />
        <FormSelect
          register={register}
          name="col"
          SelectItems={optionsFormCol}
          classCu="w-[31%]"
        />
        <div className="w-full flex justify-end">
        <Button className="text-green-600 py-1 px-3 border-[1px] rounded-xl" type="submit"> Save</Button>
        </div>
      </form>
    </div>
  );
};

export default FormGeneratForTextField;
