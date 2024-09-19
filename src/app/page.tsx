'use client'

import ObservationContainer from "@/components/Forms/dashboard/observation/ObeservationContainer";
import OrderDialog from "@/components/Forms/dashboard/orders/OrderDialog";
import Orders from "@/components/Forms/dashboard/orders/Orders";
import { SideNav } from "@/components/Forms/navigation/SideNav";
import TopNav from "@/components/Forms/navigation/TopNav";
import { useState } from "react";

export default function Home() {
  // Initialisiere den State mit dem Standard-Content
  const [content, setContent] = useState<JSX.Element>(<ObservationContainer />);

  const handleItemSelect = (item: string) => {
    if (item === 'Aufträge') {
      setContent(<Orders />); // Setze die ausgewählte Komponente in den State
    } else {
      setContent(<ObservationContainer />); // Fallback für den Standardcontent
    }
  }

  return (
    <div className="flex flex-col h-screen w-svw  bg-slate-50 overflow-hidden">
      <TopNav />
      <main className="flex flex-grow flex-row items-start justify-between overflow-hidden">
        <SideNav user="Andreas" onItemSelected={handleItemSelect} />
        <div className="sticky flex flex-grow justify-center rounded-lg bg-slate-100 items-center max-h-screen min-h-1/2 w-full overflow-y-auto">
          {/* Verwende den State `content` zum Rendern der ausgewählten Komponente */}
          {content}
        </div>
      </main>
    </div>
  );
}