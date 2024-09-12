import DragAndDropArea from "@/components/Functional/DragAndDropArea";
import { LikeIcon, ImageIcon, UploadFilesIcon } from "@/components/icons/icons";
import React from "react";

const OrderDocuments = () => {

    return(
        <>
        <div className="flex flex-col items-center bg-slate-300 rounded-xl pt-4 px-2 pb-8 min-h-80 max-h-[700px] mb-10 overflow-scroll gap-3">
            <div className="flex w-full bg-slate-50 rounded-lg items-center px-4 py-2 gap-4">
                <ImageIcon height={30} fillColor="#4c66ff"/>
                <span>Foto Gespringener Spiegel</span>
            </div>
            <div className="flex w-full bg-slate-50 rounded-lg items-center px-4 py-2 gap-4">
                <ImageIcon height={30} fillColor="#4c66ff"/>
                <span>Foto Gespringener Spiegel</span>
            </div>


         
        </div>
        <div className="flex flex-col gap-6">
            <DragAndDropArea /> 
            <div className="flex w-full justify-center">
                <button className="bg-blue-default text-slate-50 px-4 py-2 rounded-md">Hochladen</button>
            </div>
        </div>
        </>
    )
}

export default OrderDocuments;