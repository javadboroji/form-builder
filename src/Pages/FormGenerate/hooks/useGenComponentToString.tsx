import { formDb } from "@/Store/FormDB";
import WrapFormItemDiv from "../components/FormResult/WrapFormItemDiv";
import FormTextFiled from "@/components/com/BaseFormItems/FormTextFiled/FormTextFiled";
import { UseFormRegister } from "react-hook-form";
import FormSelect from "@/components/com/BaseFormItems/FormSelect/FormSelect";
import FormDatePic from "@/components/com/BaseFormItems/DatePicker/FormDatePick";
import ReactDOMServer from "react-dom/server";

interface IComponentToString{
     data: formDb[];
     register: UseFormRegister<any>;
}
const useGenComponentToString=({data,register}:IComponentToString)=>{
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
    const str1=data.map(item=>(renderComponent(item.type, item)))
      console.log(str1);
      return {str1}
}
export default useGenComponentToString