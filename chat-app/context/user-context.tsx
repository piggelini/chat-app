import { ReactNode, createContext, useState, FC } from 'react';

export type User = {
    user: string
    setUser: (c: string) => void
}


export const UserContext = createContext<User | null>(null);



const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string>("");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default ContextProvider;