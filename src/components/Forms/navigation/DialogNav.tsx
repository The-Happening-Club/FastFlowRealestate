import React, { useState } from "react";

interface DialogNavProps {
    activity: number;
    setActivity: (activity: number) => void;
}
const DialogNav: React.FC<DialogNavProps> = ({ activity, setActivity }) => {
    
    const [activityIndicator, setActivityIndicator] = useState("left-0")

    return(
        <div className="flex flex-col gap-2">
            <nav className="flex justify-between gap-4">
                <div className="flex justify-center w-1/4" onClick={() => {setActivityIndicator("left-0"); setActivity(0)}}>
                    Übersicht
                </div>
                <div  className="flex justify-center w-1/4" onClick={() => {setActivityIndicator("left-1/4"); setActivity(1)}}>
                    Info
                </div>
                <div  className="flex justify-center w-1/4" onClick={() => {setActivityIndicator("left-2/4"); setActivity(2)}}>
                    Verlauf
                </div>
                <div  className="flex justify-center w-1/4" onClick={() => {setActivityIndicator("left-3/4"); setActivity(3)}}>
                    Dokumente
                </div>
            </nav>

            <div className="relative bg-slate-200 w-full h-2 rounded-lg">
                <div className={`relative bg-blue-default w-1/4 ${activityIndicator} h-full rounded-lg`} style={{transition: 'all ease-in-out', transitionDuration: '500ms'}}>

                </div>
            </div>
        </div>
    )
}

export default DialogNav;