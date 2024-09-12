import React from "react";
import { PenIcon } from "@/components/icons/icons";

const OrderInfoContact = () => {

    return(
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
            <h4 className="font-semibold text-slate-600">Zuständige Auftragnehmer</h4>
            <PenIcon  size="15" fillColor="#4c66ff"/>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row w-full mb-2">
                <div className="flex w-1/4 text-slate-500 font-medium">
                    <span>Name</span>
                </div>
                <div className="flex w-1/4 text-slate-500 font-medium">
                    <span>Firma</span>
                </div>
                <div className="flex w-1/4 text-slate-500 font-medium">
                    <span>Nummer</span>
                </div>
                <div className="flex w-1/4 text-slate-500 font-medium">
                    <span>E-Mail</span>
                </div>
            </div>
            <div className="flex flex-row w-full overflow-hidden">
                <div className="flex w-1/4">
                    <span>Mirsard Hanusevic</span>
                </div>
                <div className="flex w-1/4 overflow-hidden">
                    <span>Malerei Hanusevic</span>
                </div>
                <div className="flex w-1/4 overflow-hidden">
                    <span>+49 163 60 55 819</span>
                </div>
                <div className="flex w-1/4 overflow-hidden">
                    <span>info@email-maler.com</span>
                </div>
            </div>

        </div>
    </div>
    )
}

export default OrderInfoContact;