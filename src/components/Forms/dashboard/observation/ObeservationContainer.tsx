import React from "react";

const ObservationContainer = () => {
    return(
            <div className="flex flex-col w-full h-full gap-8 mx-8 mt-8 mb-16">
                <div className="flex">
                <div className="flex w-1/4 h-56 rounded-lg p-4 bg-slate-100">
                        <h3 className="text-slate-600 font-semibold">Letzten Aufträge</h3>
                </div>
                </div>
                <div className="flex">
                <div className="flex w-1/4 h-56 rounded-lg p-4 bg-slate-100">
                        <h3 className="text-slate-600 font-semibold">Nachrichten</h3>
                </div>
                </div>
            </div>
    )
}

export default ObservationContainer;