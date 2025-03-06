import { TSelectItem } from "@/types";
import { create } from "zustand";
interface IFormSelectOption {
  options: TSelectItem[];
  setOPtion: (type: TSelectItem[]) => void;
}
const FormSelectOption = create<IFormSelectOption>((set) => ({
  options: [],
  setOPtion: (options) => {
    set(() => ({
      options: options,
    }));
  },
}));
export default FormSelectOption;
