import React, {createContext, useState} from 'react';
import { useNavigation } from 'react-router-dom';


export const AuthContext = createContext({})

function AuthProvider({children}){
   // const navigation = useNavigation();
    const [user,setUser] = useState({})

    /*function signIn(email, senha){
        if(email !== '' && senha !== ''){
            setUser({
                email: email,
                status: "ATIVO"
            })
            navigation.navigate("/habitos")
        }
    }*/
    
    return(
        <AuthContext.Provider value={{algo: "ola"}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;