import { formDb } from "@/Store/FormDB";
import React, { ReactNode, useEffect, useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import ReactDOMServer from "react-dom/server";
import FormResultAction from "./FormResultAction";
interface IProps {
  result: ReactNode;
}
const PreviewCod: React.FC<IProps> = ({ result }) => {
  const codeExample = `
  function Form() {
    return (
       <form  className="flex flex-col w-[80%] border-[1px] border-gray-200 p-3 rounded-xl" >
                ${ReactDOMServer.renderToString(result)}
        </form>);
         }
    render(<Form />);`;
  return (
    <LiveProvider code={codeExample} noInline>
      <div className=" shadow-md bg-gray-50">
        {/* ویرایشگر کد */}
        <LiveEditor
          language="en"
          style={{
            direction: "ltr",
            textAlign: "left",
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            textAlignLast: "left",
          }}
          className="border p-2 rounded-md bg-white"
        />
        {/* نمایش خروجی کد */}
        <div className=" p-4 mt-2">
          <LivePreview />
        </div>
        {/* نمایش ارورها */}
        <LiveError className="text-red-500 mt-2" />
      </div>
    </LiveProvider>
  );
};

export default PreviewCod;
