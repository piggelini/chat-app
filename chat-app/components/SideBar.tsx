import HamburgerIcon from "./HamburgerIcon"


export default function SideBar(props: any) {

    return (
        <aside className={`fixed bg-dark top-0 left-0 h-screen w-40 left 
        flex flex-col ps-3 shadow-lg transition-all duration-300 ease-in-out 
        ${props.open ? "translate-x-0" : "-translate-x-full"}`}>

            <section>
                <HamburgerIcon toggleMenu={props.toggleMenu} />
            </section>
            <section className="mt-20">
                <p>A</p>
                <p>B</p>
                <p>C</p>
            </section>
        </aside>
    )
}