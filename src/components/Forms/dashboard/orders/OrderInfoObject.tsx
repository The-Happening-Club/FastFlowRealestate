import React, { useState } from "react";
import Image from "next/image";

import { ChevronDownIcon, ChevronUpIcon, PenIcon } from "@/components/icons/icons";

const OrderInfoObject = () => {
    
    const [contactToggle, toggleContact] = useState(false)

    return(
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
            <h4 className="font-semibold text-slate-600">Objekt</h4>
            <PenIcon  size="15" fillColor="#4c66ff"/>
        </div>
        <div className="flex gap-10">
            <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                        <span>Name:</span>
                        <span>WEG 250</span>
                </div>
                <div className="flex gap-2">
                        <span>Adresse:</span>
                        <div className="flex flex-col">   
                            <span>Kastanien Weg 3</span>
                            <span>82008, Unterhaching</span>
                        </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                        <span>Parteien:</span>
                        <span>200</span>
                </div>
                <div className="flex gap-4">
                        <span>Kontakt:</span>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center z-20 gap-3" onClick={() => toggleContact(!contactToggle)}>
                                 <span>Hr. Meyer</span>
                                {
                                    contactToggle ? 
                                    <ChevronUpIcon size="10" strokeColor="black"/> :
                                    <ChevronDownIcon size="10" strokeColor="black"/> 
                                }
                            </div>
                            {
                                contactToggle ?
                                <div className="absolute mt-60 min-w-80">

                                    <div className="relative flex flex-col items-center z-10  bg-slate-50 drop-shadow-lg top-8 -left-1/2 px-2 pb-8 rounded-lg overflow-hidden">
                                        <div className="flex justify-center items-center h-8 " onClick={() => toggleContact(!contactToggle)}>
                                            <ChevronUpIcon size="10" strokeColor="#4c66ff" strokeWidth="8"/>
                                        </div>  
                                        <div className="relative flex justify-center bg-orange-200 w-full mb-14 rounded-md">
                                            <div className="relative h-35 w-35 flex items-center justify-center rounded-full overflow-hidden -bottom-10">
                                                <Image src={"/images/andreas.png"} width={100} height={200} alt="user" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full gap-6 text-slate-600">
                                             <span>Name: Herr Mayer Fritz</span>
                                             <span>Tel: 01636055819</span>
                                        </div>
                                    </div>
                                </div> :
                                null
                            }
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default OrderInfoObject;