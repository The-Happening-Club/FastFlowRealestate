"use client";

import React, { useState } from "react";
import { classed } from "@tw-classed/react";

import SideNav from "@/components/Navigation/SideNav";
import OrderContainer from "@/components/Orders/OrderContainer";

// Constants die importiert werden müssen
const user = "Andreas Sanchez Paetzmann";

const ClassedContentContainer = classed(
  "main",
  "grid grid-rows-[2rem_1fr] gap-2 bg-slate-50 text-slate-800 p-4"
);

const ClassedDashboardHeader = classed("div", "text-2xl px-4");

export default function Main() {
  const [colapseNav, setColapse] = useState(false);

  const toggleColapse = () => {
    setColapse(!colapseNav);
  };

  const ClassedDashboard = classed(
    "div",
    `fixed grid bg-blue-default w-screen h-screen ${
      colapseNav ? "grid-cols-[8rem_1fr]" : "grid-cols-[16rem_1fr]"
    } transition-all duration-700 ease-out`
  );

  return (
    <ClassedDashboard>
      <SideNav user={user} colapsed={toggleColapse} />
      <ClassedContentContainer>
        <ClassedDashboardHeader>Aufträge</ClassedDashboardHeader>
        <OrderContainer />
      </ClassedContentContainer>
    </ClassedDashboard>
  );
}
