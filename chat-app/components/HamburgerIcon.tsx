import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { FC } from "react"
import { NavProps } from "./Navigation";


const HamburgerIcon: FC<NavProps> = ({ toggleMenu, open }) => {
    return (
        <div onClick={toggleMenu} className={`rounded-full flex items-center justify-center 
            h-10 w-10 bg-dark cursor-pointer  hover:bg-hoverMenu text-beige
            hover:text-light mt-2 ml-1 transition-all duration-300 ease-linear ${open ? "bg-purple" : ""}`} >
            {open ? <HiX size="30" /> : <HiMenu size="30" />}
        </div>
    )
}

export default HamburgerIcon;