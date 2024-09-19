'use client'

import React,{useState} from "react";
import Image from "next/image";
import { LogOutIcon } from "@/components/icons/icons";

const TopNav = () => {

    const [profilOpen, toggleProfil] = useState(false)

    return (
        <nav className="flex flex-row justify-between items-center px-8 py-4">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Image src={"/Logos/fast_flow_logo.png"} width={30} height={30} alt="fast flow logo"/>
                <span>Fast Flow</span>
            </div>
            <div className="relative flex flex-row justify-end bg-slate-200 rounded-full w-24">
                <div className="flex flex-col justify-between items-ceter py-3 px-3 w-1/2" onClick={() => toggleProfil(!profilOpen)}>
                    <div className="bg-slate-400 w-full h-[1.5px] rounded-lg"></div>
                    <div className="bg-slate-400 w-full h-[1.5px] rounded-lg"></div>
                    <div className="bg-slate-400 w-full h-[1.5px] rounded-lg"></div>
                </div>
                <div className="h-10 w-10 bg-blue-default rounded-full overflow-hidden" onClick={() => toggleProfil(!profilOpen)}>
                    <Image src={"/images/andreas.png"} width={50} height={50} alt="user" />
                </div>


                <div className={`absolute  h-fit w-72 items-center py-2 px-1 bg-slate-100 text-slate-700 top-10 z-40 rounded-md drop-shadow-lg gap-2 ${profilOpen ? "flex flex-col" : "hidden"}`}> 

                    <div className="flex flex-col justify-center items-center mt-4">
                        <span className="font-semibold">Andreas Sanchez Paetzmann</span>
                        <span className="text-sm">andi@ghv-web.de</span>
                    </div>

                    <div className="flex w-full  justify-center py-2 rounded-md bg-slate-300">
                        <span>Profil</span>
                    </div>
                    <div className="flex w-full  justify-center py-2 rounded-md bg-slate-300">
                        <span className="flex  justify-center items-center gap-3 text-red-error">Andreas ausloggen <LogOutIcon size="10" strokeColor="#f86c6a"/></span>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default TopNav