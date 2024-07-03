import { createContext, useContext, useState } from "react";

type ContextProps = {
    mode: string
    setMode: React.Dispatch<React.SetStateAction<string>>
}
const DummyContext = createContext<ContextProps | null>(null)

export const DummyProvider = ({children}: {children: React.ReactNode}) => {
    const [mode, setMode] = useState('dark')
    return (
        <DummyContext.Provider value={{mode, setMode}}>
            {children}
        </DummyContext.Provider>
    )
}

export const useDummyContext = () => {
    const context = useContext(DummyContext);

    if(!context){
        throw Error('Component must be within context')
    }

    return context;
}