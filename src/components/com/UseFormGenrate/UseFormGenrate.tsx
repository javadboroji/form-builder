import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useFormItems from "./useFormItems";
import { TLoginForm } from "@/types";

interface IProps {
  formType: "Login";
}

const UseFormGenrate: React.FC<IProps> = ({ formType }) => {
  const onSubmit: SubmitHandler<TLoginForm> = (data) => console.log(data);

  const { renderForm, handleSubmit } = useFormItems();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderForm()}
      <input type="submit" />
    </form>
  );
};

export default UseFormGenrate;
