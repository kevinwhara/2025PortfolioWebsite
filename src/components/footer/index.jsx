import { Heart } from "lucide-react"
import React from "react"

const Footer = () => {
    
    const date = new Date()
    const year = date.getFullYear()

    return(
        <footer className="py-2 flex flex-col sm:flex-row justify-between text-sm">
            <h1>Content licensed under CC-BY-4.0, 2001 – {year}.</h1>
            <div className="flex flex-row gap-1 items-center">
                <h1>Made with</h1>
                <a href="https://instagram.com/kevinwhara_"><Heart fill="red" stroke="red" size={17}/></a>
                <h1>By <a href="https://instagram.com/kevinwhara_"><u>Kevinwhara</u></a></h1>
            </div>
        </footer>
    )
}

export default Footer