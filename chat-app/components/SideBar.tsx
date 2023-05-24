import HamburgerIcon from "./HamburgerIcon"
import Link from "next/link"
import { UserContext, User } from "@/context/user-context"
import { useContext, FC } from "react"
import { NavProps } from "./Navigation"

const SideBar: FC<NavProps> = ({ toggleMenu, open }) => {
    const { user, setUser } = useContext<User | null>(UserContext) ?? {};

    const logOut = () => {
        toggleMenu();
        if (setUser) {
            setUser("");
        }


    }

    return (
        <aside className={`fixed bg-purple top-0 left-0 h-full w-48 left 
        flex flex-col  shadow-lg transition-all duration-300 ease-in-out 
        ${open ? "translate-x-0" : "-translate-x-full"}`}>

            <section>
                <HamburgerIcon open={open} toggleMenu={toggleMenu} />
            </section>
            <section className="mt-20 text-light">
                <Link href="/" onClick={logOut}><p className="hover:bg-hoverMenu p-2" >{user !== "" ? "Log out" : "Log in"}</p></Link>
            </section>
        </aside>
    )
}

export default SideBar;