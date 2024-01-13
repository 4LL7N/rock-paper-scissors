import { createContext, useContext } from "react";

interface IntContext{
    game:boolean
    setGame:(Game:boolean) => void
}

export const Mycontext = createContext<IntContext|null>(null)

export function Context(){
    const context = useContext(Mycontext)

    if (context === undefined) {
        throw new Error("useUserContext must be used with a MyContext");
    }

    return context
}