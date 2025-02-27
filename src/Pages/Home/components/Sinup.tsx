import FormTextFiled from "@/components/com/BaseFormItems/FormTextFiled/FormTextFiled";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { redirect, useNavigate } from "react-router";

interface IProps {}
interface Inputs {
  fristName: string;
  lastName: string;
  email: string;
}
const Sinup: React.FC<IProps> = ({}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>{
    localStorage.setItem("user_test",JSON.stringify(data))
    navigate("/formGenerate")
  }

  return (
    <div className=" flex justify-center my-3">
      <form
        className="flex flex-wrap gap-4 w-[30% ] p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormTextFiled
          name="fristName"
          placeholder="fristName"
          register={register}
          type="text"
          classCu="w-[70%] mx-auto"
          validation={{ required: " fristName is required" }}
          error={errors?.fristName}
        />
        <FormTextFiled
          name="lastName"
          placeholder="lastName"
          register={register}
          type="text"
          classCu="w-[70%] mx-auto"
          validation={{ required: " lastName is required" }}
          error={errors?.lastName}
        />
        <FormTextFiled
          name="email"
          placeholder="email"
          register={register}
          type="text"
          classCu="w-[70%] mx-auto"
          validation={{ required: " email is required" }}
          error={errors?.email}
        />
        <div className="w-full flex">
          <Button
            className="text-white mx-auto rounded-[8px]  py-6 px-3 bg-blue-900 hover:bg-blue-900"
            type="submit"
          >
            {" "}
            Im Ready.Lets Build Some Form
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Sinup;
