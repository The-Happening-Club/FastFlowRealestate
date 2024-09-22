import React from "react";
import { useState } from "react";
import { classed } from "@tw-classed/react";

interface ISideNav {
  user: String;
  colapsed: () => void;
}

const SideNav: React.FC<ISideNav> = ({ user, colapsed }) => {
  return (
    <nav className="grid grid-cols-1 grid-rows-[3rem_1fr_3rem] px-4 py-8">
      <div className="" onClick={colapsed}>
        Welcome {user}
      </div>
      <div className="">kontakt</div>
      <div className="flex justify-center items-center w-full gap-4">
        <div className="h-full aspect-square bg-slate-100 rounded-full"></div>
        <div className="flex flex-col w-full overflow-hidden">
          <div className="text-sm w-full text-nowrap h-full overflow-hidden text-ellipsis">
            Michaela Paetzmann
          </div>
          <div className="text-xs">Einstellungen</div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
