'use client'
import React, { useState } from "react";
import Image from "next/image";
import { classed } from "@tw-classed/react";
import { EyeClosedIcon, EyeOpenIcon} from "../icons/icons";

const TextInput = classed("input", "flex w-full rounded-md border-2 border-slate-300 min-h-9 px-2 placeholder-slate-200 ")
const ClassedButton = classed("input", "flex w-full rounded-md text-white justify-center items-center text-center py-2")
const Label = classed("label")

const LoginForm = () => {

    const [passwordVisible, setPasswordVisibility] = useState(false)

    return (
        <form className="flex flex-col w-80 bg-white text-slate-600 items-center rounded-lg px-6 pt-4 pb-8 mb-16 gap-8 drop-shadow-sm">
            <div className="flex flex-col justify-center items-center gap-2 w-full">
                <Image src={"/Logos/fast_flow_logo.png"} width={50} height={50} alt="Fast Flow App logo"/>
                <h3 className="font-medium">Login to FastFlow</h3>
            </div>

            <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-2">
                    <label className="font-medium" htmlFor="">Email</label>
                    {/* Pattern */}
                    <TextInput type="email" autoComplete="email" placeholder="hello@fast-flow.de" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required/>
                    {/* Augen toggle Icon */}
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-end justify-between gap-2">
                        <label className="font-medium" htmlFor="">Passwort</label>
                        <a className="text-sm text-blue-default">Passwort vergessen?</a>
                    </div>
                    <div className="flex w-full rounded-md border-2 border-slate-300 justify-between px-2">
                    {/* Focus anpassen */}
                    <input type={passwordVisible ? "text" : "password"} placeholder="Passwort" className="focus:outline-none border-0 m-0 placeholder-slate-200"/>
                    <div onClick={() => setPasswordVisibility(!passwordVisible)} style={{cursor: 'pointer'}}>
                        {
                        passwordVisible ? 
                        <EyeOpenIcon strokeColor="#94a3b8" size="30" fillColor="#94a3b8"/> :
                        <EyeClosedIcon strokeColor="#94a3b8" size="30" />
                        }
                    </div>
                   </div>
            </div>
            <div className="flex flex-row gap-1">
                <input type="checkbox" name="" id="" />
                <label className="text-sm text-slate-300">login merken?</label>
            </div>

            <ClassedButton type="submit" value="Login" style={{cursor: 'pointer', backgroundColor: '#4C66FF'}}/>

            </div>
                <div className="flex flex-row w-full justify-center items-center">
                    <div className="h-[1px] w-full bg-slate-400 rounded-sm"></div>
                    <span className="text-center w-full">oder</span>
                    <div className="h-[1px] w-full bg-slate-400 rounded-sm"></div>
                </div>
            <div className="flex w-full flex-col gap-2">
                <button className="flex w-full rounded-md text-white justify-center items-center text-center py-2 bg-slate-200">
                    <Image src={"/Logos/apple_logo.png"} width={10} height={10} alt="apple logo" />
                </button>
                <button className="flex w-full rounded-md text-white justify-center items-center text-center py-2 bg-slate-200">
                    <Image src={"/Logos/google_logo.png"} width={10} height={10} alt="apple logo" />
                </button>

                <div>

                </div>
                <div className="flex justify-center items-center gap-2">
                    <span className="font-light text-xs text-slate-400">Noch keinen Account?</span>
                    <span className="font-light text-xs text-blue-default">Registriere dich!</span>
                </div>
            </div>

        </form>
    )
}

export default LoginForm;