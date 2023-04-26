

import { HiMenu } from "react-icons/hi";

type HamburgerProps = {
    toggleMenu: (event: React.MouseEvent<HTMLElement>) => void;

}


const HamburgerIcon = ({ toggleMenu }: HamburgerProps) => {
    return (
        <div onClick={toggleMenu} className=" rounded-full flex items-center justify-center 
            h-10 w-10 bg-dark cursor-pointer  hover:bg-hoverMenu text-beige
            hover:text-light mt-2 ml-1 transition-all duration-300 ease-linear" >
            <HiMenu size="26" />
        </div>
    )
}

export default HamburgerIcon;