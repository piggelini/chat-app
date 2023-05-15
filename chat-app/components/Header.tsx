import HamburgerIcon from "./HamburgerIcon"
import { UserContext, User } from '@/context/user-context';
import { useContext } from "react";

const Header = (props) => {
    const { user } = useContext<User | null>(UserContext) ?? {};;

    return (
        <header className=" bg-dark text-light h-16 flex justify-between items-center shadow-md sticky top-0" >
            <HamburgerIcon toggleMenu={props.toggleMenu} />
            <p className="p-2">{user !== "" ? user : "Log in"}</p>
        </header>
    )
}
export default Header;