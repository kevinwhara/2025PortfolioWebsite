import { Skull } from "lucide-react"
import React from "react"

const Page = () => {
    return(
        <div className="flex flex-col gap-1 items-center justify-center h-screen">
            <Skull size={50} fill="red"/>
            <h1>You can't be here babe! I'm so sorry...</h1>
        </div>
    )
}

export default Page