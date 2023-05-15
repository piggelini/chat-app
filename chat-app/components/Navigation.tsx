
import SideBar from "./SideBar"
import Header from "./Header"
import { useState, FC } from "react"

export type NavProps = {
    toggleMenu: () => void,
    open?: boolean
}

//Renders the header and the sidebar in the application and holds the state of the sidemenu
const Navigation: FC = () => {

    const [open, setIsOpen] = useState<boolean>(false)

    //Toggles the sidebar menu
    const toggleMenu = () => {
        setIsOpen(!open)
    }
    return (
        <>
            <Header toggleMenu={toggleMenu} />
            <SideBar open={open} toggleMenu={toggleMenu} />
        </>
    )
}
export default Navigation;