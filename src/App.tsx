import "./App.css";
import FormGenerate from "./Pages/FormGenerate/FormGenerate";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
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
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path={"/"}  />
          <Route element={<FormGenerate />} path={"/formGenerate"} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
