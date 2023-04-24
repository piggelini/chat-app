import Header from "./Header"
import SideBar from "./SideBar"
export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            <SideBar />
            {children}
        </>
    )
}
