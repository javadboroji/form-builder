import React from "react";
interface IProps {
  data: string;
}

const ComponentName: React.FC<IProps> = ({ data }) => {
  if (data) {
    return (
      <div className="w-full  p-2 my-3">
        <h1 className="text-orange-500 text-3xl p-2"> Form Result</h1>
        {data}
      </div>
    );
  }
};

export default ComponentName;
