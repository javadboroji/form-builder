import { create } from "zustand";
interface formDb {
  textField_name: string;
  textField_title: string;
  type: string;
  col: string;
}
interface IuseFormDb {
  formData: formDb[];
  setFormDb: (newFormItm: formDb) => void;
}
const useFormDb = create<IuseFormDb>((set) => ({
  formData: [],
  setFormDb: (newFormItm: formDb) => {
    set((state) => ({
      formData: [...state.formData, newFormItm],
    }));
  },
}));
export default useFormDb;
