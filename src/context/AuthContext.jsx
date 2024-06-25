import { useContext, useState } from "react";
import React from "react";


export const AuthContext =  React.createContext(null);

export function AuthProvider({children}){

    const [authToken, setAuthToken] = useState(null)
    return <AuthContext.Provider value={{authToken, setAuthToken}} >
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}