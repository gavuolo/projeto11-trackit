import React, {createContext, useState} from 'react';
import { useNavigation } from 'react-router-dom';


export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user,setUser] = useState({})

    const [value, setValue] = useState(0)
    

    return(
        <AuthContext.Provider value={{user, setUser, value, setValue}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;