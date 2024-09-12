import React, { Component, useEffect, useState } from "react";
import Image from "next/image";
import DialogNav from "../../navigation/DialogNav";
import { ChevronRightIcon } from "@/components/icons/icons";
import OrderProgress from "./OrderProgress";
import OrderOverview from "./OrderOveroverview";
import OrderInfo from "./OrderInfo";
import OrderDocuments from "./OrderDocuments";

interface OrderDialogProps {
    toggleDialog: boolean;
    toggleDialogVisibility: (toggle: boolean) => void;
}


const OrderDialog: React.FC<OrderDialogProps> = ({toggleDialog, toggleDialogVisibility}) => {
 
    const [activity, setActivity] = useState<number>(0);
    const [dialogContent, setDialogContent] = useState(<OrderOverview />)

    useEffect(() => {
        switch(activity) {
            case 0: {
                setDialogContent(<OrderOverview />)
                break
            };
            case 1: {
                setDialogContent(<OrderInfo />)
                break
            };
            case 2: {
                setDialogContent(<OrderProgress />)
                break
            };
            case 3: {
                setDialogContent(<OrderDocuments />)
                break
            };
            default: {
                setDialogContent(<OrderOverview />)
                break
            }
        }
    }, [activity])


    return(
        <div className="flex absolute bg-slate-300/75 w-full h-full z-10 left-0 top-0" style={toggleDialog ? {display: 'flex'} : {display : 'none'}}>

            <div className="relative flex ml-auto top-0 h-full w-1/2 bg-slate-50 text-slate-800 ">
                <div className="relative flex w-10 bg-slate-100 justify-center items-center" onClick={() => toggleDialogVisibility(!toggleDialog)}>
                    <ChevronRightIcon size="10" strokeColor="#3b82f6"/>
                </div>
            <div className="relative flex flex-col ml-auto top-0 h-full w-full bg-slate-50 text-slate-800 pt-8 pb-16 px-24 gap-8">
                <div className="flex flex-row justify-between items-center">            
                    <h3 className="text-blue-default">Auftragsnummer - 0001</h3>
                    <div className="relative flex flex-row justify-center">
                        <div className="relative h-10 w-10 bg-blue-default border-[1px] border-blue-500 rounded-full overflow-hidden left-0">
                            <Image src={"/images/andreas.png"} width={50} height={50} alt="user" />
                        </div>

                        <div className="relative h-10 w-10 bg-blue-default border-[1px] border-orange-400 rounded-full overflow-hidden -left-2">
                            <Image src={"/images/michaela.png"} width={50} height={50} alt="user" />
                        </div>

                        <div className="relative h-10 w-10 bg-blue-default border-[1px] border-green-400 rounded-full overflow-hidden -left-4">
                            <Image src={"/images/jesus.png"} width={50} height={50} alt="user" />
                        </div>
                    </div>
                </div>
                    <DialogNav activity={activity} setActivity={setActivity}/>
               <div className="flex flex-col gap-8 overlflow-scroll">
                    {dialogContent}
               </div> 
            </div>
            </div>
        </div>
    )
}


export default OrderDialog;