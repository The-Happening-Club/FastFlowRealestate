import React from "react";
import { classed } from "@tw-classed/react";
import exp from "constants";
import { ChevronDownIcon } from "../icons/icons";

const ClassedScrollContainer = classed(
  "div",
  "relative grid overflow-auto h-full"
);

const OrderContainer = () => {
  return (
    <div className="relative grid grid-rows-[2rem_1fr] rounded-lg h-[90vh] overflow-hidden">
      <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr_0.5fr] items-center grid-rows-1 w-full px-4 bg-slate-200">
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          0001
        </div>
        <div>Title</div>
        <div>Status</div>
        <div>0001</div>
        <div>0001</div>
        <div>Title</div>
        <div>Status</div>
        <div>0001</div>
      </div>
      <ClassedScrollContainer>
        <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr_0.5fr] items-center grid-rows-1 w-full h-20 px-4 bg-slate-50 border-b">
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            0001
          </div>
          <div>Title</div>
          <div>Status</div>
          <div>0001</div>
          <div>0001</div>
          <div>Title</div>
          <div>Status</div>
          <div>0001</div>
        </div>
      </ClassedScrollContainer>
    </div>
  );
};

export default OrderContainer;
