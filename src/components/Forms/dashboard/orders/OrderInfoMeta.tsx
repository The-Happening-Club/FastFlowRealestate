import React from "react";
import { PenIcon } from "@/components/icons/icons";

const OrderInfoMeta = () => {

    return(
        <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
            <h4 className="font-semibold text-slate-600">Meta</h4>
            <PenIcon  size="15" fillColor="#4c66ff"/>
        </div>
        <div className="flex gap-10">
            <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                        <span>Angelegt:</span>
                        <span>16.3.24 • 13:30</span>
                </div>
                <div className="flex gap-2">
                        <span>Von:</span>
                        <span>Andreas, Sanchez Paetzmann</span>
                </div>
                <div className="flex gap-2">
                        <span>Prio:</span>
                        <div className="w-fit px-3 rounded-sm text-center bg-red-500 text-red-800">
                            <p>Hoch</p>
                        </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                        <span>Deadline:</span>
                        <span>26.02.25</span>
                </div>
                <div className="flex gap-4">
                        <span>An:</span>
                        <span>Jesus, Sanchez Gonzalez</span>
                </div>
                <div className="flex gap-4">
                        <span>Status:</span>
                        <span>in Arbeit</span>
                </div>
               
            </div>
        </div>
    </div>
    )
}

export default OrderInfoMeta;