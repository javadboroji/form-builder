import FormSelect from "@/components/com/BaseFormItems/FormSelect/FormSelect";
import FormTextFiled from "@/components/com/BaseFormItems/FormTextFiled/FormTextFiled";
import { Button } from "@/components/ui/button";
import { TSelectItem } from "@/types";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import OptionGen from "./OptionGen";
import FormSelectOption from "@/Store/FormSelectOption";
import useFormDb from "@/Store/FormDB";

type FormGenSelectProps = {
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
};
type Inputs = {
  textField_name: string;
  textField_title: string;
  type: string;
  col: string;
  options: string[];
};
const FormGenSelect: React.FC<FormGenSelectProps> = ({ setopen }) => {
  //option
  const optionsFormCol: TSelectItem[] = [
    { label: "col-3", value: "3" },
    { label: "col-6", value: "6" },
    { label: "col-12", value: "12" },
  ];
  // useform config
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  //*select option give values
  const { options, setOPtion } = FormSelectOption();

  //*Submit Form
  const { setFormDb } = useFormDb();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormDb({ ...data, options: options, type: "select" });
    setopen(false);
  };

  useEffect(() => {
    return () => {
      setOPtion([]);
    };
  }, []);

  return (
    <div className="flex flex-col w-full ">
      <span className="text-yellow-600 py-4 text-xl "> Select</span>
      <form
        className="flex flex-wrap gap-2 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-[31%]">
          <FormTextFiled
            name="textField_name"
            placeholder="TextFieldName"
            register={register}
            type="text"
          />
        </div>

        <div className="w-[33%]">
          <FormTextFiled
            name="textField_title"
            placeholder="TextFieldTitle"
            register={register}
            type="text"
          />
        </div>

        <FormSelect
          register={register}
          name="col"
          SelectItems={optionsFormCol}
          classCu="w-[31%]"
        />
        <div className="w-full pe-5">
          {" "}
          <OptionGen />
        </div>
        <div className="w-full flex justify-end">
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
};

export default FormGenSelect;
