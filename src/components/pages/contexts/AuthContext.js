import React, {createContext, useState} from 'react';
import { useNavigation } from 'react-router-dom';


export const AuthContext = createContext({})

function AuthProvider({children}){

   // const navigation = useNavigation();
    const [user,setUser] = useState({})
    

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;