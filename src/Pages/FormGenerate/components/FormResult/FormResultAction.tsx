import { Button } from "@/components/ui/button";
import React from "react";

function FormResultAction() {
  return (
    <div className="w-full flex justify-end my-2">
      <Button
        className="text-green-600 py-6 px-8 border-[1px] rounded-xl text-xl"
        type="submit"
      >
        {" "}
        Test
      </Button>
      <Button className="text-white text-xl  px-8 mx-4 py-6 rounded-xl bg-blue-900 hover:bg-blue-900">
        SaveForm
      </Button>
    </div>
  );
}

export default FormResultAction;
