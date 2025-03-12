import React, { ReactNode, useEffect } from "react";

interface IProps {
  col: string;
  children: ReactNode;
}
const ColSm = ({ children }: { children: ReactNode }) => {
  return <div className="w-[33%]">{children}</div>;
};
const ColMedium = ({ children }: { children: ReactNode }) => {
  return <div className="w-[49%.5]">{children}</div>;
};
const ColFull = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};
const WrapFormItemDiv: React.FC<IProps> = ({ col, children }) => {
  if (col === "3") {
    return <ColSm>{children} </ColSm>;
  } else if (col === "6") {
    return <ColMedium>{children}</ColMedium>;
  } else {
    return <ColFull>{children}</ColFull>;
  }
};

export default WrapFormItemDiv;
