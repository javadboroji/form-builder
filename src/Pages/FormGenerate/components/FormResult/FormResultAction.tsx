import { Button } from "@/components/ui/button";
import React from "react";

function FormResultAction() {
  return (
    <div className="w-full flex justify-end my-2">
      <Button
        className="text-green-600 py-4 px-8 border-[1px] rounded-xl text-md"
        type="submit"
      >
        {" "}
        Test
      </Button>
      <Button className="text-white text-md  px-8 mx-4 py-4 rounded-xl bg-blue-900 hover:bg-blue-900">
        SaveForm
      </Button>
    </div>
  );
}

export default FormResultAction;
