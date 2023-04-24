import { Children } from "react";

export default function Header({ children }: any) {
    return (
        <header className="bg-dark text-light" >
            <h2><i className="cursor-pointer">menu</i></h2>
            {children}
        </header>
    )

}