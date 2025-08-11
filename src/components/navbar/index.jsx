'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Code2, Mail, PenLine } from "lucide-react"
const { House } = require("lucide-react")
import userIcon from '../../images/userPhoto.svg';
import { usePathname } from "next/navigation"

const Navbar = () => {

    const pathname = usePathname()

    return (
        <nav className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-4">
                <Image src={userIcon} alt={"Logo"} className="size-10 sm:size-12"/>
                <h1 className="text-xl hidden sm:block">Kevin Whara</h1>
            </div>
            <div className="flex flex-row gap-5 items-center">
                <Link href={"/"} className={`items-center flex gap-3 p-2 ${pathname === "/" ? "opacity-100 border-b-2" : "opacity-20 hover:opacity-100"}`}>
                    <House size={20}/>
                    <div className="hidden sm:block">
                        Home
                    </div>
                </Link>
                <Link href={"/Notes"} className={`items-center flex gap-3 p-2 ${pathname === "/Notes" ? "opacity-100 border-b-2" : "opacity-20 hover:opacity-100"}`}>
                    <PenLine size={20}/>
                    <div className="hidden sm:block">
                        Notes
                    </div>
                </Link>
                <Link href={"/Projects"} className={`items-center flex gap-3 p-2 ${pathname === "/Projects" ? "opacity-100 border-b-2" : "opacity-20 hover:opacity-100"}`}>
                    <Code2 size={20}/>
                    <div className="hidden sm:block">
                        Projects
                    </div>
                </Link>
                <Link href={"/Contacts"} className={`items-center flex gap-3 p-2 ${pathname === "/Contacts" ? "opacity-100 border-b-2" : "opacity-20 hover:opacity-100"}`}>
                    <Mail size={20}/>
                    <div className="hidden sm:block">
                        Contacts
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar