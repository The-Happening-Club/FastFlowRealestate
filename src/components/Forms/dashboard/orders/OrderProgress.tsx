import { EyeOpenIcon, PlusIcon } from "@/components/icons/icons";
import React from "react";

const OrderProgress = () => {

    return(
        <div className="flex flex-col items-center bg-slate-300 rounded-xl pt-4 px-2 pb-8 min-h-80 max-h-[700px] mb-10 overflow-scroll">
            <div className="flex flex-col px-8 items-center justify-center w-full gap-2 mb-2">
                <div className="flex w-full items-center bg-slate-50 py-1 px-2 rounded-lg gap-4">
                    <EyeOpenIcon size="40" strokeColor="#4c66ff" fillColor="#4c66ff" />
                    <div className="flex flex-col">
                        <span>Task 00001 wurde Angelegt</span>
                        <span>Von Andreas S.P am 16.03.24</span>
                    </div>
                </div>
                    <div className="flex bg-slate-700 rounded-md w-1 h-10"></div>
            </div>
            <div className="flex flex-col px-8 items-center justify-center w-full gap-2 mb-2">
                <div className="flex w-full items-center bg-slate-50 py-1 px-2 rounded-lg gap-4">
                    <EyeOpenIcon size="40" strokeColor="#4c66ff" fillColor="#4c66ff" />
                    <div className="flex flex-col">
                        <span>Task 00001 wurde Angelegt</span>
                        <span>Von Andreas S.P am 16.03.24</span>
                    </div>
                </div>
                    <div className="flex bg-slate-700 rounded-md w-1 h-10"></div>
            </div>
            <div className="flex flex-col px-8 items-center justify-center w-full gap-2 mb-2">
                <div className="flex w-full items-center bg-slate-50 py-1 px-2 rounded-lg gap-4">
                    <EyeOpenIcon size="40" strokeColor="#4c66ff" fillColor="#4c66ff" />
                    <div className="flex flex-col">
                        <span>Task 00001 wurde Angelegt</span>
                        <span>Von Andreas S.P am 16.03.24</span>
                    </div>
                </div>
                    <div className="flex bg-slate-700 rounded-md w-1 h-10"></div>
            </div>
            <div className="flex flex-col px-8 items-center justify-center w-full gap-2 mb-2">
                <div className="flex w-full items-center bg-slate-50 py-1 px-2 rounded-lg gap-4">
                    <EyeOpenIcon size="40" strokeColor="#4c66ff" fillColor="#4c66ff" />
                    <div className="flex flex-col">
                        <span>Task 00001 wurde Angelegt</span>
                        <span>Von Andreas S.P am 16.03.24</span>
                    </div>
                </div>
                    <div className="flex bg-slate-700 rounded-md w-1 h-10"></div>
            </div>
            <div className="flex flex-col px-8 items-center justify-center w-full gap-2 mb-2">
                <div className="flex w-full items-center bg-slate-50 py-1 px-2 rounded-lg gap-4">
                    <EyeOpenIcon size="40" strokeColor="#4c66ff" fillColor="#4c66ff" />
                    <div className="flex flex-col">
                        <span>Task 00001 wurde Angelegt</span>
                        <span>Von Andreas S.P am 16.03.24</span>
                    </div>
                </div>
                    <div className="flex bg-slate-700 rounded-md w-1 h-10"></div>
            </div>
            <div className="flex flex-col px-8 items-center justify-center w-full gap-2 mb-2">
                <div className="flex w-full items-center bg-slate-50 py-1 px-2 rounded-lg gap-4">
                    <EyeOpenIcon size="40" strokeColor="#4c66ff" fillColor="#4c66ff" />
                    <div className="flex flex-col">
                        <span>Task 00001 wurde Angelegt</span>
                        <span>Von Andreas S.P am 16.03.24</span>
                    </div>
                </div>
                    <div className="flex bg-slate-700 rounded-md w-1 h-10"></div>
            </div>
            <div className="flex flex-col px-8 items-center justify-center w-full gap-2 mb-2">
                <div className="flex w-full items-center bg-slate-50 py-1 px-2 rounded-lg gap-4">
                    <EyeOpenIcon size="40" strokeColor="#4c66ff" fillColor="#4c66ff" />
                    <div className="flex flex-col">
                        <span>Task 00001 wurde Angelegt</span>
                        <span>Von Andreas S.P am 16.03.24</span>
                    </div>
                </div>
                    <div className="flex bg-slate-700 rounded-md w-1 h-10"></div>
            </div>
            <div className="flex aspect-square px-4 py-4 w-14 h-14 bg-blue-default rounded-lg justify-center items-center">
                <PlusIcon size="20" strokeColor="#fff"/>
            </div>
            <div className="absolute flex flex-col justify-center items-center px-4 top-1/2 bg-red-500 w-1/2 h-56">
                <div className=" relativeflex w-full bg-slate-50">
                    <input type="color" />
                </div>
            </div>
        </div>
    )
}

export default OrderProgress;