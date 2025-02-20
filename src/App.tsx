import "./App.css";
import FormGenerate from "./Pages/FormGenerate/FormGenerate";
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
    <div className="w-full">
      <FormGenerate />
    </div>
  );
}

export default App;
