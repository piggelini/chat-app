import Navigation from "./Navigation"


export default function Layout({ children }: any) {

    return (
        <div className="bg-dark text-light">
            <Navigation />
            {children}
        </div>

    )
}
