import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
type AuthContextType = {
    isLoggedIn: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>
}
const useAuth = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const login = ( ) => {setIsLogged(true)  }
    const logout = ( ) => { setIsLogged(false)  }
const toggle = ( ) => {  setIsLogged(s => !s) }

return {isLogged, login, logout, toggle}
 }
export const AuthContext = createContext<AuthContextType>({ isLoggedIn: false, setIsLogged: () => null });

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const {isLogged, login, logout, toggle} = useAuth();
    return <AuthContext.Provider value={{isLogged, toggle }}>
        {children}
    </AuthContext.Provider>
}

