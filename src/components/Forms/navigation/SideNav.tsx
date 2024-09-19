import { ChevronLeftIcon, ChevronRightIcon, OrderStrokedIcon } from "@/components/icons/icons";
import React, { useState } from "react";


const navigationContent = [{header: "Willkommen", links: ["Übersicht", "Aufträge", "Serienbrief", "Telefon", "Chat", "Kalender", "Archive"], message: [false, false, false, false, true, false, false ], settings: "Einstellungen"}]

const SideNav = ({user, onItemSelected }:{user: string, onItemSelected: (item: string) => void}) => {
    const defaultValue = {width: "2/12", display: "", icon: 0}
    const [toogleNav, setNav] = useState(defaultValue)
    const [ activity, setActivity ] = useState<string |null>(null)

    const handleItemCLick = (item: string) => {
        setActivity(item);
        onItemSelected(item)
    }
    return(
        <nav className={`flex flex-grow h-full flex-col w-${toogleNav.width} gap-4 border-l-2 text-slate-600 font-semibold  px-8 py-8`} style={{transition: 'all ease-in-out', transitionDuration: '1000ms'}}>
            <div className="flex">
                <h3 className="pl-1" style={{display: toogleNav.display}}>{navigationContent[0].header} {user}</h3>
                 
                    {toogleNav.icon ? 
                        <div onClick={() => setNav(defaultValue)}><ChevronLeftIcon size="20" strokeColor="#4c66ff"/></div> :
                        <div onClick={() => setNav({width: "18", display: "none", icon: 1})}><ChevronRightIcon size="20" strokeColor="#4c66ff"/></div>
                    }

            </div>
            <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col gap-4 text-slate-500">
                    {
                    navigationContent[0].links.map((el, index) => (
                    <div key={index} className="relative flex flex-row gap-2 items-center hover:px-2 hover:bg-blue-default hover:text-white rounded-md py-2 px-1" style={activity == el ? {backgroundColor: '#4c66ff', color: 'white'} : {backgroundColor: ''}} onClick={()=> handleItemCLick(el)}>
                        <OrderStrokedIcon size="20" strokeColor="#475569"/>
                        <span style={{display: toogleNav.display}}>{el}</span>
                        {
                         navigationContent[0].message[index] ?
                        <div className="absolute right-2 flex bg-red-error w-5 h-5 rounded-full text-slate-50 justify-center items-center">
                                <p className="text-xs text-center text-red-50">1</p>
                        </div>
                        :
                        null
                        }
                    </div>

                    ))
                    }
                </div>

                <div>
                    <span style={{display: toogleNav.display}}>Einstellungen</span>
                </div>
            </div>
        </nav>
    )
}

export {SideNav}