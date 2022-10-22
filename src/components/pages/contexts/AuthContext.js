import React, {createContext, useState} from 'react';
import { useNavigation } from 'react-router-dom';


export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user,setUser] = useState({})
    const [ habitos, setHabitos ] = useState([
        {
            id: 1,
            name: "Nome do hábito",
            days: [1, 3, 5]
        },
        {
            id: 2,
            name: "Nome do hábito 2",
            days: [1, 3, 4, 6]
        }
    ])
    const [value, setValue] = useState(0)
    

    return(
        <AuthContext.Provider value={{user, setUser, value, setValue, habitos, setHabitos}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;