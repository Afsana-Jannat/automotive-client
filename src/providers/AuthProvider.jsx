import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    // google Login
    const googleLogin = () =>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    // sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect( () => {
        onAuthStateChanged(auth, (user) =>{
           setUser(user);
           setLoading(false);
        })
    }, [])

    // console.log(user);


    const authentication = {
        googleLogin,
        createUser,
        signin,
        logOut,
        user,
        loading
    }
   

    return (
        <AuthContext.Provider value={ authentication }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;