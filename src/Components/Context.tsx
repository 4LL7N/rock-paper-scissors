import { createContext, useContext } from "react";

type move =  [string,string]
  
  type Moves = {
    [key:number]:move
  }

interface IntContext{
    game:boolean
    setGame:(Game:boolean) => void,
    choice:number,
    setChoice:(choice:number) =>  void,
    moves:Moves,
    rules:boolean,
    setRules:(rules:boolean) => void,
    score:number,
    setScore:(score:number) =>  void,
    CPU:number,
    setCPU:(CPU:number) => void
}

export const Mycontext = createContext<IntContext|null>(null)

export function Context(){
    const context = useContext(Mycontext)

    if (context === undefined) {
        throw new Error("useUserContext must be used with a MyContext");
    }

    return context
}