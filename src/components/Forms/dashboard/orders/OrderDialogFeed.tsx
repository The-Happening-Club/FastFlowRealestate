import React from "react";
import Image from "next/image";
import { LikeIcon, TrippleDotIcon } from "@/components/icons/icons";

const OrderDialogFeed = () => {
    return (
        <div className="flex bg-slate-50 gap-4 px-4 pt-2 pb-4">
        <div className="flex flex-col text-slate-600 gap-2">
            <div className="flex flex-row justify-between items-center">
                <div className="h-fit w-fit bg-blue-default border-[1px] border-blue-500 rounded-full overflow-hidden">
                     <Image src={"/images/andreas.png"} width={30} height={30} alt="user" />
               </div>
                <span className="font-semibold">Andreas Sanchez Paetzmann</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-400">vor 20min</span>
                <div className="flex items-center justify-center h-full">
                    <TrippleDotIcon size="20" fillColor="#94a3b8"/>
                </div>
            </div>
            <div className="flex">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae optio ullam magni dolores maxime, quisquam velit perferendis. Officiis aspernatur fuga, quidem delectus autem cupiditate reprehenderit, porro repudiandae, tempora facilis et?</p>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-row items-center justify-start gap-1">
                    <LikeIcon size="20" fillColor="#4c66ff" strokeColor=""/>
                    <span className="text-blue-default text-xs">10</span>
                </div>

                <div className="relative flex flex-row justify-end">

                    <div className="relative h-4 w-4 bg-blue-default border-[1px] border-orange-400 rounded-full overflow-hidden left-2">
                        <Image src={"/images/michaela.png"} width={50} height={50} alt="user" />
                    </div>

                    <div className="relative h-5 w-5 bg-blue-default border-[1px] border-green-400 rounded-full overflow-hidden">
                        <Image src={"/images/jesus.png"} width={50} height={50} alt="user" />
                    </div>

                </div>

            </div>
        </div>
    </div>
    )
}

export default OrderDialogFeed;