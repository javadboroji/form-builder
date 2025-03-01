import { create } from "zustand";
interface IFormItemTypeSelect {
  formType: string;
  setFormType: (type: string) => void;
}
const FormItemTypeSelect = create<IFormItemTypeSelect>((set) => ({
  formType: "",
  setFormType: (type) => {
    set(() => ({
      formType: type,
    }));
  },
}));
export default FormItemTypeSelect;
