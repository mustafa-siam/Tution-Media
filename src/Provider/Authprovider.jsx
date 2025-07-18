import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import auth from '../Firebase/Firebase.init';
export const authcontext=createContext()
const Authprovider = ({children}) => {
     const [user,setuser]=useState(null)
    const [loader,setloader]=useState(true)
    const creatuser=(email,password)=>{
        setloader(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const signin=(email,password)=>{
        setloader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signout=()=>{
        setloader(true)
        return signOut(auth);
    }
  
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser);
            if(currentuser?.email){
                const user={email:currentuser.email}
                axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
                .then(res=>{
                    console.log("login",res.data)
                    setloader(false)
                
                })
            }
            else{
                axios.post('http://localhost:5000/logout',{},{withCredentials:true})
                .then(res=>{
                    console.log('logout',res.data)
                            setloader(false)
                })
            }
            setloader(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authinfo={
        creatuser,
        signin,
        signout,
        user,
        loader
    }
    return (
        <authcontext.Provider value={authinfo}>
            {children}
        </authcontext.Provider>
    );
};

export default Authprovider;