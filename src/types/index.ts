export  type TSelectItem = {
    value: string;
    label: string;
  };
  export type TRadioGroupItem = {
    id: string;
    Label: string;
    value: string;
  }
  export type TLoginForm={
    username:string,
    password:string,
    test:string
}
export type TFormType="login"|"register"