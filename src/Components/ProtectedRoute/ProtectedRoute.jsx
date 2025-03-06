import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from "../DataProvider/DataProvider";
import { DataConnect } from 'firebase/data-connect'

const ProtectedRoute = ({children,msg, redirect}) => {

    const navigate = useNavigate()
    const [{user},dispatch] = useContext(DataContext)

    useEffect(()=>{

        if(!user){
            navigate("/auth",{state:{msg, redirect}})
        }
    },[user]);

      return children;
};

// pyment ---> /auth (/)



export default ProtectedRoute