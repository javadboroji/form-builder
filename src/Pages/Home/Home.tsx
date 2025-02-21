import React from "react";
import banner from "@/assets/demo-lander-ill-3.png";
import Sinup from "./components/Sinup";
interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto flex items-center justify-en banner-shap-befor">
        <div className="p-2 w-[30%]">
          <h1 className="text-3xl text-orange-600 font-bold"> Form Builder</h1>
          <p className="text-left text-justify text-xl p-2 leading-10 text-indigo-900">
            Welcome to Our Form Builder App! Our powerful form builder utilizes
            cutting-edge technologies like React-TypeScript, useForm, and Zod to
            deliver a seamless and efficient experience. Whether you're creating
            simple contact forms or complex surveys, our platform ensures ease
            of use, flexibility, and robust validation. Is there anything else
            you'd like to add or modify?
          </p>
        </div>
        <div className="w-[60%] baner-shap">
          <img src={banner} alt="banner" />
        </div>
      </div>
        <div>
            <p className="text-3xl font-medium">Get Started With Your Free Form-builder Forms Demo</p>
                <Sinup/>
        </div>
    </div>
  );
};

export default Home;
