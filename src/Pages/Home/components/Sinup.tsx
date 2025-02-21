import FormTextFiled from "@/components/com/BaseFormItems/FormTextFiled/FormTextFiled";
import { Button } from "@/components/ui/button";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {}
interface Inputs {
  fristName: string;
  lastName: string;
  email: string;
}
const Sinup: React.FC<IProps> = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className=" flex justify-center my-3">
      <form
        className="flex flex-wrap gap-4 w-[35% ] p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormTextFiled
          name="fristName"
          placeholder="fristName"
          register={register}
          type="text"
          classCu="w-[70%] mx-auto"
        />
        <FormTextFiled
          name="lastName"
          placeholder="lastName"
          register={register}
          type="text"
          classCu="w-[70%] mx-auto"
        />
        <FormTextFiled
          name="email"
          placeholder="email"
          register={register}
          type="text"
          classCu="w-[70%] mx-auto"
        />
        <div className="w-full flex justify-end">
          <Button
            className="text-green-600 py-1 px-3 border-[1px] rounded-xl"
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

export default Sinup;
