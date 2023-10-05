import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const getCookie = (name:string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            let token = parts.pop().split(';').shift();
            token = token.replace("token=", "")
            return token;
        }
    
        return false;
    }

    return(
        <AuthContext.Provider
            value={{
                getCookie
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }