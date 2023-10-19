import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})


    // google Login
    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    // sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect( () => {
        onAuthStateChanged(auth, (user) =>{
           setUser(user)
        })
    }, [])

    console.log(user);


    const authentication = {
        googleLogin,
        createUser,
        signin,
        logOut,
        user
    }
   

    return (
        <AuthContext.Provider value={ authentication }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;