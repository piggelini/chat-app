import Navigation from "./Navigation"


export default function Layout({ children }: any) {




    console.log("rerender")
    return (
        <div className="bg-dark text-light">
            <Navigation />
            {children}
        </div>

    )
}
