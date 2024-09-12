import React, { useState } from "react";
import OrderDialogFeed from "./OrderDialogFeed";

const OrderOverview = () => {

    const [commentOpen, setCommentOpen] = useState(false);

    return(
        <div className="flex flex-col gap-8">
            
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl">Aufzugs Spiegel Gesprungen</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil sunt, quaerat ipsam maxime pariatur cupiditate dicta vero, delectus odio rerum temporibus saepe repellendus suscipit vitae voluptate necessitatibus, nisi quam.e</p>
            </div>

            <div className="flex flex-col h-72 bg-slate-200 px-4 py-4 gap-4 overflow-scroll border-b-slate-300 border-b-2">   
                    <OrderDialogFeed />
                    <OrderDialogFeed />
                    <OrderDialogFeed />
                    <OrderDialogFeed />
                    <OrderDialogFeed />
                    <OrderDialogFeed />
            </div>
            <div className="flex relative" style={{justifyContent: 'center'}}>
                <button className="flex justify-center bg-blue-default py-2 px-4 min-w-20 text-white font-medium rounded-md" onClick={() => setCommentOpen(true)}>Kommentieren</button>
            </div>
            <div className="absolute p-10 h-1/2 w-full bg-slate-100 left-0 bottom-0 gap-8" style={commentOpen ? { display: 'flex', flexDirection: 'column', justifyContent: 'center' } : { display: 'none'} }>
                <textarea className="p-4 h-56 rounded-lg">
                </textarea>
                <div className="flex relative gap-4" style={{justifyContent: 'center'}}>
                    <button className="flex justify-center bg-red-error py-2 px-4 min-w-36 text-white font-medium rounded-md" onClick={() => setCommentOpen(false)}>Abbrechen</button>
                    <button className="flex justify-center bg-blue-default py-2 px-4 min-w-36 text-white font-medium rounded-md">Kommentieren</button>
                </div>

            </div>
        </div>
    )
}

export default OrderOverview;