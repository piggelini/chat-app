import HamburgerIcon from "./HamburgerIcon"

const Header = (props: any) => {
    return (
        <header className="bg-dark text-light h-16 flex justify-start" >
            <HamburgerIcon toggleMenu={props.toggleMenu} />
        </header>
    )
}
export default Header;