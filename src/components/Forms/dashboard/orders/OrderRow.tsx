'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import OrderDialog from "./OrderDialog";
import OrderPrioIndicator from "./OrderPrioIndicator";
import { GrapDotIcon } from "@/components/icons/icons";
import OrderStatusIndicator from "./OrderStatusIndicator";


interface IOrderRow {
    deadline: string,
    title: string,
    objNumber: string,
}

const OrderRow: React.FC<IOrderRow> = ({deadline, title, objNumber}) => {


    const [toggleDialog, toggleDialogVisibility] = useState(false)
    const [togglePrio, togglePrioVisibility] = useState(false)
    const [toggleStatus, toggleStatusVisibility] = useState(false)
    const [rowOffSet, setRowOffSet] = useState(false)
    const [isDeadlineNear, setDeadlineIsNear] = useState(false)
    const [newPrio, setPrio] = useState<number | null>(null)
    const [newStatus, setStatus] = useState<number | null>(null)

    useEffect(()=> {
        const checkDeadline = () => {
            const today = new Date();
            const deadlineDate = new Date(deadline)
            const timeDiffrence = deadlineDate.getTime() - today.getTime()
            const daysRemaining = timeDiffrence / (1000 *3600 *24)

            if (daysRemaining <= 3) {
                setDeadlineIsNear(true)
            }
        }
        checkDeadline()
    }, [deadline])

    const optionToggle = () => {
        setRowOffSet(!rowOffSet)
    }


    return (
        <>
            <div className="grid grid-cols-9 w-full gap-4 max-h-24 justify-between items-center border-b-2 text-slate-600 hover:bg-slate-200 py-4" onDoubleClick={()=>toggleDialogVisibility(!toggleDialog)}>

                <div className="flex flex-row gap-2 w-full px-4">
                        <input type="checkbox"/>
                        <div className="truncate text-sm font-medium leading-6">00001</div>
                </div>

       
                <div className="w-full  ">
                        <div className="text-blue-default/80 text-sm font-semibold leading-6">{objNumber}</div>
                </div>
 
                        <span className="text-sm font-light whitespace-nowrap overflow-hidden max-h-10 overflow-ellipsis">{title}</span>


                <div className="w-full  " >
                        <div className="text-sm font-light leading-6 ">Hr. Meyer</div>
                </div>

                <div className="w-full  ">
                        <div className="truncate text-sm font-medium leading-6" style={isDeadlineNear ? {color: "#f86c6a "} : {color: "#475569"}} >{deadline}</div>
                </div>
    
        
                <div className="relative flex flex-row  w-full  ">
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



                    <div className="realtive w-full ">
                        <div onClick={() => togglePrioVisibility(!togglePrio)}>                        
                          <OrderPrioIndicator rank={newPrio ? newPrio : 0} />
                        </div>
                        <div className="absolute z-30 h-fit bg-slate-50 drop-shadow-md p-2" style={togglePrio ? {display: 'flex'} : {display: 'none'}}>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center bg-slate-100 p-2 rounded-md gap-1" onClick={() => {setPrio(0); togglePrioVisibility(!togglePrio)}}>
                                    <GrapDotIcon size="15" fillColor="#94a3b8"/>
                                    <OrderPrioIndicator rank={0} />
                                </div>
                                <div className="flex items-center bg-slate-100 p-2 rounded-md gap-1" onClick={() => {setPrio(1); togglePrioVisibility(!togglePrio)}}>
                                    <GrapDotIcon size="15" fillColor="#94a3b8"/>
                                    <OrderPrioIndicator rank={1} />
                                </div>
                                <div className="flex items-center bg-slate-100 p-2 rounded-md gap-1" onClick={() => {setPrio(2); togglePrioVisibility(!togglePrio)}}>
                                    <GrapDotIcon size="15" fillColor="#94a3b8"/>
                                    <OrderPrioIndicator rank={2} />
                                </div>
                                <div className="flex items-center bg-slate-100 p-2 rounded-md gap-1" onClick={() => {setPrio(3); togglePrioVisibility(!togglePrio)}}>
                                <GrapDotIcon size="15" fillColor="#94a3b8"/>
                                    <OrderPrioIndicator rank={3} />
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="realtive w-full ">
                        <div onClick={() => toggleStatusVisibility(!toggleStatus)}>                        
                          <OrderStatusIndicator rank={newStatus ? newStatus : 0} />
                        </div>
                        <div className="absolute z-30 h-fit bg-slate-50 drop-shadow-md p-2" style={toggleStatus ? {display: 'flex'} : {display: 'none'}}>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center bg-slate-100 p-2 rounded-md gap-1" onClick={() => {setStatus(0); toggleStatusVisibility(!toggleStatus)}}>
                                    <OrderStatusIndicator rank={0}/>
                                </div>
                                <div className="flex items-center bg-slate-100 p-2 rounded-md gap-1" onClick={() => {setStatus(1); toggleStatusVisibility(!toggleStatus)}}>
                                    <OrderStatusIndicator rank={1}/>
                                </div>
                                <div className="flex items-center bg-slate-100 p-2 rounded-md gap-1" onClick={() => {setStatus(2); toggleStatusVisibility(!toggleStatus)}}>
                                    <OrderStatusIndicator rank={2}/>
                                </div>
                                <div className="flex items-center bg-slate-100 p-2 rounded-md gap-1" onClick={() => {setStatus(3); toggleStatusVisibility(!toggleStatus)}}>
                                    <OrderStatusIndicator rank={3}/>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="w-full " >
                        <div className="truncate text-sm font-medium leading-6 ">…</div>
                </div>

            </div>

        <OrderDialog toggleDialog={toggleDialog} toggleDialogVisibility={toggleDialogVisibility}/>   
        </>
    )
}

export default OrderRow 