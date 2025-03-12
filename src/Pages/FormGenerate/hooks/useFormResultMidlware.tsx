import FormDatePic from "@/components/com/BaseFormItems/DatePicker/FormDatePick";
import FormSelect from "@/components/com/BaseFormItems/FormSelect/FormSelect";
import FormTextFiled from "@/components/com/BaseFormItems/FormTextFiled/FormTextFiled";
import { formDb } from "@/Store/FormDB";
import {  UseFormRegister } from "react-hook-form";
import WrapFormItemDiv from "../components/FormResult/WrapFormItemDiv";

interface IFormResultMidlware {
  data: formDb[];
  register: UseFormRegister<any>;
}

const useFormResultMidlware = ({ data, register }: IFormResultMidlware) => {
 
  const renderComponent = (type: string, data: formDb) => {
    switch (type) {
      case "textField":
        return(
          <WrapFormItemDiv col={data.col}>
            <FormTextFiled
              name={data.textField_name}
              placeholder={data.textField_title}
              register={register}
              type="text"
              classCu="my-2"
            />
          </WrapFormItemDiv>
        );
       
      case "select":
        return(
          <WrapFormItemDiv col={data.col}>
            <FormSelect
              register={register}
              name={data.textField_name}
              SelectItems={data?.options || []}
              classCu="my-2 w-full"
            />
          </WrapFormItemDiv>
        );
       
      case "date":
        return(
          <WrapFormItemDiv col={data.col}>
            <FormDatePic
              register={register}
              name={data.textField_name}
              classCu="my-2 w-full"
            />
          </WrapFormItemDiv>
        );
       
      default:
        return null;
    }
  };

  return { ComponentResult:data.map((item) => renderComponent(item.type, item)) };
};

export default useFormResultMidlware;
