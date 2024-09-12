import React, {useState} from "react";
import { GrapDotIcon } from "@/components/icons/icons";
import DragAndDropArea from "@/components/Functional/DragAndDropArea";
import OrderPrioIndicator from "./OrderPrioIndicator";
import OrderStatusIndicator from "./OrderStatusIndicator";
const options1 = [1,2,3,3]

interface IOrderModal {
    open: boolean,
    setOpenModal: (open: boolean) => void,
}




const OrderModal: React.FC<IOrderModal> = ({open, setOpenModal}) => {
    
    const cancleAction = () => {
        setOpenModal(false)
    }
    const [toggleStatus, toggleStatusVisibility] = useState(false)
    const [newStatus, setStatus] = useState<number | null>(null)
    const [newPrio, setPrio] = useState<number | null>(null)
    const [togglePrio, togglePrioVisibility] = useState(false)

    return (
        <div className="flex justify-center  items-center absolute w-full h-full bg-slate-600/75 z-30 text-slate-700"  style={open ? {display: 'flex'} : {display: 'none'}}>

        <div className="relative bg-slate-50  w-1/2  h-fit p-8  rounded-lg">

        <div className="relative flex flex-col w-full h-full">

            {/* button braucht die funktion nochmal nach zufragen bevor er das modal schließt falls daten schon eingetragen wurden */}
            <div className="flex flex-col gap-4">
            <div className="flex justify-end">   
                <button onClick={() => setOpenModal(false)} className="bg-red-error hover:bg-red-light text-slate-50 hover:text-red-error w-10 px-2 py-1 rounded-md" style={{cursor: 'pointer'}}>x</button>
            </div>

             <h3 className="font-semibold text-lg text-slate-600">Neuen Autfrag Anlegen</h3>
            <input type="text" name="" id="" placeholder="Titel" className="py-2 px-2 bg-slate-200"/>
            <textarea rows={5} cols={40} className="py-2 px-2 bg-slate-200 rounded-md" placeholder="Beschreibung des Sachverhalts" />
            

            {/* Option Hinzufügen das man zu einem bestimmten datum uhrzeit erinnert wird*/}
            <input type="date" name="" id="" className="text-slate-700 bg-slate-200 py-2 px-2 rounded-md"/>
            
            {/* Custom Drop Down Menu */}
            <input
              list="object"
              name="object"
              placeholder="Objekt wählen"
              className="bg-slate-200 py-2 px-2 rounded-md"
            />
            <datalist id="object">
              <option value="WEG 520" />
              <option value="WEG 320" />
              <option value="WEG 220" />
            </datalist>

            {/* Neuen Contact Anlege möglichkeit */}
            {/* Custom Drop Down Menu */}
            <input
              list="contact"
              name="contact"
              placeholder="Contact"
              className="bg-slate-200 py-2 px-2 rounded-md"
            />
            <datalist id="contact">
              <option value="Mirsard" />
              <option value="Jesus" />
              <option value="Wolfi" />
            </datalist>
            <div className="flex flex-row w-full gap-4">
                {/* click away um dropdown verschwinden zu lassen ergänzen */}
                <div className="relative flex justify-center h-14 items-center w-2/12 bg-slate-200 rounded-md px-4">
                <div onClick={() => togglePrioVisibility(!togglePrio)}>                        
                          <OrderPrioIndicator rank={newPrio ? newPrio : 0} />
                        </div>
                        <div className="absolute z-30 h-fit bg-slate-50 drop-shadow-md p-2 top-0" style={togglePrio ? {display: 'flex'} : {display: 'none'}}>
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


                <div className="flex w-10/12 h-14 items-center bg-slate-200 rounded-md px-4">
                    <span>zuweisen</span>
                    <ul className="absolute hidden">
                    <li>
                        <input type="checkbox" /> MP
                    </li>
                    <li>
                        <input type="checkbox" /> MP
                    </li>
                    <li>
                        <input type="checkbox" /> MP
                    </li>
                    </ul>
                </div>
            </div>
        
                <DragAndDropArea />

                <div className="flex justify-end gap-3">
                    <button className="py-2 bg-red-error hover:bg-red-light text-slate-50 hover:text-red-error px-4 rounded-md min-w-32" onClick={cancleAction}>Abbrechen</button>
                    <button className="py-2 bg-blue-default hover:bg-blue-light text-slate-50 hover:text-blue-default px-4 rounded-md min-w-32" onClick={() => alert("Email Composen ?")}>Speichern</button>
                </div>
            </div>
        </div>
        </div>
        </div>

    )
}


export default OrderModal