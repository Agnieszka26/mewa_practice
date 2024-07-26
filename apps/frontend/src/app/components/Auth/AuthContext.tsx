import { createContext, ReactNode, useContext, useState } from "react";


type AuthContextType = {
    isLogged: boolean;
    login: () => void;
    logout: () => void;
    toggle: () => void;
}

const useAuth = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const login = () => { setIsLogged(true) }
    const logout = () => { setIsLogged(false) }
    const toggle = () => { setIsLogged(logged => !logged) }

    return { isLogged, login, logout, toggle }
}
export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context) {
        return context
    } else {
        throw new Error('Component should be placed inside AuthContextProvider')
    }
}

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {


    return <AuthContext.Provider value={useAuth()}>
        {children}
    </AuthContext.Provider>
}

