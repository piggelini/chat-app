import SideBar from "./SideBar"
import Header from "./Header"
import { useState } from "react"


export default function Layout({ children }: any) {

    const [open, setIsOpen] = useState<boolean>(false)

    //Toggles the sidebar menu
    const toggleMenu = () => {
        setIsOpen(!open)
    }

    return (
        <div className="bg-green h-screen w-screen">
            <Header toggleMenu={toggleMenu} />
            <SideBar open={open} toggleMenu={toggleMenu} />
            {children}
        </div>

    )
}
