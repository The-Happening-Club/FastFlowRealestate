import React, {useState} from "react";
import { FilterIcon, SearchIcon } from "@/components/icons/icons";

interface IOrderModal {
  open: boolean,
  setOpenModal: (open: boolean) => void,
}

const OrderControlls: React.FC<IOrderModal> = ({open, setOpenModal}) => {

    // const [addModal, setAddModal] = useState(open)

    return(
        

        <div className="relative flex w-full justify-between items-center py-4 px-4">
                
        <div className="flex gap-8 items-center">
        <div className="relative">
              <FilterIcon size="20" strokeColor="#94a3b8" />
          </div>
          <div className="flex flex-row gap-1 bg-slate-200 justify-center items-center rounded-md px-2">
            <input type="search" className="bg-transparent px-2 py-2 min-w-96 text-slate-700" />
            <SearchIcon size="20" strokeWidth="3" strokeColor="#94a3b8"/>
          </div>

        </div>
        <div>
          <div className="flex gap-8 items-center">

            <div>
              <button onClick={() => setOpenModal(!open)} className="bg-blue-default min-w-20 px-2 py-1 rounded-md">Add +</button>
            </div>
          </div>
        </div>

        

        </div>

    )
}

export default OrderControlls