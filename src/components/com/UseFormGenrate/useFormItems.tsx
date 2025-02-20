import { useForm } from "react-hook-form";
import FormTextFiled from "../BaseFormItems/FormTextFiled/FormTextFiled";
import { TLoginForm } from "@/types";

const useFormItems = () => {
  //login form userName and password
    const { register, handleSubmit } = useForm<TLoginForm>();
  const renderForm = () => {    
    return (
      <>
        <FormTextFiled register={register} type="text" name="username" placeholder="userName" />
        <FormTextFiled register={register} type="password" name="password" placeholder="password" />
      </>
    );
  };
  
  return { renderForm ,handleSubmit};
};
export default useFormItems;
