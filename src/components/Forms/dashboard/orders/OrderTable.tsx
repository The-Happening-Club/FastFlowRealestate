import React from "react";
import OrderRow from "./OrderRow";

const orderRowArr = [1, 2, 3, 4, 5, 6, 7,1, 2, 3, 4, 5, 6, 7,  2, 3, 4, 5, 6, 7,  2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7];

{/* Diese sollen später Dynamisch geladen werde so das ich sie noch verändern kann*/}
{/* Ergänzen um breite der Spalte und Chevron um einzelne spalten zu sortieren*/}

const tableHeader = [{ text: "ID", span: "0.5fr"}, {text: "Objekt", span: "1fr"}, {text: "Topic", span: "2fr"}, {text: "Kontakt", span: "1fr"}, {text: "Deadline", span: "1fr"}, {text: "Zuweisung", span: "1fr"}, {text: "Prio", span: "1fr"}, {text: "Status", span: "1fr"}, {text:"", span: "0.5fr"}]


const OrderTable = () => {

    return(
        <>
        
        <div className="grid grid-cols-9  w-full border-b-2 border-slate-400 py-4 px-4">
        {tableHeader.map((el, index) => (
                <div key={index} style={{ gridColumn: `span ${el.span}`}}>
                  <span className={`text-slate-400 text-lg text-left`}>{el.text}</span>                
                </div>
        ))}

    </div>
    <div className="flex flex-col w-full max-h-[500px] md:max-h-[800px] lg:max-h-[400px] xl:max-h-[1000px] justify-between items-center py-4 overflow-scroll">
              {orderRowArr.map((el, index) => (
              <OrderRow key={index} deadline="2024-09-12" objNumber="WEG 250 -Taufkirchen" title="Geragen Tor defekt wegen hinrisigem nachbarn der einfach dagegen gefahren ist"/>
        ))}
    </div>
        </>
    )

}


export default OrderTable;