import { ChevronDownIcon, ChevronUpIcon } from "@/components/icons/icons";
import React, { useState } from "react";
import OrderInfoObject from "./OrderInfoObject";
import OrderInfoMeta from "./OrderInfoMeta";
import OrderInfoContact from "./OrderInfoContact";


const OrderInfo = () => {



    return(
        <div className="flex flex-col gap-8">
            <OrderInfoObject />
            <OrderInfoMeta />
            <OrderInfoContact />
        </div>
    )
}

export default OrderInfo;