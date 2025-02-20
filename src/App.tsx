import "./App.css";
import FormDatePicker from "./components/com/BaseFormItems/DatePicker/FormDatePicker";
import FormRatioGrop from "./components/com/BaseFormItems/FormRatioGrop/FormRatioGrop";
import FormSelect from "./components/com/BaseFormItems/FormSelect/FormSelect";
import FormTextFiled from "./components/com/BaseFormItems/FormTextFiled/FormTextFiled";
import UseFormGenrate from "./components/com/UseFormGenrate/UseFormGenrate";
const selects = [
  { value: "1", label: "jems" },
  { value: "2", label: "jeson" },
];
const radioGroupItems = [
  {
    id: "01",
    Label: "dark",
    value: "dark",
  },
  {
    id: "02",
    Label: "ligth",
    value: "ligth",
  },
];
function App() {
  return (
    <div className="">
     <UseFormGenrate formType="Login"/>
    </div>
  );
}

export default App;
