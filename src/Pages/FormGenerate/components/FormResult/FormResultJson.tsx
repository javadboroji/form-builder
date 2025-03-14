import React from "react";
interface IProps {
  data: string;
}

const ComponentName: React.FC<IProps> = ({ data }) => {
  if (data !="") {
    return (
      <div className="w-full  p-2 my-3">
        {data}
      </div>
    );
  }
};

export default ComponentName;
